import { useState } from "react";
import RestaurantNavbar from "../components/RestaurantNavbar";
import MenuCard from "../components/MenuCard";

export default function MenuManagement() {
  const [menuCards, setMenuCards] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newMenuData, setNewMenuData] = useState({
    imgLink: "",
    name: "",
    price: "",
  });

  // Function to add a new restaurant card
  const addMenuCard = () => {
    setMenuCards([...menuCards, newMenuData]);
    setNewMenuData({ imgLink: "", name: "", price: "" });
    closeAddModal();
  };

  // Function to delete a restaurant card
  const deleteMenuCard = (index) => {
    const updatedCards = [...menuCards];
    updatedCards.splice(index, 1);
    setMenuCards(updatedCards);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMenuData({ ...newMenuData, [name]: value });
  };

  return (
    <div className="bg-[#393c49] w-screen h-screen flex overflow-y-auto">
      <div>
        <RestaurantNavbar />
      </div>
      <div className="ml-[10%] mt-[2%]">
        <h1 className="text-2xl text-white">Menu Management</h1>
        <div className=" mr-[5%] grid grid-cols-4 gap-4">
          {menuCards.map((menuCard, index) => (
            <div className="ml-9">
              <MenuCard
                key={index}
                food_id={index}
                food_img={menuCard["img_link"]}
                food_name = {menuCard['name']}
                food_distance={'Rs' + menuCard['price']}
                food_rating={'4 stars'}
              />
            </div>
          ))}
        </div>
        <div className="mb-10">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              openAddModal();
            }}
          >
            Add Restaurant Card
          </button>
          {menuCards.length > 0 && (
            <button
              className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => deleteMenuCard(menuCards.length - 1)}
            >
              Delete Restaurant Card
            </button>
          )}
        </div>
      </div>
      {/* Add Restaurant Modal */}
      {isAddModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Add New Restaurant</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Image Link:
              </label>
              <input
                type="text"
                name="imgLink"
                value={newMenuData.imgLink}
                onChange={handleInputChange}
                className="border border-gray-400 rounded w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={newMenuData.name}
                onChange={handleInputChange}
                className="border border-gray-400 rounded w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Price:
              </label>
              <input
                type="text"
                name="price"
                value={newMenuData.price}
                onChange={handleInputChange}
                className="border border-gray-400 rounded w-full py-2 px-3"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={addMenuCard}
              >
                Add
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
                onClick={closeAddModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
