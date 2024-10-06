import { signal } from "@preact/signals";
import { CalendarType } from "../types/subjectTypes.ts";

export const yearCalendarArray = signal<CalendarType[]>([]);
