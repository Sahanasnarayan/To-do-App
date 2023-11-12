import { useNavigate } from "react-router-dom";
import './Login.css'
import { useState } from "react";
// import axios from 'axios';
function Login() {
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    return (
        <div className="loginPage">
            <h2>Login Page</h2>
            <form >
                <div className="form-block">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        placeholder="Enter username"
                        
                    />
                </div>

                <div className="form-block">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="Enter your password"
                        
                    />
                </div>

                <button type="submit" className="loginButton">
                    Login
                </button>

                <p>
                    Don't have an account?{' '}
                    <a onClick={() => navigate('/register')}>Click Here</a>
                </p>
            </form>
        </div>
    );
};

export default Login;

