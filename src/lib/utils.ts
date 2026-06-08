import { type ClassValue, clsx } from "clsx";

/**
 * Utility to conditionally join class names together.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
