import { FunctionComponent } from "preact";
import { user } from "../types.ts";
import AuthForm from "../components/authform.tsx";

type Props = {
  user: user;
};

const AddProduct: FunctionComponent<Props> = (props) => {
  const addauth = (user: user) => {
    const cookies = document.cookie.split("; ");
    const userCookie = cookies.find((cookie) => cookie.startsWith("user="));
    if (!userCookie) {
      document.cookie = `user=${JSON.stringify([
        { user  },
      ])}; path=/`
    } else {
      const user_: user[] = JSON.parse(userCookie.split("=")[1]);
      const found = user_.find((item) => item.email === user.email);
      if (!found) {
        user_.push({ user });
      }
      document.cookie = `user=${JSON.stringify(user_)}; path=/`
    }
  };

  return (
    <>
    <AuthForm/>
    </>
  );
};

export default AddProduct;
