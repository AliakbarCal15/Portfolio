import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

/**
 * Gets the time of day based on the current hour
 * @returns The current time of day: morning, afternoon, evening, or night
 */
export function getTimeOfDay(): TimeOfDay {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return 'morning';
  } else if (hour >= 12 && hour < 17) {
    return 'afternoon';
  } else if (hour >= 17 && hour < 21) {
    return 'evening';
  } else {
    return 'night';
  }
}

/**
 * Returns a friendly greeting based on the time of day
 * @param name Optional name to personalize the greeting
 * @returns A personalized greeting string
 */
export function getTimeBasedGreeting(name?: string): string {
  const timeOfDay = getTimeOfDay();
  const greeting = `Good ${timeOfDay}`;
  
  if (name) {
    return `${greeting}, ${name}!`;
  }
  
  return `${greeting}!`;
}

/**
 * Returns an emoji based on the time of day
 * @returns An emoji corresponding to the current time of day
 */
export function getTimeBasedEmoji(): string {
  const timeOfDay = getTimeOfDay();
  
  switch (timeOfDay) {
    case 'morning':
      return '☀️';
    case 'afternoon':
      return '🌤️';
    case 'evening':
      return '🌆';
    case 'night':
      return '🌙';
    default:
      return '👋';
  }
}
