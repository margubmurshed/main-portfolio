import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createExcerpt(content: string, wordLimit = 20): string {
  if (!content) return "";

  // remove newlines, markdown, html tags
  const plain = content
    .replace(/[#_*`>~-]/g, "") // markdown
    .replace(/<\/?[^>]+(>|$)/g, "") // html
    .replace(/\s+/g, " ") // extra spaces
    .trim();

  const words = plain.split(" ");
  if (words.length <= wordLimit) return plain;

  return words.slice(0, wordLimit).join(" ") + "...";
}