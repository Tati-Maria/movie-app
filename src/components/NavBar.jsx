import { NavLink, useNavigate } from 'react-router-dom';
import {BiSearchAlt2} from "react-icons/bi"
import {FcFilmReel} from "react-icons/fc";
import { useState } from 'react';

const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if(!search) return;
    navigate(`/search?q=${search}`);
    setSearch("")
  }


  return (
    <nav className='py-2 bg-gray-900'>
      <div className='mx-auto max-w-5xl p-4 flex justify-between items-center flex-col gap-4 sm:gap-0 sm:flex-row'>
        <h2 className='text-3xl font-extrabold'>
          <NavLink to={"/"} className="flex items-center gap-2" >
            <FcFilmReel />
            <span className='text-white'>Popular<span className='text-red-600'>Mov</span></span>
            </NavLink>
        </h2>
        <form onSubmit={handleSubmit} className='flex items-center gap-2'>
            <input 
            value={search}
            onChange={e => setSearch(e.target.value)}
            className='py-1 px-4 rounded-md text-black' 
            type="text" 
            placeholder='Search for a movie'
            />
            <button type="submit" className='bg-red-500 p-[6px] rounded-md'>
                <BiSearchAlt2 size={20} color="white" />
            </button>
        </form>
      </div>
      </nav>
  )
}

export default NavBar;