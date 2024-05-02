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
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllRestaurants from "./pages/AllRestaurants";
import RestoPage from "./pages/RestoPage";
import Dashboard from './pages/Dashboard';
import OfferPage from "./pages/OffersPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import MenuManagement from "./pages/MenuManagement";
import OrderManagement  from "./pages/OrderManagement";
import RestaurantProfilePage from "./pages/RestaurantProfilePage";
import RestaurantSettingsPage from "./pages/RestaurantSettingsPage";
import { Navigate } from "react-router-dom";

function App() {
  const user = useSelector((state) => state.auth);
  const isCustomer = (user.role === 'customer');
  const isRestaurant = (user.role === 'restaurant');

  return (
     <Router>
      <Routes>
        {/* Common routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Customer routes */}
        {isCustomer && (
          <>
            <Route path="/offers" element={<OfferPage />} />
            <Route path="/restaurants" element={<AllRestaurants />} />
            <Route path="/restaurant/:id" element={<RestoPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </>
        )}

        {/* Restaurant routes */}
        {isRestaurant && (
          <>
            <Route path="/restaurant/dashboard" element={<Dashboard />} />
            <Route path="/restaurant/menu" element={<MenuManagement />} />
            <Route path="/restaurant/orders" element={<OrderManagement />} />
            <Route path="/restaurant/profile" element={<RestaurantProfilePage/>} />
            <Route path="/restaurant/settings" element={<RestaurantSettingsPage/>} />
          </>
        )}

        {/* Redirect to login if not authenticated */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
