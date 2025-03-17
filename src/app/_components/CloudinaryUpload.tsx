"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function UploadCloudinary() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadUrl, setUploadUrl] = useState();

  const CLOUDINARY_NAME = "dlvvsmj6j";
  const UPLOAD_PRESET = "food-delivery";
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const uploadImage = async () => {
    if (!image) {
      alert("Please select an image.");
      return;
    }
    setUploading(true);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("cloud_name", CLOUDINARY_NAME);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setUploadUrl(data.secure_url);
    } catch (err) {
      console.error(err);
      alert("Failed to upload file");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Input type="file" onChange={handleFileChange} disabled={uploading} />
      <Button onClick={uploadImage}>
        {" "}
        {uploading ? "Uploading ..." : "Upload"}
      </Button>
      {uploadUrl && (
        <div>
          <Image
            alt="uploaded"
            src={uploadUrl}
            width={400}
            height={400}
            className="rounded"
          />
          <a href={uploadUrl}>View Image</a>
        </div>
      )}
    </div>
  );
}
