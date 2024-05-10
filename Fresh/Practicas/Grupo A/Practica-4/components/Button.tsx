import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";

const Button: FunctionComponent<{ num: Signal<number> }> = ({ num }) => {
  return (
    <div class="button">
        <button onClick={(e) => num.value = num.value - 1}>Anterior</button>
        <button onClick={(e) => num.value = num.value + 1}>Siguiente</button>
    </div>
)
};

export default Button;
