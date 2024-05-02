import { useNavigate } from "react-router-dom";

export default function MenuCard({
  food_id,
  food_img,
  food_name,
  food_price,
  food_rating,
}) {


  const navigate = useNavigate();
  return (
    <div className="relative min-w-[20vw] min-h-[10vh] max-w-[20%] max-h-[15%] m-3" >
      <img className="object-contain rounded-[10%] absolute left-0 top-0"  src={food_img} />
      <div className="text-center bg-[#1F1D2B] rounded-[10%] pt-[70%] pb-[10%] pr-[5%] pl-[5%]">
        <p className="text-white">{food_name}</p>
        <span>
          <p className="text-red-300">{food_price}</p>
        </span>
        <p className="text-[#ABBBC2]">{food_name}</p>
        <p className="text-[#ABBBC2]">{food_rating} ⭐</p>
      </div>
    </div>
  );
}
