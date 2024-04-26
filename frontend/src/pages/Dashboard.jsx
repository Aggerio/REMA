import CentralNavbar from "../components/CentralNavbar";
export default function Dashboard() {
  return (
    <div className="bg-[#252836] w-screen h-screen flex fixed">
      <div>
        <CentralNavbar />
      </div>

      <div className="ml-[10%] mt-[2%] mb-[1%]">
        <div className="mb-[10px]">
          <h1 className="text-[3rem] text-white">Dashboard</h1>
          <p className="text-[1rem] text-white ">Tuesday 2 Feb, 2021</p>
        </div>
        <hr />

        <div className="flex mt-8 ">
          <div className="rounded-[10%] bg-[#1F1D2B] w-[20vw] h-[25vh]  backdrop-opacity-95">
            <div className="mt-6 ml-9">
              <div className=" flex">
                <div className="text-center w-[30px] h-[30px] rounded-[10%]  ">
                  <p className="text-purple-400 text-[2rem] ">$</p>
                </div>
                <p className="text-[2rem] ml-[20%] text-green-500">
                  +32.40% &nbsp;{" "}
                </p>
                <span className=" text-[2rem] rounded-[25%]  text-center ml-[15%] text-green-300 w-[50px] h-[50px] bg-[#252836] backdrop-opacity-95">
                  ⇈
                </span>
              </div>
              <p className="text-white text-[4rem]"> 10,000$</p>
              <p className="text-[#ffffffca] text-[2rem] text-">
                Total Revenue
              </p>
            </div>
          </div>
          <div className="rounded-[10%] ml-3 bg-[#1F1D2B] w-[20vw] h-[25vh]  backdrop-opacity-95">
            <div className="mt-6 ml-9">
              <div className=" flex">
                <div className="text-center w-[30px] h-[30px] rounded-[10%]  ">
                  <p className="text-purple-400 text-[2rem] ">$</p>
                </div>
                <p className="text-[2rem] ml-[20%] text-green-500">
                  +32.40% &nbsp;{" "}
                </p>
                <span className=" text-[2rem] rounded-[25%]  text-center ml-[15%] text-green-300 w-[50px] h-[50px] bg-[#252836] backdrop-opacity-95">
                  ⇈
                </span>
              </div>
              <p className="text-white text-[4rem]"> 10,000$</p>
              <p className="text-[#ffffffca] text-[2rem] text-">
                Total Revenue
              </p>
            </div>
          </div>
          <div className="rounded-[10%]  ml-3 bg-[#1F1D2B] w-[20vw] h-[25vh]  backdrop-opacity-95">
            <div className="mt-6 ml-9">
              <div className=" flex">
                <div className="text-center w-[30px] h-[30px] rounded-[10%]  ">
                  <p className="text-purple-400 text-[2rem] ">$</p>
                </div>
                <p className="text-[2rem] ml-[20%] text-green-500">
                  +32.40% &nbsp;{" "}
                </p>
                <span className=" text-[2rem] rounded-[25%]  text-center ml-[15%] text-green-300 w-[50px] h-[50px] bg-[#252836] backdrop-opacity-95">
                  ⇈
                </span>
              </div>
              <p className="text-white text-[4rem]"> 10,000$</p>
              <p className="text-[#ffffffca] text-[2rem] text-">
                Total Revenue
              </p>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[50%] mt-[2%] bg-[#1F1D2B] rounded-[2%]">
          <div className="pl-[2%] pt-[2%]">
            <div className="flex items-center justify-stretch">
              <div>
                <p className="text-[2rem] text-white"> Order Report</p>
              </div>
              <button className="text-xl ml-[65%] text-white p-3 rounded-lg border-4 border-[#ffffff40] bg-[#252836]">
                Filter Order
              </button>
            </div>
            <div class="text-white p-4 rounded-lg shadow-md">
              <div class="overflow-x-auto">
                <table class="w-full text-center">
                  <thead>
                    <tr className="border-b-2 text-lg">
                      <th class=" py-2">Customer</th>
                      <th class=" py-2">Menu</th>
                      <th class=" py-2">Total Payment</th>
                      <th class=" py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class=" border-gray-600 font-light text-[30px]">
                      <td class="px-4 py-2 flex items-center">
                        <img
                          src="assets/user_icon.png"
                          alt="Avatar"
                          class="w-[10%] h-[10%] rounded-full mr-2"
                        />
                        Eren Jaegar
                      </td>
                      <td class="px-4 py-2">Spicy seasoned seafood noodles</td>
                      <td class="px-4 py-2">$125</td>
                      <td class="px-4 py-2">
                        <span class="border-green-300 border-2 text-green-500 px-2 py-1 rounded">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr class=" border-gray-600 font-light text-[30px]">
                      <td class="px-4 py-2 flex items-center">
                        <img
                          src="assets/user_icon.png"
                          alt="Avatar"
                          class="w-[10%] h-[10%] rounded-full mr-2"
                        />
                        Eren Jaegar
                      </td>
                      <td class="px-4 py-2">Spicy seasoned seafood noodles</td>
                      <td class="px-4 py-2">$125</td>
                      <td class="px-4 py-2">
                        <span class="border-green-300 border-2 text-green-500 px-2 py-1 rounded">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr class=" border-gray-600 font-light text-[30px]">
                      <td class="px-4 py-2 flex items-center">
                        <img
                          src="assets/user_icon.png"
                          alt="Avatar"
                          class="w-[10%] h-[10%] rounded-full mr-2"
                        />
                        Eren Jaegar
                      </td>
                      <td class="px-4 py-2">Spicy seasoned seafood noodles</td>
                      <td class="px-4 py-2">$125</td>
                      <td class="px-4 py-2">
                        <span class="border-green-300 border-2 text-green-500 px-2 py-1 rounded">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr class=" border-gray-600 font-light text-[30px]">
                      <td class="px-4 py-2 flex items-center">
                        <img
                          src="assets/user_icon.png"
                          alt="Avatar"
                          class="w-[10%] h-[10%] rounded-full mr-2"
                        />
                        Eren Jaegar
                      </td>
                      <td class="px-4 py-2">Spicy seasoned seafood noodles</td>
                      <td class="px-4 py-2">$125</td>
                      <td class="px-4 py-2">
                        <span class="border-green-300 border-2 text-green-500 px-2 py-1 rounded">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr class=" border-gray-600 font-light text-[30px]">
                      <td class="px-4 py-2 flex items-center">
                        <img
                          src="assets/user_icon.png"
                          alt="Avatar"
                          class="w-[10%] h-[10%] rounded-full mr-2"
                        />
                        Eren Jaegar
                      </td>
                      <td class="px-4 py-2">Spicy seasoned seafood noodles</td>
                      <td class="px-4 py-2">$125</td>
                      <td class="px-4 py-2">
                        <span class="border-green-300 border-2 text-green-500 px-2 py-1 rounded">
                          Completed
                        </span>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-[5%] mt-[3%]">
        <div class="bg-[#1F1D2B] text-white w-[100%] h-[50%] rounded-lg p-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-[1rem] font-bold">Most Ordered</h2>
            <div class="relative">
              <select class="appearance-none bg-gray-700 text-white px-4 py-2 rounded">
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg
                  class="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-6-6h12z" />
                </svg>
              </div>
            </div>
          </div>
          <div class="space-y-8 mt-[10%]">
            <div class="mt-4 flex items-center">
              <img
                src="https://khinskitchen.com/wp-content/uploads/2022/02/seafood-udon-04.jpg"
                alt="Spicy seafood noodles"
                class="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 class="text-base font-semibold">
                  Spicy seasoned seafood noodles
                </h3>
                <p class="text-sm text-gray-400">238 orders ordered</p>
              </div>
            </div>
            <div class="flex items-center">
              <img
                src="https://khinskitchen.com/wp-content/uploads/2022/02/seafood-udon-04.jpg"
                alt="Salted pasta with mushroom sauce"
                class="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 class="text-base font-semibold">
                  Salted pasta with mushroom sauce
                </h3>
                <p class="text-sm text-gray-400">220 orders ordered</p>
              </div>
            </div>
            <div class="flex items-center">
              <img
                src="https://khinskitchen.com/wp-content/uploads/2022/02/seafood-udon-04.jpg"
                alt="Beef dumpling in hot and sour soup"
                class="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 class="text-base font-semibold">
                  Beef dumpling in hot and sour soup
                </h3>
                <p class="text-sm text-gray-400">180 orders ordered</p>
              </div>
            </div>
          </div>
          <button class="border-[#EA7C69] w-[100%] h-[10%] border-2 text-[#EA7C69] py-2 px-4 rounded mt-[15%] ">
            View All
          </button>
        </div>
        <div class="bg-[#1F1D2B] text-white p-4 rounded-lg mt-8">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-bold">Most Type of Order</h2>
            <div class="relative">
              <select class="appearance-none bg-gray-700 text-white px-4 py-2 rounded">
                <option value="today" selected>
                  Today
                </option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  class="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-6-6h12z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img
              src='assets/flowchart.png'
               className="rounded-full bg-gray-700 h-52 w-52 flex items-center justify-center"
               />

              <div className="mt-4 text-center">
                <div className="flex justify-center items-center mb-2">
                  <div className="h-3 w-3 rounded-full bg-pink-500 mr-2"></div>
                  <span>Dine In</span>
                  <span className="ml-2 text-gray-400">200 customers</span>
                </div>
                <div className="flex justify-center items-center mb-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span>To Go</span>
                  <span className="ml-2 text-gray-400">122 customers</span>
                </div>
                <div className="flex justify-center items-center">
                  <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                  <span>Delivery</span>
                  <span className="ml-2 text-gray-400">264 customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
