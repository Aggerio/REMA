import CentralNavbar from "../components/UserNavbar";

import CentralNavbar from "../components/CentralNavbar";
import CartCompo from "../components/CartCompo";
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
          <CartCompo />

        </div>
      </div>
    </div>
  );
}
