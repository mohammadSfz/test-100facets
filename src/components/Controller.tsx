'use client';

import * as React from "react";

import { NextIcon, PauseIcon, PlayIcon, PrvIcon } from "@/icons";
import { journeyStore } from "@/store/journeyStore";
import { useEffect, useState } from "react";

export default function Controller() {
  const { nextCard, prevCard, currentStep, list } = journeyStore();
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (autoPlay) {
        nextCard();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentStep, list.length, autoPlay]);
  
  return (
    <div className="flex gap-6 mt-4 h-16 items-center flex-wrap">
      <button onClick={() => prevCard()}>
        <PrvIcon className="w-10 h-10" />
      </button>
      <button onClick={() => setAutoPlay(!autoPlay)}>
        {autoPlay ? (
          <PauseIcon className="w-10 h-10" />
        ) : (
          <PlayIcon className="w-10 h-10" />
        )}
      </button>
      <button onClick={() => nextCard()}>
        <NextIcon className="w-10 h-10" />
      </button>
      <div>
        Card {currentStep + 1} of {list?.length}
      </div>
    </div>
  );
}
