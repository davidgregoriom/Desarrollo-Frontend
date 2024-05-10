import { message } from "../types.ts";
import { FunctionComponent } from "preact";

type Props={
    message: message;
};
const ClientID: FunctionComponent<Props> = ({ message }) => {

    return (
        <div>
            <div>{message.email}</div>
            <div>{message.title}</div>
            <div>{message.text}</div>
            <div>{message.date}</div>
        </div>
    )

}
export default ClientID;
