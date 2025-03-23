import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <p className="text-lg font-semibold">Không có thông tin đặt vé!</p>
        <button
          className="mt-4 px-5 py-2.5 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
          onClick={() => navigate("/")}
        >
          Quay về trang chủ
        </button>
      </div>
    );
  }

  // Giá giả định cho mỗi vé (có thể thay đổi)
  const ticketPrice = 90000; // 90.000 VND/vé
  const totalPrice = state.seats.length * ticketPrice;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white text-black rounded-lg shadow-lg p-6 relative">
        {/* Tiêu đề */}
        <div className="flex items-center justify-center border-b pb-3 text-xl font-bold text-red-600">
          <span className="mr-2">🎟️</span> Xác Nhận Đặt Vé
        </div>

        {/* Ngày */}
        <div className="mt-3 flex justify-between text-sm border-b pb-2">
          <span>📅 Ngày:</span>
          <span>{state.date}</span>
        </div>

        {/* Thành phố */}
        <div className="mt-2 flex justify-between text-sm border-b pb-2">
          <span>📍 Thành phố:</span>
          <span>{state.city}</span>
        </div>

        {/* Loại vé */}
        <div className="mt-2 flex justify-between text-sm border-b pb-2">
          <span>🎟️ Loại vé:</span>
          <span>{state.type}</span>
        </div>

        {/* Suất chiếu */}
        <div className="mt-2 flex justify-between text-sm border-b pb-2">
          <span>⏰ Suất chiếu:</span>
          <span>{state.showtime}</span>
        </div>

        {/* Rạp */}
        <div className="mt-2 flex justify-between text-sm border-b pb-2">
          <span>🏢 Rạp:</span>
          <span>{state.theater}</span>
        </div>

        {/* Ghế đã chọn */}
        <div className="mt-2 text-sm border-b pb-2">
          <span className="font-semibold">💺 Ghế đã chọn:</span>
          <div className="mt-1 flex space-x-2">
            {state.seats.map((seat, index) => (
              <span
                key={index}
                className="bg-green-500 text-white px-3 py-1 rounded-lg"
              >
                {seat}
              </span>
            ))}
          </div>
        </div>

        {/* Nút hoàn tất */}
        <button
          className="mt-6 w-full px-5 py-3 bg-green-500 text-white text-lg font-bold rounded-lg shadow-md hover:bg-green-600 transition-all"
          onClick={() => navigate("/")}
        >
          ✅ Hoàn tất
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
