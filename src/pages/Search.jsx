import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";
import useFetchData from "../hooks/useFetchData";
import usePagination from "../hooks/usePagination";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey =  import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const {data, loading} = useFetchData(`${searchUrl}?${apiKey}&query=${query}`);
  const {paginatedData, currentPage, handlePageChange} = usePagination(data, 10)

  const lastPage = Math.ceil(data.length / 10);

  return (
    <section className="py-12 font-nunito">
    <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-center text-2xl font-bold pb-10">Results for: <span className="text-red-500 capitalize">{query}</span></h2>
        <section className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
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

export default Search;