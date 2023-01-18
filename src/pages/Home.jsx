import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";
import useFetchData from "../hooks/useFetchData";
import usePagination from "../hooks/usePagination";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const {data, loading, error} = useFetchData(`${moviesURL}popular?${apiKey}`)
    const {paginatedData, currentPage, handlePageChange} = usePagination(data, 10)

    //check last page
    const lastPage = Math.ceil(data.length / 10);

  return (
    <section className="py-12 font-nunito">
    <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-center text-2xl font-bold pb-10">The Most Popular Movies in 2022:</h2>
        <section className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {error && <span>{error.message}</span>}
            {loading && <Loader />}
            {paginatedData.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </section>
        <div className="flex items-end justify-center gap-10 pt-10">
            <button className="bg-red-500 p-2 disabled:bg-red-300 rounded-md" 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            >
                Prev
            </button>
            <button className="bg-red-500 p-2 disabled:bg-red-300 rounded-md"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === lastPage}
            >
                Next
            </button>
        </div>
    </div>
    
    </section>
  )
}

export default Home;