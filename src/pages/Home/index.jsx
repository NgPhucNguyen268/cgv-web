import Banner from "../../component/Slides/Banner";
import useFetch from "../../Utilities/Fetch";
import MoviePoster from "../../component/MoviePoster";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar/Navbar";
function Home() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || "Something went wrong!"}</p>;

  return (
    <div className="max-w-full">
      <div className="container mx-auto bg-[#FDF7E5]">
        <Navbar />
        <Banner />
        <h1 className="text-black text-2xl text-center font-bold my-2 bg-[#FDF7E5]">
          PHIM ĐANG CHIẾU
        </h1>
        <MoviePoster movies={data || []} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
