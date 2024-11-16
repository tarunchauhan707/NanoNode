import React from 'react'
import Link from 'next/link'
const Navbar=()=>{
    return(
        <nav className='h-16 bg-[#54C392] flex justify-between px-3 items-center text-white '>
      <div className="logo font-bold text-2xl"> 
        <Link href="/">NanoNode</Link>
      </div>
      <ul className='flex justify-center gap-4 items-center'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/shortener"><li>Shortener</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <li className='flex gap-3'>
          <Link href="https://github.com/tarunchauhan707"><button className='bg-[#181C14] rounded-lg shadow-lg p-3 py-1 font-bold'>GitHub</button></Link>
        </li>
      </ul>
    </nav>
    )
}

export default Navbar