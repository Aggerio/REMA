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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllRestaurants from "./pages/AllRestaurants";
import RestoPage from "./pages/RestoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route
          path="/restaurants"
          element={
            < AllRestaurants/>
          }
        />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
        <Route
          path="/restaurant-page"
          element={
            < RestoPage/>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
