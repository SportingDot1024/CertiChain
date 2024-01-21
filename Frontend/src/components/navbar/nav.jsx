import { Link } from "react-router-dom";
import "./nav.css";

export default function Navbar(){
    return (
      <div className="navbar">
        <div className="section">
          <a href="/" className="title">
            CertiChain
          </a>
        </div>
          <div className="section">
              <a href="/vault" className="link">
                  E-vault
              </a>
              <a href="/dashboard/Status" className="link">
                  Dashboard
              </a>
              <a href="/register" className="link">
                  Sign-UP/Sign-IN
              </a>
          </div>
      </div>
    );
}