


const Home = () => {
  return (
    <>
      <div className="bg">
        <div className="nav">
          <ul type="none" className="nav1">
            <li className="logo">
              <a href="#">LOGO</a>
            </li>
            <li>
              <ul type="none" className="nav2">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Order</a>
                </li>
                <li>
                  <a href="#">Cart</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="edge">
          <div className="main">
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
            <div className="first">
              <p>
                <span className="up-info">Unforgettable dining experience</span>
              </p>
              <p className="title1-m">
                <span className="title1">DELIGHT</span>
              </p>
              <p className="title2-m">
                <span className="title2">Restaurant</span>
              </p>
              <p>
                <span className="down-info">
                  A progression of rare and beautiful ingredients.
                </span>
              </p>
              <br />
              <button className="book-btn ">Dive in &#8594;</button>
              <button className="menu-btn">Login</button>
            </div>
            <div className="second"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
