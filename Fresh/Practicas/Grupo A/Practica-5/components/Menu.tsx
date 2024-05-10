import { FunctionComponent } from "preact";

const Menu: FunctionComponent = () => {
  return (
    <div class="menu">
      <a href="/client/home">Home</a>
      <a href="/auth">Auth</a>
    </div>
  );
};

export default Menu;
