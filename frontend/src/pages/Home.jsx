import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { change_nav } from "../reducers/nav";
import { useDispatch } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  // document.body.style.zoom="125%";
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.nav}>
          <ul type="none" className={styles.nav1}>
            <li className={styles.logo}>
              <a className={styles.linking} href="/home">
                REMA
              </a>
            </li>
            <li className={styles.li}>
              <ul type="none" className={styles.nav2}>
                <li className={styles.li}>
                  <a className={styles.linking} href="/offers">
                    Offers
                  </a>
                </li>
                <li className={styles.li}>
                  <a className={styles.linking} href="/restaurant/1">
                    Order
                  </a>
                </li>
                <li className={styles.li}>
                  <a className={styles.linking} href="/cart">
                    Cart
                  </a>
                </li>
                <li className={styles.li}>
                  <a className={styles.linking} href="/login">
                    Login
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.edge}>
          <div className={styles.main}>
            {/* <div className="nav">
                        <ul type="none" className="nav1">
                            <li><a href="#" >LOGO</a></li>
                            <li>
                                <ul type="none" className="nav2">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Order</a></li>
                                    <li><a href="#">Cart</a></li>
                                    <li><a href="#">Login</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div> */}
            <div className={styles.first}>
              <p>
                <span className={styles.up_info}>
                  Unforgettable dining experience
                </span>
              </p>
              <p className={styles.title1_m}>
                <span className={styles.title1}>DELIGHT</span>
              </p>
              <p className="title2-m">
                <span className={styles.title2}>Restaurant</span>
              </p>
              <p>
                <span className={styles.down_info}>
                  A progression of rare and beautiful ingredients.
                </span>
              </p>
              <br />
              <button
                onClick={() => {
                  navigate("/restaurants");
                  useDispatch(change_nav("Restaurants"));
                }}
                className={styles.book_btn}
              >
                Dive in &#8594;
              </button>
              <button
                className={styles.menu_btn}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </div>
            <div className={styles.second}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
