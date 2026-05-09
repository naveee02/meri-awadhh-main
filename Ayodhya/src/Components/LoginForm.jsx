import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAuth } from "../AuthContext";
import './style.css';

function LoginForm() {
  const { user, login, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/Booking');
    }
  }, [user, navigate]);

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
      const response = await axios.post('http://localhost:5000/login', 
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      if (response.data.success) {
        login(response.data.user);
        toast.success("Login successful!");
        navigate('/Booking');
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error.response?.data?.message || 
        error.message || 
        "Login failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='body'>
      <div className="wrapper">
        <div className="login_box">
          <div className="login-header"><span>Login</span></div>
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
                placeholder=" "
              />
              <label className="label">Password</label>
            </div>
            <div className="input_box">
              <button 
                type="submit" 
                className="input-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
          <div className="register">
            <span>Don't have an account? <Link to='/signup'>Register</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;