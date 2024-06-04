

export default function Logo(){
    return (
        <div>
            <h1>Logo</h1>
            <form method="GET" action="/logo">
                <input type="text" name="name" onChange={}></input>
            </form>
        </div>
    );
}
