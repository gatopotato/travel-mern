
import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { signInStart,signInFailure,signInSuccess } from '../redux/userSlice'
import OAuth from '../components/OAuth'
import { useLocation } from 'react-router-dom';
import { setFormData } from '../redux/formSlice'
import {refreshSignIn} from '../redux/userSlice'


const Button = ({ children, className, icon, ...props }) => (
  <button
    className={`flex justify-center items-center px-4 py-3 rounded-md w-full transition-all duration-300 hover:scale-105 ${className}`}
    {...props}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {children}
  </button>
);

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
  </svg>
);

const InputField = ({ label, ...props }) => (
  <div className="mb-4">
    <label className="block font-bold text-white mb-2 text-left">{label}</label>
    <input
      className="w-full px-3 py-2 rounded-md border-2 border-white border-opacity-50 text-white bg-transparent placeholder-white placeholder-opacity-50 transition-transform duration-300 hover:scale-105"
      {...props}
    />
  </div>
);





function Login(){


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading , error:errorMessage} = useSelector((state)=>state.user);
  const location = useLocation();
  const [verifiedMessage, setVerifiedMessage] = useState('');
  const params = new URLSearchParams(location.search);
  const a = location.state?.from?.a?.payload;
  const queryString =  new URLSearchParams(a).toString();
  const address = params.get('originalUrl');
  const { path,userName,phoneNumber,numberOfGuests,checkInDate,checkOutDate,branchName,roomName} = useSelector((state) => state.form);
  const form = useSelector((state) => state.form);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  useEffect(()=>{
    dispatch(refreshSignIn())
    
  },[])



   // Extract 'verified' query parameter from URL on component mount
   useEffect(() => {

    
    if (params.get('verified') === 'true') {
      setVerifiedMessage('Your email has been verified. Please enter your details to login.');
    }
  }, [location.search]);


  const handleThis = () => {
  
    navigate('/signup');
  }







  const handleSubmit = async (e) => {
    e.preventDefault();

    if(email === '' || password === ''){
      return dispatch(signInFailure('Please fill all fields')) ;
    }
    try{

      dispatch(signInStart());
   
      const res = await axios.post('http://localhost:3000/auth/signin', {
        email: email.trim(),
        password: password.trim()

      },{
        headers: {
          'Content-Type': 'application/json'
        }
      })

        dispatch(signInSuccess(res.data)); 


        if(path !== 'undefined' && path !== null && path !== '/'){
   
          dispatch(
           setFormData({
            phoneNo: phoneNumber,
            numberOfGuests: numberOfGuests,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate
          }))


         navigate(path);

        }
        else{

          navigate('/', { replace: true });
        }
        
  

    }catch(e){
      
      dispatch(signInFailure(e.response?.data?.message || "An error occured"));
    }
    

  }
  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      handleSubmit(e);
    }
    }


  return(
    <main className="min-h-screen bg-slate-800 relative flex items-center justify-center p-4">
    <img
      src="https://res.cloudinary.com/dgtt3iwmv/image/upload/v1720082851/signin_bg_opfxwf.png"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl text-white leading-tight acme-font">
          You're just one step away from embarking on a remarkable{" "} </h1>
          <span className="text-teal-400 anton-font text-8xl" style={{ fontFamily: "'Aladdin', cursive" }}>Adventure</span>
        
      </div>
      <div className="lg:w-1/2 w-full max-w-md">
        {verifiedMessage && (
              <div className='mt-4 p-4 rounded-lg text-center bg-green-100 text-green-700 border border-green-400'>
                Your email has been verified. Please enter your details to login.
              </div>
            )}
        <form className="bg-black bg-opacity-60 rounded-xl border border-white border-opacity-20 p-6 text-lg" onSubmit={handleSubmit} >
          <h2 className="font-bold text-white text-2xl mb-6 text-left">Log in</h2>
          <OAuth/>
          <div className="my-4 flex items-center">
            <hr className="flex-grow border-white border-opacity-80" />
            <span className="px-3 text-white text-opacity-80">or</span>
            <hr className="flex-grow border-white border-opacity-80" />
          </div>
          <InputField 
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          onKeyPress={handleKeyPress}
          label="Email" 
          type="email" 
          required
          placeholder="Enter Your Email Address" />



          <InputField 
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          onKeyPress={handleKeyPress}
          label="Password" 
          type="password" 
          required
          placeholder="Enter Your Password" />


          <Button 
          disabled={loading}
          onKeyPress={handleKeyPress}
          className="mt-6 font-bold text-white bg-teal-400 bg-opacity-60 hover:bg-opacity-80">
            {loading ? (<Spinner animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>) : 'Sign In'}
          </Button>


          <div className="text-center text-white mt-6">
            <p>Don't have an account?</p>
            <a onClick={handleThis} className="font-bold text-teal-400 hover:underline mt-2 inline-block transition-transform duration-300 hover:scale-105">
              Sign up
            </a>
          </div>
        </form>
        {errorMessage && (
        <div
          className='mt-4 p-4 rounded-lg text-center bg-red-100 text-red-700 border border-red-400'
        >
          {errorMessage}
        </div>
      )}
      </div>
    </div>
  </main>

  )


}


export default Login;
