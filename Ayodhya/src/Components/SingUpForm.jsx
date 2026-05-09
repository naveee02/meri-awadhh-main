import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAuth } from "../AuthContext";
import './style.css';

function SignUpForm() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:5000/signup', 
        formData,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      if (response.data.success) {
        toast.success("Signup successful! Please log in.");
        navigate('/login');
      }
    } catch (error) {
      console.error('Signup error:', error);
      toast.error(
        error.response?.data?.error || 
        error.message || 
        "Signup failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='body'>
      <div className="wrapper">
        <div className="login_box">
          <div className="login-header"><span>Sign Up</span></div>
          <form onSubmit={handleSubmit}>
            <div className="input_box">
              <input 
                type="text" 
                name="username"
                value={formData.username}
                onChange={handleChange}
                required 
                className="input-field" 
                placeholder=" "
              />
              <label className="label">Username</label>
            </div>
            <div className="input_box">
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required 
                className="input-field" 
                minLength="6"
                placeholder=" "
              />
              <label className="label">Password (min 6 characters)</label>
            </div>
            <div className="input_box">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
                className="input-field" 
                placeholder=" "
              />
              <label className="label">Email</label>
            </div>
            <div className="input_box">
              <button 
                type="submit" 
                className="input-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing up...' : 'Sign Up'}
              </button>
            </div>
          </form>
          <div className="register">
            <span>Already have an account? <Link to="/login">Login</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;