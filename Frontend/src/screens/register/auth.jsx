import { useEffect, useState } from 'react';
import './register.css'; // Import your CSS file

const Auth = () => {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("darkmode", (!isDarkMode).toString());
    };

    useEffect(() => {
        const isDarkModeEnabled = localStorage.getItem("darkmode") === "true";
        setIsDarkMode(isDarkModeEnabled);
    }, []);

    const containerClass = isSignUpMode ? "container sign-up-mode" : "container";
    //const bodyClass = isDarkMode ? "dark" : "";

    return (
        <div className={containerClass}>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                Sign up
            </button>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                Sign in
            </button>
            <input type="checkbox" id="theme-toggle" onChange={toggleDarkMode} checked={isDarkMode} />
        </div>
    );
};

export default Auth;