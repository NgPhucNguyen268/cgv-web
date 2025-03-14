function Navbar() {
  return (
    <nav className="bg-[#fdf6dc] p-4 text-red-600 ">
      <div className=" flex justify-between items-center">
        <div className="text-4xl font-bold">CGV</div>
        <div className="flex gap-x-6 font-bold text-black">
          <a href="#" className="hover:underline">
            PHIM
          </a>
          <a href="#" className="hover:underline">
            RẠP CGV
          </a>
          <a href="#" className="hover:underline">
            THÀNH VIÊN
          </a>
          <a href="#" className="hover:underline">
            CULTUREPLEX
          </a>
        </div>
        <button className="bg-red-600 text-white px-4 py-3 rounded">
          MUA VÉ NGAY
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
