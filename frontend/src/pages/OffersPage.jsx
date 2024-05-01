import CentralNavbar from "../components/UserNavbar";
import Offer from "../components/Offers";


export default function OfferPage()
{
    return(
    <div className="bg-[#393c49] w-screen h-screen flex overflow-y-auto">
      <div>
        <CentralNavbar />
      </div>
      <div className="ml-[10%] mt-[2%]">
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-[2rem] text-white">Hi Agam,</h1>
            <p className="text-white mt-3">Friday 26 April, 2024</p>
          </div>
        </div>

        <div className="grid grid-flow-row grid-cols-3">
        <Offer/>
        <Offer/>
        <Offer/>
        <Offer/>
        <Offer/>

        </div>
        {/* YAHA PE CODE LIKHIYO */}
      </div>
    </div>
    );
}