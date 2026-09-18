import axios from "axios";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "";
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || "";

const uploadEndpoint = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

export async function uploadImage(image: File) {
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", uploadPreset);

    const res = await axios.post(uploadEndpoint, formData);
    const imageUrl = res.data.secure_url;

    // Read fresh user data at the time of execution
    const currUser = JSON.parse(
      sessionStorage.getItem("currentAccount") || "{}",
    );

    currUser.hasStories = true;
    currUser.stories = currUser.stories || [];
    currUser.stories.push(imageUrl);

    sessionStorage.setItem("currentAccount", JSON.stringify(currUser));

    return imageUrl;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    throw error;
  }
}
