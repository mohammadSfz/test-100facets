import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

import Background from "./Background";
import Actions from "./Actions";
import { CardProps } from "@/types";

export default function Card({
  backgroundMedia,
  title,
  Content,
  subtitle,
  action,
}: CardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={title}
        animate={{
          opacity: [0.25, 1],
        }}
        transition={{
          duration: 1,
          ease: "backIn",
          times: [0, 0.5, 1],
          repeatDelay: 1,
        }}
      >
        <div className="relative w-full max-w-md mx-auto h-[600px] rounded-[32px] overflow-hidden">
          <div className="absolute inset-0">
            <Background {...backgroundMedia} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          <div className="relative h-full p-6 flex flex-col">
            <div className="text-white text-sm font-medium mb-auto">NEW</div>
            <div className="space-y-4">
              <h1 className="text-white">
                <span className="text-4xl font-bold block mb-2">{title}</span>
                {subtitle && (
                  <span className="text-2xl text-white">{subtitle}</span>
                )}
              </h1>

              <p className="text-white text-sm leading-relaxed max-w-[90%]">
                {Content}
              </p>

              {action && <Actions {...action} />}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
