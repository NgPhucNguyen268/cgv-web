import React, { useState } from "react";

const ManageTickets = () => {
  const [tickets] = useState([
    {
      id: 1,
      movie: "Avengers: Endgame",
      user: "Nguyễn Văn A",
      seat: "A10",
      price: "100,000 VND",
    },
    {
      id: 2,
      movie: "Spider-Man: No Way Home",
      user: "Trần Thị B",
      seat: "B5",
      price: "120,000 VND",
    },
  ]);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Danh sách vé</h2>

      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Phim</th>
            <th className="border p-2">Người đặt</th>
            <th className="border p-2">Ghế</th>
            <th className="border p-2">Giá vé</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <tr key={ticket.id} className="text-center">
                <td className="border p-2">{ticket.id}</td>
                <td className="border p-2">{ticket.movie}</td>
                <td className="border p-2">{ticket.user}</td>
                <td className="border p-2">{ticket.seat}</td>
                <td className="border p-2">{ticket.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border p-4 text-center text-gray-500">
                Không có vé nào!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTickets;
