import axios from "axios";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "";
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || "";

const uploadEndpoint = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

// const cld = new Cloudinary({
//   cloud: {
//     cloudName: cloudName,
//   },
//   url: {
//     secure: true,
//   },
// });

export async function uploadImage(image: File) {
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", uploadPreset);

    const res = await axios.post(uploadEndpoint, formData);

    console.log(res.data.secure_url);

    return res.data.secure_url;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    throw error;
  }
}
