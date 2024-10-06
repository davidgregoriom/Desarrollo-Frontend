import { FunctionComponent } from "preact";

const DeleteForm: FunctionComponent = () => {
  return (
    <form class="AddForm" action="/delete" method="DELETE">
      <h1>Delete contact</h1>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Delete</button>
    </form>
  );
};

export default DeleteForm;
