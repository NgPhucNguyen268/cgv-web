import { useState, useEffect } from "react";

const SeatSelection = ({ selectedTheater, showtimes, onSeatSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const selectedTheaterData = showtimes.find(
    (t) => t.theater === selectedTheater
  );
  const seats = selectedTheaterData?.seats || [];

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  useEffect(() => {
    onSeatSelect(selectedSeats);
  }, [selectedSeats, onSeatSelect]);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg w-full max-w-4xl mx-auto">
      <h2 className="text-lg font-bold text-center mb-4">Màn hình</h2>

      {seats.length === 0 ? (
        <p className="text-center text-gray-500">Vui lòng chọn rạp</p>
      ) : (
        <div className="flex flex-col items-center">
          {/* Thanh "màn hình" */}
          <div className="w-3/4 h-2 bg-gray-700 rounded mb-4"></div>

          {/* Container có thể scroll ngang trên màn hình nhỏ */}
          <div className="w-full overflow-x-auto">
            <div className="flex flex-col items-center min-w-max">
              {seats.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex justify-center gap-2 my-2 w-full"
                >
                  {row.map((seat) => (
                    <button
                      key={seat}
                      className={`w-10 h-10 sm:w-12 sm:h-12 text-sm font-bold border rounded-md transition-all flex-shrink-0 flex items-center justify-center ${
                        selectedSeats.includes(seat)
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black hover:bg-gray-200"
                      }`}
                      onClick={() => toggleSeat(seat)}
                    >
                      {seat}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Chú thích */}
          <div className="mt-4 text-sm flex gap-4">
            <span className="flex items-center">
              <span className="w-4 h-4 bg-white mr-1 border"></span> Còn trống
            </span>
            <span className="flex items-center">
              <span className="w-4 h-4 bg-blue-500 mr-1"></span> Đang chọn
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatSelection;
