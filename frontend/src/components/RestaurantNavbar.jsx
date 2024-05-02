import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { change_nav } from "../reducers/nav";
import { useNavigate, useLocation, Link } from "react-router-dom";
// import styles from  "./CentralNavBar.modules.css";

/*TODO: Add the ability to navigate to the new page when the time comes*/
/*TODO: Update the selected state in the redux store*/

export default function ResturantNavbar() {
  const nav = useSelector((state) => state.nav.current);
  const [currentNav, setCurrentNav] = useState(nav);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const currentRoute = pathSegments[2] || "home";
    if (currentRoute == "dashboard") {
      setCurrentNav("dashboard");
    } else if (currentRoute == "menu") {
      setCurrentNav("menu");
    } else if (currentRoute == "orders") {
      setCurrentNav("orders");
    }else if(currentRoute == "profile")
    {
        setCurrentNav("profile");
    }else if(currentRoute =="settings"){
        setCurrentNav("settings")
    }else{
        setCurrentNav(currentRoute);
    }
  }, [location.pathname]);

  console.log("Nav: ", currentNav);

  function updateNavbar(new_nav) {
    console.log("Navigating to:", new_nav.toLowerCase());
    dispatch(change_nav(new_nav || "Home"));
    navigate("/" + new_nav.toLowerCase());
    setCurrentNav(new_nav.toLowerCase());
  }
  return (
    <div className="absolute left-0 top-0 w-[8%] h-screen bg-[#1f1d2b]">
      <div className="inset-0 w-auto h-[12.5%] flex justify-center items-center">
        <div className="w-[60%] h-[70%] rounded-[10%] flex justify-center items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="dinner"
          >
            <path
              fill="#e57c23"
              d="M50 27.88c-3.17-.43-6-2.08-6-6.88 0-5.8 3-15 8-15s8 9.2 8 15c0 4.8-2.83 6.45-6 6.88V56a2 2 0 01-2 2h0a2 2 0 01-2-2zM40 44a8 8 0 00-16 0z"
            ></path>
            <path
              d="M55,25a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41,4,4,0,0,0,.76-4,1,1,0,0,1,1.9-.64,6,6,0,0,1-1.24,6A1,1,0,0,1,55,25Z"
              opacity=".5"
            ></path>
            <path
              fill="#e57c23"
              d="M44 45H20a1 1 0 010-2H44a1 1 0 010 2zM32 33a1 1 0 01-1-1V30a1 1 0 012 0v2A1 1 0 0132 33zM41.72 38a1 1 0 01-.81-.42 1 1 0 01.23-1.39L42.76 35a1 1 0 011.39.22 1 1 0 01-.22 1.4l-1.62 1.17A1 1 0 0141.72 38zM22.25 38a1 1 0 01-.58-.19l-1.62-1.16A1 1 0 0121.21 35l1.63 1.17A1 1 0 0122.25 38zM39 49H25a1 1 0 010-2H39a1 1 0 010 2zM36 53H28a1 1 0 010-2h8a1 1 0 010 2z"
            ></path>
            <g>
              <path
                fill="#f6d367"
                d="M9.67,28.87a7,7,0,0,1-2.62-1.53,6.29,6.29,0,0,1-2-4.61V19H19v3.73a6.55,6.55,0,0,1-4.67,6.14V58A2.21,2.21,0,0,1,12,60a2.53,2.53,0,0,1-1.65-.6A1.91,1.91,0,0,1,9.67,58Z"
              ></path>
              <path
                fill="#f6d367"
                d="M6 20a1 1 0 01-1-1V8A1 1 0 017 8V19A1 1 0 016 20zM18 20a1 1 0 01-1-1V8a1 1 0 012 0V19A1 1 0 0118 20zM12 20a1 1 0 01-1-1V8a1 1 0 012 0V19A1 1 0 0112 20z"
              ></path>
            </g>
          </svg>
        </div>
      </div>

      {/*Restaurant element*/}
      <div className="inset-0 w-auto h-[12.5%] flex justify-center items-center">
        <div
          onClick={() => {}}
          className={
            "w-[60%] h-[70%] rounded-[10%]  flex justify-center items-center cursor-pointer hover:shadow-[0_4px_8px_0_rgba(255,255,255,255.2),0_6px_20px_0_rgba(255,255,255,0.19)]" +
            (currentNav == "dashboard"
              ? " bg-[#ea7c69] shadow-[0_4px_8px_0_rgba(255,255,255,255.2),0_6px_20px_0_rgba(255,255,255,0.19)]"
              : " bg-[#eb966a23] ")
          }
        >
          <Link to="/restaurant/dashboard">
            <svg
              width="40"
              height="40"
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.3333 0H5C2.24333 0 0 2.24333 0 5V9.71833C0 11.4733 0.636667 13.0683 1.66667 14.295V30C1.66667 30.442 1.84226 30.866 2.15482 31.1785C2.46738 31.4911 2.89131 31.6667 3.33333 31.6667H16.6667C17.1087 31.6667 17.5326 31.4911 17.8452 31.1785C18.1577 30.866 18.3333 30.442 18.3333 30V21.6667H25V30C25 30.442 25.1756 30.866 25.4882 31.1785C25.8007 31.4911 26.2246 31.6667 26.6667 31.6667H30C30.442 31.6667 30.866 31.4911 31.1785 31.1785C31.4911 30.866 31.6667 30.442 31.6667 30V14.2933C32.6967 13.0683 33.3333 11.4733 33.3333 9.71667V5C33.3333 2.24333 31.09 0 28.3333 0ZM30 5V9.71833C30 11.6183 28.585 13.2383 26.8483 13.33L26.6667 13.3333C24.8283 13.3333 23.3333 11.8383 23.3333 10V3.33333H28.3333C29.2533 3.33333 30 4.08167 30 5ZM13.3333 10V3.33333H20V10C20 11.8383 18.505 13.3333 16.6667 13.3333C14.8283 13.3333 13.3333 11.8383 13.3333 10ZM3.33333 5C3.33333 4.08167 4.08 3.33333 5 3.33333H10V10C10 11.8383 8.505 13.3333 6.66667 13.3333L6.485 13.3283C4.74833 13.2383 3.33333 11.6183 3.33333 9.71833V5ZM13.3333 23.3333H6.66667V18.3333H13.3333V23.3333Z"
                // fill="url(#paint0_linear_441_6555)"
                fill={currentNav == "dashboard" ? "#FFFFFF" : "#EA7C69"}
              />
              <defs>
                <linearGradient
                  id="paint0_linear_441_6555"
                  x1="16.6667"
                  y1="0"
                  x2="16.6667"
                  y2="31.6667"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EA9769" />
                  <stop offset="1" stopColor="#EA6969" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
        </div>
      </div>

      {/*Order element */}
      <div className="inset-0 w-auto h-[12.5%] flex justify-center items-center">
        <div
          className={
            "w-[60%] h-[70%] rounded-[10%]  flex justify-center items-center cursor-pointer hover:shadow-[0_4px_8px_0_rgba(255,255,255,255.2),0_6px_20px_0_rgba(255,255,255,0.19)]" +
            (currentNav == "orders"
              ? " bg-[#ea7c69] shadow-[0_4px_8px_0_rgba(255,255,255,255.2),0_6px_20px_0_rgba(255,255,255,0.19)]"
              : " bg-[#eb966a23] ")
          }
        >
          <Link to="/restaurant/orders">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4978 6.7606C10.5855 6.93485 10.6382 7.12392 10.6533 7.32102L11.0419 12.8095C11.0471 12.8847 11.0827 12.9548 11.1409 13.0042C11.1845 13.0413 11.2381 13.0645 11.298 13.0712L11.3599 13.0724L16.9341 12.7366C17.3867 12.71 17.8305 12.8675 18.1604 13.1719C18.4902 13.4763 18.6768 13.9004 18.6744 14.3912C18.4265 18.0037 15.773 21.0237 12.159 21.8065C8.54503 22.5893 4.83611 20.9474 3.05781 17.7848C2.58229 16.9695 2.26178 16.0778 2.1138 15.1749L2.06643 14.8359C2.0253 14.5821 2.00319 14.3257 2 14.0795L2.00311 13.8372C2.0134 10.0655 4.66156 6.80403 8.38809 5.92434L8.64383 5.86807L8.7814 5.84532C9.502 5.74681 10.211 6.12453 10.4978 6.7606ZM9.01643 7.27813L8.93217 7.28772L8.70369 7.33933C5.73526 8.05477 3.6062 10.6103 3.48796 13.621L3.4828 13.8661C3.47569 14.0525 3.4825 14.2392 3.50499 14.4378L3.53277 14.6408C3.63212 15.495 3.90795 16.3206 4.34914 17.0772C5.81632 19.6863 8.86669 21.0367 11.839 20.3929C14.8113 19.7491 16.9936 17.2653 17.1958 14.3414C17.1958 14.2974 17.1774 14.2552 17.1446 14.225C17.1228 14.2049 17.0959 14.1912 17.0675 14.1851L17.024 14.1817L11.459 14.5169C10.9894 14.5503 10.5255 14.3992 10.17 14.0971C9.81456 13.7951 9.59684 13.3669 9.56522 12.91L9.17702 7.42617C9.17632 7.41708 9.17385 7.40822 9.15682 7.37299C9.1315 7.31695 9.07648 7.28131 9.01643 7.27813ZM13.423 2.00105C17.7084 2.12227 21.3029 5.20162 21.9904 9.34084L22 9.4567L21.9977 9.65855C21.9737 9.95621 21.8538 10.2393 21.6545 10.4668C21.4041 10.7524 21.0477 10.9286 20.6588 10.9567L14.0133 11.39C13.1615 11.4382 12.4295 10.8051 12.3741 9.97348L11.9299 3.44914L11.9349 3.30295L11.957 3.13824C12.0162 2.84619 12.1684 2.57938 12.3925 2.37643C12.6739 2.12156 13.0474 1.98661 13.423 2.00105ZM13.4113 3.44902L13.8511 9.87814C13.8537 9.91719 13.888 9.94688 13.9214 9.94502L20.5182 9.51352L20.4854 9.33352C19.8318 6.0802 17.0119 3.66443 13.6287 3.45932L13.4113 3.44902Z"
                fill={currentNav == "orders" ? "#FFFFFF" : "#EA7C69"}
              />
            </svg>
          </Link>
        </div>
      </div>

      
      <div className="inset-0 w-auto h-[12.5%] flex justify-center items-center">
        <div
          className={
            "w-[60%] h-[70%] rounded-[10%]  flex justify-center items-center cursor-pointer hover:shadow-[0_4px_8px_0_rgba(255,255,255,255.2),0_6px_20px_0_rgba(255,255,255,0.19)]" +
            (currentNav == "menu"
              ? " bg-[#ea7c69] shadow-[0_4px_8px_0_rgba(255,255,255,255.2),0_6px_20px_0_rgba(255,255,255,0.19)]"
              : " bg-[#eb966a23] ")
          }
        >
          <Link to="/restaurant/menu">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.07125 4.00254C5.89365 4.00216 5.72244 4.02226 5.55976 4.06048C5.33674 3.56893 5.04216 3.12794 4.70711 2.79289C4.13843 2.22422 3.24155 2 2 2V4C2.75845 4 3.1949 4.10911 3.29289 4.20711C3.67086 4.58508 4 5.35306 4 6L4.01005 6.14142L4.98992 13.0005C3.35036 13.0856 2.0802 14.3588 2.00123 15.9504L2 17C2.09682 18.6439 3.36275 19.9085 4.94324 19.9984L5.17026 19.9987C5.58174 21.1646 6.69331 22 8 22C9.30622 22 10.4175 21.1652 10.8293 20H13.1707C13.5825 21.1652 14.6938 22 16 22C17.6569 22 19 20.6569 19 19C19 17.3431 17.6569 16 16 16C14.6938 16 13.5825 16.8348 13.1707 18H10.8293C10.4175 16.8348 9.30622 16 8 16C6.69378 16 5.58254 16.8348 5.17071 18H5C4.49001 17.9694 4.03254 17.5124 3.99821 16.9401L4 16C4.02697 15.4813 4.48131 15.027 5.04955 14.9988L7.02369 14.9993L7.038 15H17.1169L17.2645 14.9532C18.0227 14.7126 18.6296 14.1416 18.917 13.4025L19.0224 13.194L19.3647 12.5159C19.7188 11.8139 20.0729 11.1108 20.418 10.4238C21.2632 8.74107 21.7948 7.67166 21.9125 7.40906C22.5171 6.06045 21.2924 5.02246 20.0407 5.00036L6.07125 4.00254ZM16.7694 13H7.11287C7.04866 12.9822 6.99973 12.9278 6.99015 12.86L6.01026 6.00073L19.8934 6.99493C19.6505 7.49032 19.2089 8.37516 18.6308 9.52609L18.6163 9.55493C18.2863 10.2119 17.9326 10.9141 17.579 11.6151L17.2371 12.2923L17.1076 12.5488L17.0588 12.6622C17.0065 12.8078 16.9028 12.9274 16.7694 13ZM16 20C16.5523 20 17 19.5523 17 19C17 18.4477 16.5523 18 16 18C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20ZM9 19C9 19.5523 8.55228 20 8 20C7.44772 20 7 19.5523 7 19C7 18.4477 7.44772 18 8 18C8.55228 18 9 18.4477 9 19Z"
                fill={currentNav == "menu" ? "#FFFFFF" : "#EA7C69"}
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="inset-0 w-auto h-[12.5%] flex justify-center items-center">
        <div
          className={
            "w-[60%] h-[70%] rounded-[10%]  flex justify-center items-center cursor-pointer hover:shadow-[0_4px_8px_0_rgba(255,255,255,255.2),0_6px_20px_0_rgba(255,255,255,0.19)]" +
            (currentNav == "profile"
              ? " bg-[#ea7c69] shadow-[0_4px_8px_0_rgba(255,255,255,255.2),0_6px_20px_0_rgba(255,255,255,0.19)]"
              : " bg-[#eb966a23] ")
          }
        >
          <Link to="/restaurant/profile">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM19.3995 17.1246C20.4086 15.6703 21 13.9042 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9042 3.59138 15.6703 4.6005 17.1246C5.72595 15.6381 8.3706 15 12 15C15.6294 15 18.274 15.6381 19.3995 17.1246ZM17.9647 18.7398C17.672 17.6874 15.5694 17 12 17C8.43062 17 6.328 17.6874 6.03532 18.7398C7.6233 20.1462 9.71194 21 12 21C14.2881 21 16.3767 20.1462 17.9647 18.7398ZM12 15C9.76086 15 8 13.4274 8 10C8 7.75576 9.5791 6 12 6C14.4142 6 16 7.92158 16 10.2C16 13.4796 14.2181 15 12 15ZM10 10C10 12.2693 10.8182 13 12 13C13.1777 13 14 12.2984 14 10.2C14 8.95042 13.2157 8 12 8C10.7337 8 10 8.81582 10 10Z"
                fill={currentNav == "profile" ? "#FFFFFF" : "#EA7C69"}
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="inset-0 w-auto h-[12.5%] flex justify-center items-center">
        <div
          className={
            "w-[60%] h-[70%] rounded-[10%]  flex justify-center items-center cursor-pointer hover:shadow-[0_4px_8px_0_rgba(255,255,255,255.2),0_6px_20px_0_rgba(255,255,255,0.19)]" +
            (currentNav == "settings"
              ? " bg-[#ea7c69] shadow-[0_4px_8px_0_rgba(255,255,255,255.2),0_6px_20px_0_rgba(255,255,255,0.19)]"
              : " bg-[#eb966a23] ")
          }
        >
          <Link to="/restaurant/settings">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6161 2C13.3251 1.99971 14.0041 2.28061 14.4983 2.77871C14.9925 3.27681 15.2599 3.94968 15.2383 4.57766L15.2468 4.72535C15.2641 4.87079 15.3124 5.01116 15.3908 5.14054C15.5435 5.39567 15.7935 5.58081 16.0857 5.65514C16.3779 5.72947 16.6882 5.68688 16.9821 5.51839L17.146 5.4355C18.3759 4.86897 19.8511 5.31918 20.5333 6.47928L21.1465 7.52174C21.1627 7.54922 21.1769 7.57762 21.1892 7.60674L21.2461 7.71842C21.7945 8.86519 21.4043 10.2293 20.3624 10.9223L20.1051 11.0807C19.9706 11.1726 19.8585 11.2926 19.7742 11.4368C19.6218 11.6929 19.58 11.998 19.658 12.2844C19.736 12.5708 19.9272 12.8149 20.2174 12.9793L20.3843 13.0841C20.8887 13.4297 21.253 13.9391 21.4119 14.523C21.5912 15.1817 21.495 15.8833 21.1399 16.4804L20.4803 17.557L20.3808 17.7089C19.6058 18.8008 18.1011 19.1344 16.9527 18.485L16.8166 18.4163C16.6746 18.3541 16.5214 18.3199 16.382 18.316C16.0786 18.3146 15.7872 18.432 15.5727 18.6422C15.3582 18.8524 15.2383 19.1379 15.2391 19.4698L15.231 19.6414C15.12 20.9703 13.9845 22 12.6164 22H11.3811C9.93219 22 8.75765 20.8493 8.75912 19.4753L8.75063 19.3277C8.73337 19.1822 8.68504 19.0418 8.6027 18.9057C8.45336 18.65 8.20591 18.4633 7.91538 18.3871C7.62484 18.3109 7.31529 18.3516 7.01565 18.5213L6.83762 18.6084C6.2746 18.8565 5.63953 18.9023 5.04445 18.7366C4.37306 18.5497 3.80539 18.1083 3.47412 17.5224L2.83679 16.4442L2.75197 16.2844C2.17157 15.0841 2.62651 13.6412 3.78115 12.9875L3.88645 12.9228C4.19491 12.7137 4.37987 12.3688 4.37987 12C4.37987 11.599 4.16149 11.2284 3.77948 11.0115L3.62449 10.9141C2.51001 10.1548 2.16949 8.68049 2.85989 7.50696L3.50918 6.46166C4.23128 5.23376 5.83155 4.81017 7.06235 5.50171L7.19559 5.5713C7.33141 5.63238 7.47895 5.6648 7.62101 5.66628C8.24742 5.66634 8.75775 5.17352 8.76724 4.54181L8.77575 4.3478C8.82704 3.74716 9.09307 3.1827 9.52796 2.75457C10.0186 2.27155 10.6855 2 11.3811 2H12.6161ZM12.6164 3.44774H11.3811C11.0786 3.44774 10.7887 3.56581 10.5753 3.77582C10.3863 3.96196 10.2706 4.20741 10.2503 4.43661L10.2368 4.7415C10.1334 6.07087 8.99969 7.11416 7.61326 7.11398C7.25588 7.11034 6.90355 7.03293 6.54427 6.87026L6.3519 6.77085C5.8038 6.46315 5.1049 6.64815 4.78057 7.19925L4.13128 8.24455C3.83377 8.75044 3.98256 9.39466 4.44324 9.70925L4.70395 9.871C5.42196 10.3467 5.85754 11.1429 5.85754 12C5.85754 12.8446 5.43413 13.634 4.70219 14.1296L4.54639 14.2256C4.03354 14.5163 3.83562 15.144 4.07398 15.6383L4.13027 15.7449L4.75952 16.8084C4.90728 17.0696 5.1552 17.2624 5.44842 17.344C5.70831 17.4164 5.98569 17.3964 6.20208 17.3018L6.3108 17.2497C6.91096 16.9066 7.62614 16.8126 8.29737 16.9886C8.96861 17.1645 9.54028 17.5959 9.87937 18.1768C10.0618 18.478 10.1772 18.8132 10.2219 19.1985L10.2421 19.552C10.3043 20.1145 10.7905 20.5523 11.3811 20.5523H12.6164C13.2137 20.5523 13.7099 20.1023 13.7565 19.5511L13.7621 19.4421C13.7588 18.7585 14.0345 18.1019 14.5279 17.6185C15.0212 17.1351 15.6914 16.865 16.4053 16.8686C16.7556 16.8778 17.1004 16.9547 17.4528 17.11L17.7687 17.2682C18.2647 17.4814 18.8529 17.3258 19.1511 16.9067L19.2236 16.7957L19.868 15.7436C20.0203 15.4875 20.0621 15.1824 19.9841 14.896C19.915 14.6422 19.7566 14.4207 19.5645 14.2882L19.2922 14.1195C18.7716 13.7748 18.3932 13.2563 18.2302 12.6574C18.0509 11.9987 18.1471 11.2971 18.4946 10.7126C18.6849 10.3872 18.9464 10.1073 19.2873 9.87532L19.448 9.77613C19.9601 9.4827 20.1578 8.85504 19.9212 8.35884L19.8505 8.22529L19.8378 8.19726L19.253 7.20208C18.9764 6.73175 18.4008 6.52853 17.9125 6.6891L17.8015 6.73265L17.6983 6.78415C17.1001 7.12941 16.3863 7.22736 15.7143 7.05641C15.0423 6.88546 14.4673 6.45965 14.1181 5.87616C13.9357 5.57504 13.8203 5.23984 13.7756 4.85454L13.7624 4.60249C13.7713 4.29923 13.6546 4.00536 13.4387 3.78783C13.2229 3.57029 12.9264 3.44774 12.6164 3.44774ZM12.0032 8.73182C13.8455 8.73182 15.339 10.195 15.339 12C15.339 13.805 13.8455 15.2682 12.0032 15.2682C10.161 15.2682 8.66748 13.805 8.66748 12C8.66748 10.195 10.161 8.73182 12.0032 8.73182ZM12.0032 10.1796C10.977 10.1796 10.1452 10.9946 10.1452 12C10.1452 13.0054 10.977 13.8204 12.0032 13.8204C13.0294 13.8204 13.8613 13.0054 13.8613 12C13.8613 10.9946 13.0294 10.1796 12.0032 10.1796Z"
                fill={currentNav == "settings" ? "#FFFFFF" : "#EA7C69"}
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
