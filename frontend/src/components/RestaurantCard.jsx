export default function RestaurantCard({
  rest_id,
  rest_img,
  rest_name,
  rest_distance,
  rest_rating,
}) {
  return (
    <div className="relative w-3/12 h-1/5 max-w-[40vw] bg-green-100">
      <img className="object-contain rounded-[10%] absolute left-0 top-0" src={rest_img} />
      <div className="text-center bg-[#1F1D2B] rounded-[10%] pt-[70%] pb-[10%] pr-[5%] pl-[5%]">
        <p className="text-white">{rest_name}</p>
        <span>
          <p className="text-red-300">{rest_distance}</p>
        </span>
        <p className="text-[#ABBBC2]">{rest_name}</p>
      </div>
    </div>
  );
}
