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
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllRestaurants from "./pages/AllRestaurants";
import RestoPage from "./pages/RestoPage";
import Dashboard from "./pages/Dashboard";
import OfferPage from "./pages/OffersPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offers" element={<OfferPage/>} />
        <Route path="/restaurants" element={<AllRestaurants />} />
        <Route path="/restaurant/:id" element={<RestoPage/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<SettingsPage/>} />
        <Route path="/cart" element={<SettingsPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
