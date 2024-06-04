

export default function Register() {
    return (
        <div>
        <h1>Register</h1>
        <form method="POST" action="/register">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Register</button>
            <p class="register-link">
                Already have an account? <a href="/login">Login</a>
            </p>
        </form>
        </div>
    );
}
