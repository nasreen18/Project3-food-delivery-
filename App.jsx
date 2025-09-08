import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
// import LoginPopup from './components/LoginPopup/LoginPopup'

import Orders from './pages/Orders/Orders';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = 'http://localhost:4000';

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url={url} />} />
          <Route path='/list' element={<List url={url}/>} />
          <Route path='/orders' element={<Orders url={url}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App



// import React, { useState } from 'react';
// import Navbar from './components/Navbar/Navbar';
// import Sidebar from './components/Sidebar/Sidebar';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Add from './pages/Add/Add';
// import List from './pages/List/List';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import LoginPopup from './components/LoginPopup/LoginPopup';

// const App = () => {
//   const url = 'http://localhost:4000';

//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <div>
//       <ToastContainer />
//       <Navbar setShowLogin={setShowLogin} />
//       <hr />
//       <div className="app-content">
//         <Sidebar />
//         <Routes>
//         <Route path="/" element={<Navigate to="/" />} />
//           <Route path='/add' element={<Add url={url} />} />
//           <Route path='/list' element={<List url={url} />} />
//           {/* <Route path='/orders' element={<Orders url={url} />} /> */}
//         </Routes>
//       </div>

//       {/* Optionally add your LoginPopup here */}
//       {/* {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />} */}
//       {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

//     </div>
//   );
// };

// export default App;
