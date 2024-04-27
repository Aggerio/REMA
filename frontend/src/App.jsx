// import Home from "./pages/Home";
// import { useSelector, useDispatch } from 'react-redux';
// import { add_item } from './reducers/shopping_cart';

// function App() {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   function addItem(){
//     dispatch(add_item({"name": "Agam", "age": 20}));
//   }

//   return (
//     <div>
//       {/* <Home /> */}
//       <p>Hello</p>
//       <h1>Current number of items in react store: {JSON.stringify(cart['num_items'])}</h1>
//       <button onClick={addItem} >Press me </button>
//     </div>
//   );
// }

// export default App;

import React from "react";
import RestaurantPage from "./pages/RestaurantPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AllRestaurants from "./pages/AllRestaurants";
import RestoPage from "./pages/RestoPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/restaurants" element={<AllRestaurants />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
        <Route path="/restaurant-page" element={<RestoPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
