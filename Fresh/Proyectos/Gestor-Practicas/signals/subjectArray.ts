import { signal } from "@preact/signals";
import { SubjectType } from "../types/subjectTypes.ts";

export const subjectArray = signal<SubjectType[]>([]);
