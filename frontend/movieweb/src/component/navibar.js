import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheet/nav.css'

function navibar() {
  return (
    <>
    <div className='flex gap-10 justify-center p-5'>
        <div className='web px-5 py-3 text-4xl '>
            <h1>Movietic</h1>
        </div>
        <div className=' px-5 py-5'>
        <Link to="Home" className='nav px-7'>home</Link>
        <Link to="Feed" className='nav px-7'>feed</Link>
        <Link to="About" className='nav px-7'>about</Link>
        <Link to="Book" className='nav px-7'>book</Link>
        <Link to="Search" className='nav px-7'>search</Link>
        </div>
        <div className='theme px-5 py-5'> 
        <Link to="/" className='log bg-zinc-500 text-orange-300 border-black-900 px-7 py-4 rounded-full'>Logout</Link>
        </div>
    </div>
    </>
  )
}

export default navibar