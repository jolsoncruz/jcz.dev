import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='sticky top-0 z-10 bg-slate-100 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200'>
        <div className=' max-w-6xl mx-auto px-5'>
            <div className="flex items-center justify-between h-14">
                <div>
                    <a href='#' className='flex items-center font-bold'><img src='src/assets/avatar.png' className='h-auto max-h-10 pr-2' />jcz.dev</a>
                </div>
                <div className='space-x-5'>
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Projects</a>
                    <a href='#'>CV</a>
                    <a href='#'>Contact</a>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar