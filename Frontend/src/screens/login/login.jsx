import './login.css'; // Import your CSS file

const LoginCard = () => {
    return (
        <div className="auth-wrapper">
            <div className="login-card">
                <h2>Login</h2>
                <h3>Enter your credentials</h3>

                <form className="login-form">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <a href='/forgot'>Forget your password?</a>
                    <a href='/register'>Don't have an account?</a>
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        </div>
    );
};

export default LoginCard;