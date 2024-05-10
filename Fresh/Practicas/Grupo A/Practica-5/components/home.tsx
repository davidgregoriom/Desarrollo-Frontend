import { message } from "../types.ts";
import { FunctionComponent } from "preact";

type Props={
    messages: message[];
};
const HomeComponent: FunctionComponent<Props> = ({ messages }) => {

    return (
        <div>
            {
                messages.map((message:message) => (
                    <div key={message.id}>
                        <a href={`/client/${message.id}`}>{message.id}</a>
                        <div>{message.title}</div>
                        <div>{message.text}</div>
                        <div>{message.date}</div>
                    </div>
                ))}
        </div>
    )

}
export default HomeComponent;
