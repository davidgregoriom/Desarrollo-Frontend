import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const count = useSignal(0);
}
