import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SeatSelection from "./SeatSelection";
import FoodAndDrinkSelection from "./FoodAndDrinkSelection"; // Import component chọn bắp nước

const TicketBooking = () => {
  const [step, setStep] = useState(1); // 1: Chọn vé và ghế, 2: Chọn bắp nước
  const [selectedDate, setSelectedDate] = useState("19");
  const [selectedCity, setSelectedCity] = useState("Hồ Chí Minh");
  const [selectedType, setSelectedType] = useState("2D Phụ Đề Việt");
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedFoodItems, setSelectedFoodItems] = useState({}); // Lưu bắp nước đã chọn
  const [ticketCounts, setTicketCounts] = useState({
    adultSingle: 0,
    studentSenior: 0,
    adultDouble: 0,
  });

  const navigate = useNavigate();

  const dates = ["19", "20", "21", "22", "23", "24"].map((date, index) => ({
    day: ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon"][index],
    date,
  }));
  const cities = ["Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Cần Thơ", "Đồng Nai"];
  const movieTypes = ["2D Phụ Đề Việt", "2D Lồng Tiếng Việt"];
  const ticketOptions = [
    { id: "adultSingle", label: "NGƯỜI LỚN", type: "ĐƠN", price: 70000 },
    {
      id: "studentSenior",
      label: "HSSV - NGƯỜI CAO TUỔI",
      type: "ĐƠN",
      price: 45000,
    },
    { id: "adultDouble", label: "NGƯỜI LỚN", type: "ĐÔI", price: 145000 },
  ];

  const showtimes = [
    {
      theater: "CGV Crescent Mall",
      times: ["13:50", "16:10", "18:30", "19:30", "22:15", "23:10"],
      seats: generateSeats(10, 15),
    },
    {
      theater: "CGV Pandora City",
      times: ["18:40", "20:30", "22:00"],
      seats: generateSeats(8, 12),
    },
  ];

  function generateSeats(rows, cols) {
    return Array.from({ length: rows }, (_, row) =>
      Array.from(
        { length: cols },
        (_, col) =>
          String.fromCharCode(65 + row) + (col + 1).toString().padStart(2, "0")
      )
    );
  }

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("bookingData"));
    if (savedData) {
      setSelectedDate(savedData.date || "19");
      setSelectedCity(savedData.city || "Hồ Chí Minh");
      setSelectedType(savedData.type || "2D Phụ Đề Việt");
      setSelectedShowtime(savedData.showtime || null);
      setSelectedTheater(savedData.theater || null);
      setSelectedSeats(savedData.seats || []);
      setSelectedFoodItems(savedData.foodItems || {});
    }
  }, []);

  const handleTicketChange = (id, change) => {
    setTicketCounts((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] + change),
    }));
  };

  const handleFoodSelect = (items) => {
    setSelectedFoodItems(items);
  };

  const handleNextStep = () => {
    const totalTickets = Object.values(ticketCounts).reduce((a, b) => a + b, 0);
    if (totalTickets === 0) {
      alert("Vui lòng chọn ít nhất một vé!");
      return;
    }
    if (selectedSeats.length === 0) {
      alert("Vui lòng chọn ít nhất một ghế!");
      return;
    }
    setStep(2); // Chuyển sang bước chọn bắp nước
  };

  const handleBooking = () => {
    const totalTickets = Object.values(ticketCounts).reduce((a, b) => a + b, 0);
    if (totalTickets === 0) {
      alert("Vui lòng chọn ít nhất một vé!");
      return;
    }
    if (selectedSeats.length === 0) {
      alert("Vui lòng chọn ít nhất một ghế!");
      return;
    }

    const bookingData = {
      date: selectedDate,
      city: selectedCity,
      type: selectedType,
      showtime: selectedShowtime,
      theater: selectedTheater,
      seats: selectedSeats,
      tickets: ticketCounts,
      foodItems: selectedFoodItems, // Lưu thông tin bắp nước
    };
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    navigate("/confirmation", { state: bookingData });
  };

  return (
    <div className="p-6 bg-gray-100 max-w-4xl mx-auto rounded-md shadow-lg">
      {/* Thanh tiến trình */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-full ${
            step === 1 ? "bg-blue-500 text-white" : "bg-gray-600 text-gray-300"
          }`}
        >
          1. Chọn vé & ghế
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            step === 2 ? "bg-blue-500 text-white" : "bg-gray-600 text-gray-300"
          }`}
        >
          2. Chọn bắp & nước
        </button>
      </div>

      {step === 1 && (
        <>
          <h2 className="text-center text-2xl font-bold my-4">CHỌN LOẠI VÉ</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {ticketOptions.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white p-4 rounded-lg text-center w-64 shadow-lg border"
              >
                <h3 className="text-lg font-semibold">{ticket.label}</h3>
                <p className="text-yellow-500 font-bold">{ticket.type}</p>
                <p className="text-xl font-bold">
                  {ticket.price.toLocaleString()} VNĐ
                </p>
                <div className="flex items-center justify-center mt-2 bg-gray-200 rounded-md p-1">
                  <button
                    className="px-3 py-1 text-lg font-bold text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400"
                    onClick={() => handleTicketChange(ticket.id, -1)}
                  >
                    -
                  </button>
                  <span className="mx-4 text-lg font-semibold">
                    {ticketCounts[ticket.id]}
                  </span>
                  <button
                    className="px-3 py-1 text-lg font-bold text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400"
                    onClick={() => handleTicketChange(ticket.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex overflow-x-auto space-x-2 p-2 bg-white rounded-md mt-4">
            {dates.map((d) => (
              <button
                key={d.date}
                className={`p-2 border rounded-md text-sm ${
                  selectedDate === d.date
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedDate(d.date)}
              >
                <div className="text-xs">{d.day}</div>
                <div className="font-bold">{d.date}</div>
              </button>
            ))}
          </div>

          <div className="mt-6 bg-white p-4 rounded-md">
            {showtimes.map((theater) => (
              <div key={theater.theater} className="mb-4">
                <h3 className="text-lg font-semibold">{theater.theater}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {theater.times.map((time) => (
                    <button
                      key={time}
                      className={`px-3 py-1 border rounded-md ${
                        selectedShowtime === time &&
                        selectedTheater === theater.theater
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => {
                        setSelectedShowtime(time);
                        setSelectedTheater(theater.theater);
                      }}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {selectedShowtime && selectedTheater && (
            <SeatSelection
              selectedTheater={selectedTheater}
              showtimes={showtimes}
              onSeatSelect={setSelectedSeats}
            />
          )}

          <button
            className="mt-6 w-full px-4 py-3 bg-green-500 text-white text-lg font-bold rounded-lg hover:bg-green-600 transition-all"
            onClick={handleNextStep}
          >
            Tiếp tục
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <FoodAndDrinkSelection onFoodSelect={handleFoodSelect} />
          <div className="flex justify-between mt-6">
            <button
              className="px-4 py-3 bg-gray-500 text-white text-lg font-bold rounded-lg hover:bg-gray-600 transition-all"
              onClick={() => setStep(1)} // Quay lại bước chọn ghế
            >
              Quay lại
            </button>
            <button
              className="px-4 py-3 bg-green-500 text-white text-lg font-bold rounded-lg hover:bg-green-600 transition-all"
              onClick={handleBooking}
            >
              Xác nhận đặt vé
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TicketBooking;
