import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import OAuth from '../components/OAuth';

const Button = ({ children, className, icon, ...props }) => (
  <button
    className={`flex justify-center items-center px-4 py-3 rounded-md w-full transition-all duration-300 hover:scale-105 ${className}`}
    {...props}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {children}
  </button>
);

const InputField = ({ label, error, ...props }) => (
  <div className="mb-4">
    <label className="block font-bold text-white mb-2 text-left">{label}</label>
    <input
      className={`w-full px-3 py-2 rounded-md border-2 ${error ? 'border-red-500' : 'border-white border-opacity-50'} text-white bg-transparent placeholder-white placeholder-opacity-50 transition-transform duration-300 hover:scale-105`}
      {...props}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [variable, setVariable] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const dataToBeSent = location.state?.from?.from?.a ? location.state?.from?.from?.a : null;
  const queryString = new URLSearchParams(dataToBeSent).toString();





  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return 'Password must be at least 8 characters long';
    }
    if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChar) {
      return 'Password must include uppercase, lowercase, numbers, and special characters';
    }
    return '';
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (name === '' || email === '' || password === '') {
      setErrorMessage('Please fill all fields');
      setLoading(false);
      return;
    }
    if (passwordError) {
      setErrorMessage(passwordError);
      setLoading(false);
      return;
    }
    try {
    
      setErrorMessage(null);
      const res = await axios.post('http://localhost:3000/auth/signup', {
        userName: name.trim(),
        email: email.trim(),
        password: password.trim(),
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      
      setVariable(true);
      setLoading(false);
      
      setTimeout(() => {
        navigate('/signin');
      }, 10000);
    } catch (e) {
      setLoading(false);
      setErrorMessage(e.response?.data?.message || 'An error occurred');
    }
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      handleSubmit(e);
    }
  }

  return (
    <main className="min-h-screen bg-slate-800 relative flex items-center justify-center p-4">
      <img src="https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082851/signin_bg_opfxwf.png" className="absolute inset-0 w-full h-full object-cover" alt="Background" />
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl text-white leading-tight acme-font">
            You're just one step away from embarking on a remarkable{" "}
          </h1>
          <span className="text-teal-400 text-8xl" style={{ fontFamily: "'Aladdin', cursive" }}>Adventure</span>
        </div>
        <div className="lg:w-1/2 w-full max-w-md">
          {variable && (
            <div className='mt-4 p-4 rounded-lg text-center bg-green-100 text-green-700 border border-green-400'>
              An Email Verification Link has been sent to your email address. Please verify your email address to continue.
            </div>
          )}
          <form className="bg-black bg-opacity-60 rounded-xl border border-white border-opacity-20 p-6 text-lg" onSubmit={handleSubmit}>
            <h2 className="font-bold text-white text-2xl mb-6 text-left">Sign up</h2>
            <OAuth />
            <div className="my-4 flex items-center">
              <hr className="flex-grow border-white border-opacity-80" />
              <span className="px-3 text-white text-opacity-80">or</span>
              <hr className="flex-grow border-white border-opacity-80" />
            </div>
            <InputField
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              required
              label="Name"
              type="text"
              placeholder="Enter Your Full Name"
            />
            <InputField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              required
              label="Email"
              type="email"
              placeholder="Enter Your Email Address"
            />
            <InputField
              value={password}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
              required
              label="Password"
              type="password"
              placeholder="At least 8 characters"
              error={passwordError}
            />
            <Button
              disabled={loading || !!passwordError}
              onKeyPress={handleKeyPress}
              className="mt-6 font-bold text-white bg-teal-400 bg-opacity-60 hover:bg-opacity-80"
            >
              {loading ? (<Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>) : 'Sign Up'}
            </Button>
            <div className="text-center text-white mt-6">
              <p>Already have an account?</p>
              <a href="/signin" className="font-bold text-teal-400 hover:underline mt-2 inline-block transition-transform duration-300 hover:scale-105">
                Log in
              </a>
            </div>
          </form>
          {errorMessage && (
            <div className='mt-4 p-4 rounded-lg text-center bg-red-100 text-red-700 border border-red-400'>
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Signup;