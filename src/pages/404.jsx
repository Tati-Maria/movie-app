import React from 'react'
import {BsEmojiFrown} from "react-icons/bs"
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='font-nunito min-h-screen flex flex-col items-center justify-center gap-6 text-gray-900'>
        <BsEmojiFrown size={150} />
        <div className='text-center'>
        <h2 className='text-red-600 text-2xl font-black'>404</h2>
        <p className='text-xl'>Page Not Found</p>
        <p className='text-xl'>Go back to the <Link className='text-red-500 underline' to={"/"}>HomePage</Link></p>
        </div>
    </div>
  )
}

export default NotFound;