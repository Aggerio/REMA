import CentralNavbar from "../components/UserNavbar";

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
      <div className="h-[120%] w-[40%] bg-[#1f1d2b] text-white p-4">
        <p className="text-2xl">Enter Promocode</p>
        <br></br>
        <input type="text" placeholder="Promocode" className="w-[50%] rounded-lg p-1 bg-black border-2 border-orange-500 focus:ring-2 focus:ring-blue" />
        <br></br>
        <br></br>

        <div>
          <Offer/>
          <Offer/>
          <Offer/>

        </div>
      </div>
    </div>
  );
}
