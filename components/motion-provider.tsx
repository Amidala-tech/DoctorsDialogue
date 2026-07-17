"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Honors the user's OS-level reduced-motion preference across all animations. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
