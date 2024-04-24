import RestaurantCard from "../components/RestaurantCard";
import CentralNavbar from "../components/CentralNavbar";

export default function AllRestaurants() {
  return (
    <div className="bg-[#393c49] w-screen h-screen flex">
      <div>
        <CentralNavbar />
      </div>
      <div className="ml-[10%]">
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
  );
}
