export default function CartCompo() {
  return (
    <div>
      <div class="flex items-center bg-black text-white p-5 rounded-xl w-[50rem] mx-auto shadow-sm border-2 border-orange-500 m-4 mr-4">
        <div class="flex-shrink-0 mr-5">
          <img
            src="mainlogo.svg"
            alt="Pasta Dish"
            class="h-40 w-auto rounded"
          />
        </div>
        <div class="flex-grow mr-4">
          <h2 class="text-xl font-bold mb-2">Dragon Chicken</h2>
          <h1 class="mb-2">Qty.2</h1>

          <p class="mb-1 text-orange-500">New Delhi Cafe</p>
        </div>
        <div class="flex-grow">
          <h1 class="text-l font-bold mb-2">20% off</h1>
          <h2 class="text-3xl font-bold mb-2">Rs. 2000</h2>
          <button className="w-[10rem] h-[6vh] text-[#EA7C69] mb-1 rounded-[2rem] border-[0.2rem] border-solid border-[#EA7C69] hover:bg-[#EA7C69] hover:text-[white] hover:transition-[0.3s];">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
