import './register.css'; // Import your CSS file

const RegisterCard = () => {
    return (
        <div className="auth-wrapper">
            <div className="register-card">
                <h2>Register</h2>
                <h3>Enter your Details</h3>
                <form className="register-form">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Email" />
                    <input type="number" placeholder="Phone Number" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <a href='/login'>Already have an account?</a>
                    <button type="submit">REGISTER</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterCard;