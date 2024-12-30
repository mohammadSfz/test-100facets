"use client";

import { useEffect } from "react";

import Card from "./card";
import journeyData from "@/data/journey.json";
import { CardProps } from "@/types";
import { journeyStore } from "@/store/journeyStore";
import Controller from "./Controller";

export default function Journey() {
  const { list, setList, currentStep } = journeyStore();

  useEffect(() => {
    setList(journeyData as CardProps[]);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        {list.length > 0 && <Card {...list[currentStep]} />}
      </div>
      <Controller />
    </div>
  );
}
