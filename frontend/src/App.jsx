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
import RestaurantCard from "./components/RestaurantCard";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<RestaurantCard />} />
      </Routes>
    </Router>
  );
}

export default App;
