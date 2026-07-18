const uploadForm = document.getElementById("uploadForm");

uploadForm.addEventListener("submit", uploadFile);

async function uploadFile(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  try {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (!file) {
      alert("Please select a file first.");
      return;
    }

    // console.log(file);

    const formData = new FormData();
    formData.append("file", file);

    // console.log("formData", formData);
    for (const value of formData.values()) {
      console.log(value);
    }
    // const response = await fetch("http://127.0.0.1:3000/upload", {
    const response = await fetch("/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log("Success:", data);
  } catch (error) {
    console.error("Upload failed:", error);
  }
}
