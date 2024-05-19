import { FuntionComponent} from "preact";

type Props={
    message?:string;
}

export default function Forms({message}:Props):FuntionComponent {
    return (
        <div>
            <form method="POST" action="/chatbot">
                <h2>Ask a question to ChatBot</h2>
                <label for="question">Question</label>
                <input type="text" id="question" name="question" placeholder="Ask a question" />
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}
