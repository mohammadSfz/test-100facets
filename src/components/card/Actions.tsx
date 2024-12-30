"use client";

import * as React from "react";
import Link from "next/link";

import { ActionProps } from "@/types";

export default function Actions({ data: { text } }: ActionProps) {
  return (
    <div className="flex justify-start mt-4">
      <Link
        href="#"
        className="mt-6 px-8 py-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
      >
        {text}
      </Link>
    </div>
  );
}
