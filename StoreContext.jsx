// import { createContext, useEffect, useState } from "react";
// import axios from 'axios'

// export const StoreContext = createContext(null)

// const StoreContextProvider = (props) => {

//     const [cartItems, setCartItems] = useState({});
//     const url = "http://localhost:4000";
//     const [token,setToken] = useState("");

//     const [food_list, setFoodList] = useState([]);

    

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }

// export default StoreContextProvider;


import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const url = "http://localhost:4000";

  const contextValue = {
    token,
    setToken,
    url
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
