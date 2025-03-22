import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SeatSelection from "./SeatSelection";

const TicketBooking = () => {
  const [selectedDate, setSelectedDate] = useState("19");
  const [selectedCity, setSelectedCity] = useState("Hồ Chí Minh");
  const [selectedType, setSelectedType] = useState("2D Phụ Đề Việt");
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketCounts, setTicketCounts] = useState({
    adultSingle: 0,
    studentSenior: 0,
    adultDouble: 0,
  });

  const navigate = useNavigate();

  const dates = [
    { day: "Wed", date: "19" },
    { day: "Thu", date: "20" },
    { day: "Fri", date: "21" },
    { day: "Sat", date: "22" },
    { day: "Sun", date: "23" },
    { day: "Mon", date: "24" },
  ];

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
    const rowLabels = "ABCDEFGHIJKLM".split("").slice(0, rows);
    return rowLabels.map((row) =>
      Array.from(
        { length: cols },
        (_, i) => `${row}${(i + 1).toString().padStart(2, "0")}`
      )
    );
  }

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("bookingData"));
    if (savedData) {
      setSelectedDate(savedData.date);
      setSelectedCity(savedData.city);
      setSelectedType(savedData.type);
      setSelectedShowtime(savedData.showtime);
      setSelectedTheater(savedData.theater);
      setSelectedSeats(savedData.seats || []);
    }
  }, []);

  const handleTicketChange = (id, change) => {
    setTicketCounts((prev) => {
      const newCount = Math.max(0, prev[id] + change);
      return { ...prev, [id]: newCount };
    });
  };

  const handleBooking = () => {
    const totalTickets = Object.values(ticketCounts).reduce((a, b) => a + b, 0);
    if (totalTickets === 0) {
      alert("Vui lòng chọn ít nhất một vé!");
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
    };
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    navigate("/confirmation", { state: bookingData });
  };

  return (
    <div className="p-6 bg-gray-100 max-w-4xl mx-auto rounded-md shadow-lg">
      {/* Chọn loại vé */}
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
      {/* Chọn ngày */}
      <div className="flex overflow-x-auto space-x-2 p-2 bg-white rounded-md mt-4">
        {dates.map((d) => (
          <button
            key={d.date}
            className={`p-2 border rounded-md text-sm ${
              selectedDate === d.date ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedDate(d.date)}
          >
            <div className="text-xs">{d.day}</div>
            <div className="font-bold">{d.date}</div>
          </button>
        ))}
      </div>

      {/* Chọn thành phố */}
      <div className="flex flex-wrap gap-2 mt-4">
        {cities.map((city) => (
          <button
            key={city}
            className={`px-3 py-1 border rounded-md ${
              selectedCity === city ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedCity(city)}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Chọn loại phim */}
      <div className="flex gap-2 mt-4">
        {movieTypes.map((type) => (
          <button
            key={type}
            className={`px-4 py-2 border rounded-md ${
              selectedType === type ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      {selectedShowtime && selectedTheater && (
        <div className="mt-6">
          <h2 className="text-center text-xl font-bold">Chọn ghế</h2>
          <SeatSelection
            selectedTheater={selectedTheater}
            showtimes={showtimes}
            onSeatSelect={setSelectedSeats}
          />
        </div>
      )}

      {/* Xác nhận đặt vé */}
      <button
        className="mt-6 w-full px-4 py-3 bg-green-500 text-white text-lg font-bold rounded-lg hover:bg-green-600 transition-all"
        onClick={handleBooking}
      >
        Xác nhận đặt vé
      </button>
    </div>
  );
};

export default TicketBooking;
