
export default function Register(message:undefined|string){
    return (
        <div>
            <h2>Register</h2>
            {message && <p class="error-message">{message}</p>}
            <form action="/register" method="post">
                <label for="full_name">Full Name</label>
                <input type="text" name="full_name" id="full_name" required/>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required/>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" required/>
                <button type="submit">Register</button>
                <p class="login-link">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </form>
        </div>
    );
}
