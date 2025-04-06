import { useState } from "react";

const FoodAndDrinkSelection = ({ onFoodSelect }) => {
  const [items, setItems] = useState({
    comboGau: 0,
    comboCoGau: 0,
    comboNhaGau: 0,
    sprite: 0,
    cokeZero: 0,
    coke: 0,
    fanta: 0,
  });

  const foodItems = [
    {
      name: "comboGau",
      label: "COMBO GẤU",
      description: "1 Coke 32oz + 1 Bắp 2 Ngôn 64oz Phô Mai + Caramel",
      price: 119000,
      image:
        "https://iguov8nhvyobj.vcdn.cloud/media/concession/web/6644731d5a8f5_1715761949.png", // Thay bằng đường dẫn ảnh thực tế
    },
    {
      name: "comboCoGau",
      label: "COMBO CỖ GẤU",
      description: "2 Coke 32oz + 1 Bắp 2 Ngôn 64oz Phô Mai + Caramel",
      price: 129000,
      image:
        "https://iguov8nhvyobj.vcdn.cloud/media/concession/web/6465deb2716d7_1684397746.png",
    },
    {
      name: "comboNhaGau",
      label: "COMBO NHÀ GẤU",
      description: "4 Coke 22oz + 2 Bắp 2 Ngôn 64oz Phô Mai + Caramel",
      price: 259000,
      image:
        "https://iguov8nhvyobj.vcdn.cloud/media/concession/web/6791c5bca2b05_1737606589.png",
    },
    {
      name: "sprite",
      label: "SPRITE 32OZ",
      price: 37000,
      image:
        "https://iguov8nhvyobj.vcdn.cloud/media/concession/web/6644731d5a8f5_1715761949.png",
    },
    {
      name: "cokeZero",
      label: "COKE ZERO 32OZ",
      price: 37000,
      image:
        "https://iguov8nhvyobj.vcdn.cloud/media/concession/web/6465deb2716d7_1684397746.png",
    },
    {
      name: "coke",
      label: "COKE 32OZ",
      price: 37000,
      image:
        "https://iguov8nhvyobj.vcdn.cloud/media/concession/web/6791c5bca2b05_1737606589.png",
    },
    {
      name: "fanta",
      label: "FANTA 32OZ",
      price: 37000,
      image:
        "https://iguov8nhvyobj.vcdn.cloud/media/concession/web/6791c5bca2b05_1737606589.png",
    },
  ];

  // Xử lý tăng/giảm số lượng
  const handleQuantityChange = (name, change) => {
    setItems((prev) => {
      const newQuantity = Math.max(0, prev[name] + change); // Không cho phép số lượng âm
      const updatedItems = { ...prev, [name]: newQuantity };
      onFoodSelect(updatedItems); // Gửi dữ liệu lên component cha
      return updatedItems;
    });
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg w-full max-w-4xl mx-auto">
      <h2 className="text-lg font-bold text-center mb-4">CHỌN BẮP & NƯỚC</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {foodItems.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center p-2 border border-gray-700 rounded-md"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-32 h-32 object-contain mb-2"
            />
            <h3 className="text-sm font-bold">{item.label}</h3>
            <p className="text-xs text-gray-400 text-center">
              {item.description || ""}
            </p>
            <p className="text-sm font-semibold mt-1">
              {item.price.toLocaleString("vi-VN")} VNĐ
            </p>
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => handleQuantityChange(item.name, -1)}
                className="w-8 h-8 bg-gray-700 rounded-full text-lg"
              >
                -
              </button>
              <span className="text-lg">{items[item.name]}</span>
              <button
                onClick={() => handleQuantityChange(item.name, 1)}
                className="w-8 h-8 bg-gray-700 rounded-full text-lg"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodAndDrinkSelection;
