import RestaurantCard from "../components/RestaurantCard";
import CentralNavbar from "../components/CentralNavbar";

export default function AllRestaurants() {
  return (
    <div className="bg-[#393c49] w-screen h-screen flex overflow-y-auto">
      <div>
        <CentralNavbar />
      </div>
      <div className="ml-[10%] mt-[2%] w-[85%]">
        <div className="flex justify-between">
          <div className="flex-1">
            <h1 className="text-[2rem] text-white">Hi Agam,</h1>
            <p className="text-white mt-3">Friday 26 April, 2024</p>
          </div>
          <div>
            <input
              className="bg-[#252836] rounded-[10%] text-white text-[1rem] text-center h-[4rem]"
              type="text"
              name="search"
              onChange={() => {}}
              value={"🔍 Search for food"}
            />
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-3">
          <div>
            <RestaurantCard
              rest_id="1"
              rest_img="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
              rest_name="Vellore Restaurant 1"
              rest_distance="0.8km"
              rest_rating="4 stars"
            />
          </div>
          <div>
            <RestaurantCard
              rest_id="1"
              rest_img="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
              rest_name="Vellore Restaurant 1"
              rest_distance="0.8km"
              rest_rating="4 stars"
            />
          </div>
          <div>
            <RestaurantCard
              rest_id="1"
              rest_img="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
              rest_name="Vellore Restaurant 1"
              rest_distance="0.8km"
              rest_rating="4 stars"
            />
          </div>
          <div>
            <RestaurantCard
              rest_id="1"
              rest_img="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
              rest_name="Vellore Restaurant 1"
              rest_distance="0.8km"
              rest_rating="4 stars"
            />
          </div>
          <div>
            <RestaurantCard
              rest_id="1"
              rest_img="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
              rest_name="Vellore Restaurant 1"
              rest_distance="0.8km"
              rest_rating="4 stars"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
