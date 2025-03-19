import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TicketBooking = () => {
  const [selectedDate, setSelectedDate] = useState("19");
  const [selectedCity, setSelectedCity] = useState("Hồ Chí Minh");
  const [selectedType, setSelectedType] = useState("2D Phụ Đề Việt");
  const [selectedShowtime, setSelectedShowtime] = useState(null);
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

  const showtimes = [
    {
      theater: "CGV Crescent Mall",
      times: ["13:50", "16:10", "18:30", "19:30", "22:15", "23:10"],
    },
    {
      theater: "CGV Pandora City",
      times: ["18:40", "20:30", "22:00"],
    },
  ];

  // Lưu trạng thái đặt vé vào localStorage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("bookingData"));
    if (savedData) {
      setSelectedDate(savedData.date);
      setSelectedCity(savedData.city);
      setSelectedType(savedData.type);
      setSelectedShowtime(savedData.showtime);
    }
  }, []);

  const handleBooking = () => {
    const bookingData = {
      date: selectedDate,
      city: selectedCity,
      type: selectedType,
      showtime: selectedShowtime,
    };

    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    navigate("/confirmation", { state: bookingData });
  };

  return (
    <div className="p-6 bg-gray-100 max-w-4xl mx-auto rounded-md shadow-lg">
      {/* Chọn ngày */}
      <div className="flex overflow-x-auto space-x-2 p-2 bg-white rounded-md">
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

      {/* Chọn loại vé */}
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

      {/* Danh sách rạp và suất chiếu */}
      <div className="mt-6 bg-white p-4 rounded-md">
        {showtimes.map((theater) => (
          <div key={theater.theater} className="mb-4">
            <h3 className="text-lg font-semibold">{theater.theater}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {theater.times.map((time) => (
                <button
                  key={time}
                  className={`px-3 py-1 border rounded-md transition-transform transform hover:scale-110 ${
                    selectedShowtime === time
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedShowtime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Nút xác nhận đặt vé */}
      {selectedShowtime && (
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 w-full"
          onClick={handleBooking}
        >
          Xác nhận đặt vé
        </button>
      )}
    </div>
  );
};

export default TicketBooking;
