import { FunctionComponent } from "preact";

const NewComponent: FunctionComponent = () => {
  return (
    <div >
      <form class="AddForm" action="/client/new" method="post">
        <h1>New Email</h1>
        <label for="email">Email</label>
        <input type="email" id="email" name="Email"></input>
        <label for="title">Title</label>
        <input type="text" id="title" name="Title"></input>
        <label for="text">Text</label>
        <input type="text" id="text" name="Text"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewComponent;
