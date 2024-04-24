import React from "react";
import styles from "./RestoPage.module.css";
import CentralNavbar from "../components/CentralNavbar";

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
            <h2>Choose Dishes</h2>
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
        <div>yo</div>
      </div>
      {/* orders section */}

      <div className={styles.orders}>kuch bhi</div>
    </div>
    
  );
}
