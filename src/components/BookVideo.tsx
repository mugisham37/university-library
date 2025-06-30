"use client";

import React from "react";
import { IKVideo, ImageKitProvider } from "imagekitio-next";
import config from "@/lib/config";

interface Props {
  videoUrl: string;
}

const BookVideo = ({ videoUrl }: Props) => {
  if (!videoUrl) {
    return (
      <div className="w-full h-64 bg-dark-300 rounded-xl flex items-center justify-center">
        <p className="text-light-100">No video available</p>
      </div>
    );
  }

  return (
    <ImageKitProvider
      publicKey={config.env.imagekit.publicKey}
      urlEndpoint={config.env.imagekit.urlEndpoint}
    >
      <IKVideo 
        path={videoUrl} 
        controls={true} 
        className="w-full rounded-xl"
        loading="lazy"
      />
    </ImageKitProvider>
  );
};

export default BookVideo;
