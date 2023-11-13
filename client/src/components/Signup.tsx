import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Login.css'

const Signup = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: ""
    });
    return (
        <div className="loginPage">

            <h2>Sign Up</h2>

            <form >

                <div className="form-block">
                    <label>Name:</label>
                    <input type="text" name="name"  value={formData.name} placeholder="Enter your name" required/>
                </div>

                <div className="form-block">
                    <label>Username:</label>
                    <input type="text" name="username"  value={formData.username} placeholder="Enter username" required/>
                </div>

                <div className="form-block">
                    <label>Password:</label>
                    <input type="password" name="password"  value={formData.password} placeholder="Enter your password" required/>
                </div>

                <button type="submit" className='signupButton'>Signup</button>

                <p>
                    Already have an account? <a onClick={() => {navigate('/login')}}>Login</a>
                </p>

            </form>

        </div>
    )
}

export default Signup;

