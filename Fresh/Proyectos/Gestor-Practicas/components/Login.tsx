

export default function Login(message:string|undefined) {
  return (
    <div >
        <h2>Login</h2>
        {message && <p class="error-message">{message}</p>}
        <form action="/login" method="post">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required/>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required/>
            <button type="submit">Login</button>
            <p class="register-link">
                Don't have an account? <a href="/register">Register</a>
            </p>
        </form>
    </div>
    );
}
