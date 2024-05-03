import CentralNavbar from "../components/UserNavbar";
import styles from "./RestoPage.module.css";

import CartCompo from "../components/CartCompo";
import Offer from "../components/Offers";
export default function CartPage() {
  return (
    <div className="bg-[#393c49] w-screen h-screen flex overflow-y-auto">
      <div>
        <CentralNavbar />
      </div>
      <div className="ml-[10%] mt-3">
        <div>
          <div className="text-white">
            <p className="text-4xl mb-2">Hey kG!</p>
            <p>Review Your Cart</p>
          </div>
        </div>
        <div>
          <CartCompo />
          <CartCompo />
          <CartCompo />

        </div>
      </div>
      <div className="h-[79%] w-[30%] ml-10 mt-[6%] bg-[#1f1d2b] text-white p-4 pb-0 rounded-lg overflow-auto relative">
        <p className="text-2xl">Enter Promocode</p>
        <br></br>
        <input type="text" placeholder="Promocode" className="w-[50%] rounded-lg p-1 bg-black border-2 border-orange-500 focus:ring-2 focus:ring-blue" />
        <br></br>
        <br></br>

        <div className="overflow-auto">
          <Offer/>
          <Offer/>
          <Offer/>
        </div>
        <div className="text-[#1f1d2b] bg-[#1f1d2b] sticky bottom-0">
          vsvn
        </div>
        <div className={styles.tocart}>
            <button className={styles.tocart_btn}>Continue to Payment</button>
          </div>
      </div>
      
    </div>
  );
}
