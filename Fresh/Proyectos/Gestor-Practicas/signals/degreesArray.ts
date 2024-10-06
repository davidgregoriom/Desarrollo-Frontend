import { signal } from "@preact/signals";
import { DegreeType } from "../types/subjectTypes.ts";

export const degreesArray = signal<DegreeType[]>([]);
