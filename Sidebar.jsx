// import React from 'react'
// import './Sidebar.css'
// import { assets } from '../../assets/assets'
// import { NavLink } from 'react-router-dom'

// const Sidebar = () => {
//   return (
//     <div className='sidebar'>
//       <div className="sidebar-options">
//         <NavLink to='/add' className="sidebar-option">
//           <img src={assets.add_icon} alt="" />
//           <p>Add Items</p>
//         </NavLink>
//         <NavLink to='/list' className="sidebar-option">
//           <img src={assets.order_icon} alt="" />
//           <p>List Items</p>
//         </NavLink>
//         <NavLink to='/orders' className="sidebar-option">
//           <img src={assets.order_icon} alt="" />
//           <p>Orders</p>
//         </NavLink>
//       </div>
//     </div>
//   )
// }

// export default Sidebar


// import React, { useState } from 'react';
// import './Sidebar.css';

// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
//       <button className="toggle-btn" onClick={toggleSidebar}>
//         {collapsed ? '➡️' : '⬅️'}
//       </button>
//       <ul className="sidebar-menu">
//         <li><a href="/">🏠 Dashboard</a></li>
//         <li><a href="/list">🍔 Food List</a></li>
//         <li><a href="/orders">📦 Orders</a></li>
//         <li><a href="/add">➕ Add Food</a></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



import React from 'react';
import './Sidebar.css';
import { assets } from './../../../../frontend/src/assets/assets';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={assets.logo} alt="Logo" />
        <h1>Homey</h1>
      </div>
      <div className="sidebar-menu">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          <i className="fa fa-dashboard"></i>
          <span>Dashboard</span>
        </Link>
        <Link to="/orders" className={location.pathname === '/orders' ? 'active' : ''}>
          <i className="fa fa-truck"></i>
          <span>Orders</span>
        </Link>
        <Link to="/add" className={location.pathname === '/add' ? 'active' : ''}>
          <i className="fa fa-plus-circle"></i>
          <span>Add Food</span>
        </Link>
        <Link to="/list" className={location.pathname === '/list' ? 'active' : ''}>
          <i className="fa fa-list"></i>
          <span>Food List</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
