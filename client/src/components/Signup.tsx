import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'

interface FormData {
  name: string;
  emailId: string;
  password: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    emailId: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.emailId || !formData.password) {
      alert("Please fill all the entries to Sign up");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/user/register', formData);

      if (response.status === 200) {
        const user = response.data.user;
        navigate(`/home/${user._id}`);
      } else {
        alert(`Something went wrong, Please try again`);
      }
    } catch (error) {
      alert(`User already Registered or email entered is wrong`);
    }
  };

  return (
    <div className="loginPage">

      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit} >

        <div className="form-block">
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="Enter your name" required />
        </div>

        <div className="form-block">
          <label>emailId:</label>
          <input type="text" name="emailId" onChange={handleChange} value={formData.emailId} placeholder="Enter your emailId" required />
        </div>

        <div className="form-block">
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Enter your password" required />
        </div>

        <button type="submit" className='signupButton'>Signup</button>

        <p>
          Already have an account? <a onClick={() => { navigate('/login') }}>Login</a>
        </p>
      </form>

    </div>
  )
}

export default Signup;

