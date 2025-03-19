import React, { useState } from "react";

const CreateTickets = ({ onAddTicket }) => {
  const [newTicket, setNewTicket] = useState({
    movie: "",
    user: "",
    seat: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newTicket.movie ||
      !newTicket.user ||
      !newTicket.seat ||
      !newTicket.price
    ) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Gửi dữ liệu lên ManageTickets để thêm vé mới
    onAddTicket(newTicket);

    // Reset form
    setNewTicket({ movie: "", user: "", seat: "", price: "" });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Tạo vé mới</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Tên phim"
          value={newTicket.movie}
          onChange={(e) =>
            setNewTicket({ ...newTicket, movie: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Tên người đặt"
          value={newTicket.user}
          onChange={(e) => setNewTicket({ ...newTicket, user: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Ghế ngồi"
          value={newTicket.seat}
          onChange={(e) => setNewTicket({ ...newTicket, seat: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Giá vé"
          value={newTicket.price}
          onChange={(e) =>
            setNewTicket({ ...newTicket, price: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Thêm vé
        </button>
      </form>
    </div>
  );
};

export default CreateTickets;
