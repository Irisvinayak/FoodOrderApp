import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formatPrice = (rupees: number) => `₹${rupees.toLocaleString("en-IN")}`;
