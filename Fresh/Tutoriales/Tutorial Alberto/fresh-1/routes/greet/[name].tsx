import { PageProps } from "$fresh/server.ts";

"use client";
export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}
