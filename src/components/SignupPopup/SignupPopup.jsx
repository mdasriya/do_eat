import React, { useState } from 'react';
import './SignupPopup.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';


const SignupPopup = ({ setShowLogin }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const { name, email, password } = formData;

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform your signup logic using the formData state
        console.log(formData);
    };

    const navigatePage = () => {
        navigate('/loginpopup');
    };

    return (
        <div className='login-popup'>
            <form onSubmit={handleSubmit} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>Signup</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    <input type="text" name="name" placeholder='Your name' value={name} onChange={handleInputChange} required />
                    <input type="email" name="email" placeholder='Your email' value={email} onChange={handleInputChange} required />
                    <input type="password" name="password" placeholder='Password' value={password} onChange={handleInputChange} required />
                </div>
                <button type="submit">Create account</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                <p>Already have an account? <span onClick={navigatePage}>Login here</span></p>
                
            </form>
        </div>
    );
};

export default SignupPopup;
