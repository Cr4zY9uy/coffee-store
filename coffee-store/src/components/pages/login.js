import './login.css';
function Login() {
    return (
        <div className="wrapper">
            <div className="form-box login">
                <h2>Login</h2>
                <form>
                    <div className="input-box">
                        <input type="email" required />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="forgot">Forgot password ?</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="login-register">
                        <p>Don't have an account? <a href="register" className="register-link">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;