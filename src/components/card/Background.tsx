"use client";

import * as React from "react";
import Image from "next/image";

import { BackgroundMediaProps } from "@/types";

// This component only supports image and video
export default function Background({ type, src }: BackgroundMediaProps) {
  const typeRender = {
    image: () => (
      <Image src={src} fill alt={"image background"} className="object-cover" />
    ),
    video: () => <video src={src} autoPlay className="aspect-video" />,
  };
  const renderContent = typeRender[type];

  return <div className="absolute h-full w-full z-0">{renderContent()}</div>;
}
