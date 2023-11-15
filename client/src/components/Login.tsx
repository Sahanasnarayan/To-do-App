import { useNavigate } from "react-router-dom";
import './Login.css'
import { useState } from "react";
import axios from 'axios';

interface FormData {
    emailId: string;
    password: string;
}

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormData>({
        emailId: "",
        password: ""
    })
    // giving a real time data
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.emailId || !formData.password) {
            alert("Please fill all the entries to login");
            // Alert is used instead of console log
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/user/login', formData);

            if (response.status === 200) {
                const user = response.data.user;
                navigate(`/home/${user._id}`);
            } else {
                alert("Something went wrong, Please try again");
            }
        } catch (error) {
            alert(`Invalid Username or Password. error: ${error.message}`);
        }
    }
    // here i will have to add validations
    return (
        <div className="loginPage">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-block">
                    <label htmlFor="emailId">emailId:</label>
                    <input
                        type="text"
                        name="emailId"
                        onChange={handleChange}
                        value={formData.emailId}
                        placeholder="Enter your emailId"

                    />
                </div>

                <div className="form-block">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        placeholder="Enter your password"

                    />
                </div>

                <button type="submit" className="loginButton">
                    Login
                </button>

                <p>
                    Don't have an account?{' '}
                    <a onClick={() => navigate('/register')}>SignUp</a>
                </p>
            </form>
        </div>
    );
};

export default Login;

