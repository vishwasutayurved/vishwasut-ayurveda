import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date,
  year: "numeric" | "2-digit" | undefined = "numeric",
  month: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined = "long",
  day: "numeric" | "2-digit" | undefined = "numeric",
  format: string = "en-US",
  timeZone: string | undefined = undefined
) {
  return new Intl.DateTimeFormat(format, {
    timeZone,
    year,
    month,
    day,
  }).format(date)
}