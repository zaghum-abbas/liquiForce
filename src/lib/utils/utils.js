import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const createWindowResizeHandler = (callback) => {
  const handleResize = () => {
    callback(window.innerWidth);
  };
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
};
