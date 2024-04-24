import { useNavigate } from "react-router-dom";

export default function RestaurantCard({
  rest_id,
  rest_img,
  rest_name,
  rest_distance,
  rest_rating,
}) {


  const navigate = useNavigate();
  return (
    <div className="relative min-w-[20vw] min-h-[10vh] max-w-[20%] max-h-[15%] " onClick={() => {navigate(`/restaurant/${rest_id}`)}}>
      <img className="object-contain rounded-[10%] absolute left-0 top-0"  src={rest_img} />
      <div className="text-center bg-[#1F1D2B] rounded-[10%] pt-[70%] pb-[10%] pr-[5%] pl-[5%]">
        <p className="text-white">{rest_name}</p>
        <span>
          <p className="text-red-300">{rest_distance}</p>
        </span>
        <p className="text-[#ABBBC2]">{rest_name}</p>
        <p className="text-[#ABBBC2]">{rest_rating} ⭐</p>
      </div>
    </div>
  );
}
