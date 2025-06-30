"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FileUploadProps } from "@/types";

const FileUpload: React.FC<FileUploadProps> = ({
  type,
  accept,
  placeholder,
  folder,
  variant = "light",
  onFileChange,
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      // In a real implementation, you would upload to ImageKit here
      // For now, we'll create a mock URL
      const mockUrl = `https://ik.imagekit.io/your-imagekit-id/${folder}/${file.name}`;
      
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setUploadedFile(file.name);
      onFileChange(mockUrl);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = () => {
    setUploadedFile(null);
    onFileChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full">
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        className="hidden"
        disabled={isUploading}
      />
      
      {!uploadedFile ? (
        <Button
          type="button"
          variant="outline"
          onClick={handleClick}
          disabled={isUploading}
          className={cn(
            "w-full h-32 border-2 border-dashed transition-colors",
            variant === "dark" 
              ? "border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500 hover:bg-gray-700" 
              : "border-gray-300 bg-gray-50 text-gray-600 hover:border-gray-400 hover:bg-gray-100",
            isUploading && "opacity-50 cursor-not-allowed"
          )}
        >
          <div className="flex flex-col items-center gap-2">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="text-sm font-medium">
              {isUploading ? "Uploading..." : placeholder}
            </span>
            <span className="text-xs text-gray-500">
              {type === "image" ? "PNG, JPG, GIF up to 10MB" : "PDF, DOC up to 10MB"}
            </span>
          </div>
        </Button>
      ) : (
        <div className={cn(
          "w-full p-4 border-2 rounded-md flex items-center justify-between",
          variant === "dark" 
            ? "border-gray-600 bg-gray-800 text-gray-300" 
            : "border-gray-300 bg-gray-50 text-gray-600"
        )}>
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <p className="text-sm font-medium">{uploadedFile}</p>
              <p className="text-xs text-gray-500">Upload successful</p>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleRemove}
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
          >
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
