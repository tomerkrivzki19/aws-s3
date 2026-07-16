require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");

const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} = require("@aws-sdk/client-s3");

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner"); //creating a temporary links => we are making this becouse of security reason and also by doing that we are avoiding enjected files or more to the link
const { randomUUID } = require("crypto");

const app = express();
const PORT = 3000;

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});
const BUCKET = process.env.S3_BUCKET;

// Multer keeps the uploaded file temporarily in RAM.
const upload = multer({
  storage: multer.memoryStorage(),
});

const posts = [];

app.use(express.static("public")); //making a configuration to the server that it will accept a static filles > static -> things that will not change when the server is running | also it is a shorcut for the path.... ( avoiding importing all the times )

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  }),
);

// putting multer as a middlware
app.use("/upload", upload.single("file"));

app.post("/upload", async (req, res) => {
  try {
    console.log("Content-Type:", req.headers["content-type"]);
    console.log("Body:", req.body);
    console.log("File:", req.file);

    if (!req.file) {
      return res.status(400).json({
        message: "No file was received",
      });
    }

    const unique = randomUUID() + "-" + req.file.originalname; //will make new name for a new file before its saving in the bucket

    await s3.send(
      new PutObjectCommand({
        Bucket: BUCKET,
        Key: unique,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
      }),

      posts.unshift({ unique, description: req.body.description || "" }), //unshift=> a methoda that will add to the array each time ....
    );

    res.status(201).json({ message: "uploades to S3 successfully" });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
