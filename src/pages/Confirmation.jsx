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
    <div className="flex items-center justify-center min-h-screen bg-[#FDF7E5]">
      <div className="w-full max-w-md bg-white text-black rounded-lg shadow-lg p-6 relative">
        {/* Tên phim */}
        <div className="flex justify-between items-center border-b pb-3">
          <h1 className="text-lg font-bold uppercase">
            {state.movieName || "Tên phim không xác định"}
          </h1>
          <span className="bg-yellow-400 text-black px-2 py-1 text-sm font-semibold rounded">
            {new Date().toLocaleTimeString()}
          </span>
        </div>

        {/* Thông tin rạp */}
        <div className="mt-3 text-sm">
          <p className="font-semibold">{state.theater}</p>
        </div>

        {/* Thời gian */}
        <div className="mt-3">
          <p className="text-yellow-300 font-semibold">Thời gian</p>
          <p className="text-lg">{state.showtime}</p>
        </div>

        {/* Thông tin vé */}
        <div className="mt-3 text-sm">
          <div className="flex justify-between border-b pb-2">
            <span>Số vé</span> <span>{state.seats.length}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Loại vé</span> <span>{state.type}</span>
          </div>
        </div>

        {/* Ghế đã chọn */}
        <div className="mt-3 text-sm">
          <p className="text-yellow-300 font-semibold">Ghế đã chọn</p>
          <p>{state.seats.join(", ")}</p>
        </div>

        {/* Tổng tiền */}
        <div className="mt-4 border-t pt-3 flex justify-between text-lg font-bold">
          <span>SỐ TIỀN CẦN THANH TOÁN</span>
          <span>{totalPrice.toLocaleString()} VND</span>
        </div>

        {/* Nút hoàn tất */}
        <button
          className="mt-6 w-full px-5 py-3 bg-yellow-400 text-black text-lg font-bold rounded-lg shadow-md hover:bg-yellow-500 transition-all"
          onClick={() => navigate("/")}
        >
          ✅ Hoàn tất
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
