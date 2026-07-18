# Cloud Images Upload with AWS S3 & Docker

A simple Node.js application developed as part of a class assignment to demonstrate file uploads to an Amazon S3 bucket using the AWS SDK. The project is fully containerized with Docker and includes GitHub Actions for automatic image builds and deployment to Docker Hub.

---

## 📌 Project Overview

The application allows users to:

- Upload an image through a web interface
- Send the image to a Node.js backend
- Store the uploaded image in an AWS S3 bucket
- Run the entire application inside a Docker container

This project demonstrates the integration of:

- Node.js
- Express.js
- AWS S3
- Docker
- Docker Compose
- GitHub Actions (CI/CD)

---

## 🚀 Technologies Used

- Node.js
- Express.js
- Multer
- AWS SDK v3
- Amazon S3
- Docker
- Docker Compose
- GitHub Actions
- HTML
- CSS
- JavaScript

---

## 📂 Project Structure

```
cloud-images/
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── styles.css
│
├── app.js
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── package.json
└── README.md
```

---

## ⚙️ Features

- Upload images from the browser
- Store files securely in an AWS S3 bucket
- Dockerized backend
- Environment variable configuration
- CORS support
- GitHub Actions workflow for automatic Docker image builds

---

## 🔧 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/cloud-images.git
cd cloud-images
```

Install dependencies:

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root.

```env
AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY
AWS_SECRET_ACCESS_KEY=YOUR_SECRET_KEY
AWS_REGION=YOUR_REGION
AWS_BUCKET_NAME=YOUR_BUCKET_NAME
CLIENT_URL=http://127.0.0.1:8080
```

---

## 🐳 Running with Docker

Build the Docker image:

```bash
docker build -t cloud-images .
```

Run the container:

```bash
docker run -p 8080:3000 --env-file .env cloud-images
```

Or with Docker Compose:

```bash
docker compose up --build
```

---

## ☁️ AWS S3 Integration

The application uploads images directly to an Amazon S3 bucket using the AWS SDK v3.

Upload Flow:

```
Browser
      │
      ▼
Express Server
      │
      ▼
AWS SDK
      │
      ▼
Amazon S3 Bucket
```

---

## 🔄 CI/CD

GitHub Actions automatically:

- Builds the Docker image
- Logs in to Docker Hub
- Pushes the latest Docker image

Every push to the main branch triggers the workflow.

---

## 📖 Learning Objectives

This project was created to practice:

- REST API development
- File uploads with Multer
- AWS S3 integration
- Environment variables
- Docker containerization
- Docker Compose
- GitHub Actions CI/CD
- Working with cloud services

---

## 📸 Demo

Users can:

1. Select an image
2. Upload it through the browser
3. Store it securely inside an AWS S3 bucket

---

## 👨‍💻 Author

Developed by **Tomer Krivizki**

As part of a cloud computing and Docker coursework project.
