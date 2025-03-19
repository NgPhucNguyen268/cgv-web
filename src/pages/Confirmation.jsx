import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-semibold">Không có thông tin đặt vé!</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => navigate("/")}
        >
          Quay về trang chủ
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-md shadow-lg text-center">
      <h1 className="text-2xl font-bold">Xác nhận đặt vé</h1>
      <p className="mt-4">
        <strong>Ngày:</strong> {state.date}
      </p>
      <p>
        <strong>Thành phố:</strong> {state.city}
      </p>
      <p>
        <strong>Loại vé:</strong> {state.type}
      </p>
      <p>
        <strong>Suất chiếu:</strong> {state.showtime}
      </p>

      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        onClick={() => navigate("/")}
      >
        Hoàn tất
      </button>
    </div>
  );
};

export default Confirmation;
