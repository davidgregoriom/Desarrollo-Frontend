import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
   <div>
    <h1>Counter</h1>
    <p>{props.count}</p>
    <Button onClick={() => props.count++}>Increment</Button>
    <Button onClick={() => props.count--}>Decrement</Button>
   </div>
  );
}
