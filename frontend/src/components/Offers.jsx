export default function Offer() {
  return (
    <div>
      <div class="flex items-center bg-black text-white p-5 rounded-xl max-w-3xl mx-auto shadow-sm border-2 border-orange-500 m-4 mr-4">
        <div class="flex-shrink-0 mr-5">
          <img src="mainlogo.svg" alt="Pasta Dish" class="h-40 w-auto rounded" />
        </div>
        <div class="flex-grow">
          <h2 class="text-xl font-bold mb-2"><span className='text-orange-500'>FOOD</span> VOUCHER</h2>
          <h1 class="text-5xl font-bold mb-2">20% off</h1>
          <p class="mb-1 text-orange-500">Valid until 30 October 2023</p>
          <p>CODE - <span className="text-orange-500">NEWDEAL</span></p>
        </div>
      </div>
    </div>
  );
}
