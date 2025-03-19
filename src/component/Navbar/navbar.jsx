import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="p-4 bg-black flex items-center justify-between relative">
      {/* Logo + Menu */}
      <div className="flex items-center space-x-4">
        <div
          className="text-[40px] uppercase font-bold text-red-700 cursor-pointer"
          onClick={() => navigate("/")}
        >
          CGV
        </div>

        <nav className="flex items-center space-x-4">
          {/* PHIM - Dropdown (Bọc toàn bộ phần tử) */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            {/* Nhãn menu */}
            <span className="text-white hover:text-gray-400 cursor-pointer">
              PHIM
            </span>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg z-10">
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => {
                    navigate("/phim-dang-chieu");
                    setIsDropdownOpen(false);
                  }}
                >
                  Phim Đang Chiếu
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => {
                    navigate("/phim-sap-chieu");
                    setIsDropdownOpen(false);
                  }}
                >
                  Phim Sắp Chiếu
                </li>
              </ul>
            )}
          </div>

          <a href="#" className="text-white hover:text-gray-400">
            RẠP CGV
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            THÀNH VIÊN
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            CULTUREPLEX
          </a>
        </nav>
      </div>

      {/* Nút đăng nhập, đăng ký, mua vé */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Đăng Nhập
        </button>
        <button
          onClick={() => navigate("/register")}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Đăng Ký
        </button>
        <button
          onClick={() => alert("Chức năng Mua Vé chưa có!")}
          className="bg-red-600 text-white px-4 py-3 rounded hover:bg-red-700 transition font-semibold"
        >
          MUA VÉ NGAY
        </button>
      </div>
    </div>
  );
}

export default Navbar;
