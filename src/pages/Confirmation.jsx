import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(175);

  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Hết thời gian giữ vé! Vui lòng đặt lại.");
      navigate("/");
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  if (!state) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
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

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-yellow-500 text-center">
          ÂM DƯƠNG LỘ (T16)
        </h2>
        <p className="text-center text-sm text-gray-600">
          Phim dành cho khán giả từ đủ 16 tuổi trở lên (16+)
        </p>

        <div className="flex justify-between items-center mt-2 text-sm font-semibold text-gray-800">
          <span>THỜI GIAN GIỮ VÉ:</span>
          <span className="bg-yellow-500 text-black px-2 py-1 rounded-md">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </div>

        <div className="mt-4 text-sm">
          <h3 className="font-bold text-gray-800">
            Cinestar Quốc Thanh (TP.HCM)
          </h3>
          <p className="text-xs text-gray-600">
            271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, TP. Hồ Chí Minh
          </p>
        </div>

        <div className="mt-4 text-sm text-gray-800">
          <p>
            <span className="font-bold">🕒 Thời gian:</span> 18:00 Thứ Tư
            26/03/2025
          </p>
        </div>

        <div className="mt-4 flex justify-between text-sm text-gray-800">
          <p>
            <span className="font-bold">Phòng chiếu:</span> 03
          </p>
          <p>
            <span className="font-bold">Số vé:</span> 1
          </p>
          <p>
            <span className="font-bold">Loại vé:</span> Người Lớn
          </p>
        </div>

        <div className="mt-4 flex justify-between text-sm text-gray-800">
          <p>
            <span className="font-bold">Loại ghế:</span> Ghế Thường
          </p>
          <p>
            <span className="font-bold">Số ghế:</span> A03
          </p>
        </div>

        <div className="mt-4 text-sm text-gray-800">
          <p>
            <span className="font-bold">🍿 Bắp nước:</span> 1 Combo Gấu
          </p>
        </div>

        <div className="mt-6 border-t pt-3 text-lg font-bold flex justify-between text-gray-900">
          <span>SỐ TIỀN CẦN THANH TOÁN</span>
          <span className="text-yellow-500">189,000 VND</span>
        </div>

        <button
          className="mt-6 w-full px-5 py-3 bg-yellow-500 text-black text-lg font-bold rounded-lg shadow-md hover:bg-yellow-600 transition-all"
          onClick={() => navigate("/")}
        >
          ✅ Hoàn tất
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
