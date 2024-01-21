import './forgot.css'; // Import your CSS file

const LoginCard = () => {
    return (
        <div className="auth-wrapper">
        <div className="forgot-card">
            <h2>Forgot Password</h2>
            <h3>Enter your credential</h3>
            <form className="forgot-form">
                <input type="text" placeholder="Username/Email" />
                <a href='/login'>Remember your password?</a>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <a href='/register'>Don't have an account?</a>
                <button type="submit">RESET</button>
            </form>
        </div>
</div>
    );
};

export default LoginCard;