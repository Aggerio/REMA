import ResturantNavbar from "../components/RestaurantNavbar";
import { useDispatch } from "react-redux";
import { change_user_role } from "../reducers/user";
import { useNavigate } from "react-router-dom";

export default function RestaurantProfilePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function signOut(){
        dispatch(change_user_role(""));
        navigate('/home');
    }

  return (
    <div className="bg-[#393c49] w-screen h-screen flex overflow-y-auto">
      <div>
        {/* <ResturantNavbar/> */}
      </div>
      <div className="ml-[10%] mt-[2%] flex flex-col items-center justify-center w-full">
        <div className="bg-[#1F1D2B] rounded-lg shadow-lg p-8 max-w-md text-white">
          <div className="flex flex-col items-center justify-center mb-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-full h-32 w-32 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-100">john.doe@example.com</p>
          </div>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-200 font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value="John Doe"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-200 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value="john.doe@example.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              readOnly
            />
          </div>
          <div className="mb-6">
            <label htmlFor="bio" className="block text-gray-200 font-bold mb-2">
              Bio
            </label>
            <textarea
              id="bio"
              rows="3"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue="This is my bio. I like to keep things simple and elegant."
              readOnly
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Edit Profile
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={signOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

