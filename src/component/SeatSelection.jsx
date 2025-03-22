import { useState, useEffect } from "react";

const SeatSelection = ({ selectedTheater, showtimes, onSeatSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Lấy danh sách ghế theo rạp đã chọn
  const selectedTheaterData = showtimes.find(
    (t) => t.theater === selectedTheater
  );
  const seats = selectedTheaterData?.seats || [];

  // Toggle ghế đã chọn
  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  // Gửi danh sách ghế đã chọn lên component cha
  useEffect(() => {
    onSeatSelect(selectedSeats);
  }, [selectedSeats, onSeatSelect]);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg w-full max-w-3xl mx-auto">
      <h2 className="text-lg font-bold text-center mb-4">Màn hình</h2>
      {seats.length === 0 ? (
        <p className="text-center text-gray-500">Vui lòng chọn rạp</p>
      ) : (
        <div className="flex flex-col items-center">
          {seats.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-1 my-1">
              {row.map((seat) => (
                <button
                  key={seat}
                  className={`w-10 h-10 text-sm font-bold border rounded-md transition-all ${
                    selectedSeats.includes(seat)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  onClick={() => toggleSeat(seat)}
                >
                  {seat}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeatSelection;
