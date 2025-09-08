// import React, {  useContext, useState } from 'react'
// // import './LoginPopup.css'
// import './LoginPopup.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../context/StoreContext';
// import axios from 'axios'

// const LoginPopup = ({setShowLogin}) => {

//     const {url, setToken} = useContext(StoreContext)

//     const [currentState, setCurrentState] = useState('Login')
//     const [data, setData] = useState({
//         name:"",
//         email:"",
//         password:""
//     })

//     const onChangeHandler = (event) =>{
//         const name = event.target.name
//         const value = event.target.value 
//         setData(data=>({...data,[name]:value}))
//     }

//    const onLogin = async (event) =>{
//         event.preventDefault()
//         let newUrl = url;
//         if(currentState==='Login'){
//             newUrl+= "/api/user/login"
//         }else{
//             newUrl += "/api/user/register"
//         }

//         const response = await axios.post(newUrl,data);

//         if(response.data.success){
//             setToken(response.data.token);
//             localStorage.setItem("token", response.data.token)
//             setShowLogin(false);
//         }else{
//             alert(response.data.message);
//         }
//    }

//   return (
//     <div className='login-popup'>
//         <form onSubmit={onLogin} className="login-popup-container">
//             <div className="login-popup-title">
//                 <h2>{currentState}</h2>
//                 <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
//             </div>
//             <div className="login-popup-inputs">
//                 {currentState==='Login'?<></>: <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
               
//                 <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
//                 <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
//             </div>

//             <button type='submit'>{currentState==='Sign Up'?'Create account':'Login'}</button>
//             <div className="login-popup-condition">
//                 <input type="checkbox" required />
//                 <p>By continuing, I agree to the terms of use & privacy policy</p>
//             </div>
//             {currentState==='Login'?
//              <p>Create a new account? <span onClick={()=> setCurrentState('Sign Up')}>Click here</span></p>
//              :<p>Already have an account? <span onClick={()=> setCurrentState('Login')}>Login here</span></p>}
            
            
//         </form>
//     </div>
//   )
// }

// export default LoginPopup




// import React, { useState } from 'react';
// import './loginpopup.css';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const LoginPopup = ({ url, onClose, onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post(`${url}/api/auth/login`, { email, password });
//       if (response.data.success) {
//         toast.success('Logged in successfully!');
//         onLoginSuccess(response.data.user);
//         onClose();
//       } else {
//         toast.error(response.data.message || 'Login failed');
//       }
//     } catch (error) {
//       toast.error('Network error or server issue');
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="login-popup-overlay" onClick={onClose}>
//       <div className="login-popup" onClick={(e) => e.stopPropagation()}>
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             autoFocus
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//         <button className="close-btn" onClick={onClose} aria-label="Close Login Popup">
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginPopup;



import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './loginpopup.css';

const LoginPopup = ({ url, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${url}/api/auth/login`, {
        email,
        password,
      });

      if (response.data.success) {
        toast.success('Login successful!');
        onLoginSuccess(response.data.user);  // Pass user info to parent
      } else {
        toast.error(response.data.message || 'Login failed');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginpopup-overlay" onClick={onClose}>
      <div
        className="loginpopup-container"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button className="close-btn" onClick={onClose} aria-label="Close login popup">
          &times;
        </button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="loginpopup-form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
