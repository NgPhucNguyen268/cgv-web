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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-4">
      <div className="max-w-lg w-full bg-white text-gray-800 rounded-lg shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          🎟 Xác Nhận Đặt Vé
        </h1>

        <div className="mt-4 space-y-3">
          <p className="flex justify-between border-b pb-2">
            <span className="font-semibold">📅 Ngày:</span> {state.date}
          </p>
          <p className="flex justify-between border-b pb-2">
            <span className="font-semibold">📍 Thành phố:</span> {state.city}
          </p>
          <p className="flex justify-between border-b pb-2">
            <span className="font-semibold">🎬 Loại vé:</span> {state.type}
          </p>
          <p className="flex justify-between border-b pb-2">
            <span className="font-semibold">⏰ Suất chiếu:</span>{" "}
            {state.showtime}
          </p>
          <p className="flex justify-between border-b pb-2">
            <span className="font-semibold">🏢 Rạp:</span> {state.theater}
          </p>
          <div>
            <span className="font-semibold">💺 Ghế đã chọn:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {state.seats.length > 0 ? (
                state.seats.map((seat, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-md shadow-sm"
                  >
                    {seat}
                  </span>
                ))
              ) : (
                <span className="text-gray-500">Chưa chọn ghế</span>
              )}
            </div>
          </div>
        </div>

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
