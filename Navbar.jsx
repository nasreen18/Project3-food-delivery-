// // import React from 'react'
// // import './Navbar.css'
// // import { assets } from './../../assets/assets';

// // const Navbar = () => {
// //   return (
// //     <div className='navbar'>
// //         <img className='logo' src={assets.logo} alt="" />
// //         <img src={assets.profile_image} alt="" className="profile" />
// //     </div>
// //   )
// // }

// // export default Navbar


// import React, { useState } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">FoodApp</div>

//         <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
//           <li><a href="/">Home</a></li>
//           <li><a href="/list">Food List</a></li>
//           <li><a href="/orders">Orders</a></li>
//           <li><a href="/add">Add Food</a></li>
//         </ul>

//         <div className="navbar-toggle" onClick={toggleMenu}>
//           <div className={`bar ${isOpen ? 'change' : ''}`}></div>
//           <div className={`bar ${isOpen ? 'change' : ''}`}></div>
//           <div className={`bar ${isOpen ? 'change' : ''}`}></div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import './Navbar.css';
import { assets } from './../../../../frontend/src/assets/assets';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={assets.logo} alt="Logo" />
        <h2>Homey Admin</h2>
      </div>
      <div className="navbar-links">
        <a href="/">Dashboard</a>
        <a href="/orders">Orders</a>
        <a href="/add">Add Food</a>
        <a href="/list">List Food</a>
      </div>
      <div className="navbar-profile">
        <img src={assets.profile_icon} alt="Admin" />
        <span>Admin</span>
      </div>
    </div>
  );
};

export default Navbar;
