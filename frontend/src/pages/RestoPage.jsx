import React from "react";
import styles from "./RestoPage.module.css";
import CentralNavbar from "../components/CentralNavbar";
import RestaurantCard from "../components/RestaurantCard";

export default function RestoPage() {
  return (
    <div>
      <CentralNavbar />
      {/* main dash */}
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1 className={styles.h1}>Delight Resto</h1>
            <p>
              <span className={styles.date}>Tuesday 69 dec</span>
            </p>
          </div>
          <div>
            <input className={styles.input} type="search" placeholder="Search for food,coffee"></input>
          </div>
        </div>
        <div>
          &nbsp;
          <ul className={styles.options}>
            <li>
              <span className={styles.option_name}>Hot Dishes</span>
            </li>
            <li>Cold Dishes</li>
            <li>Soups</li>
            <li>Grills</li>
            <li>If u say so</li>
          </ul>
        </div>
        <br></br>
        <br></br>
        <hr className={styles.linebreak}></hr>
        <br></br>
        <div className={styles.title2}>
          <div>
            <h2 className={styles.h2}>Choose Dishes</h2>
          </div>
          <div>
            <form className={styles.forms}>
              <select name="options">
                <option value="dine-in">dine in</option>
                <option value="delivery">delivery</option>
                <option value="takeaway">TakeAway</option>
              </select>
            </form>
          </div>
        </div>
        <br></br>
        <div>
        <RestaurantCard 
        rest_id="1"
        rest_img="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
        rest_name="Chicken-tikka"
        rest_distance="0.8km"
        rest_rating="4 stars"
        />
        <RestaurantCard 
        rest_id="1"
        rest_img="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
        rest_name="Vellore Restaurant 1"
        rest_distance="0.8km"
        rest_rating="4 stars"
        />
        </div>
      </div>
      {/* orders section */}

      <div className={styles.orders}>
       
      </div>
    </div>
    
  );
}
