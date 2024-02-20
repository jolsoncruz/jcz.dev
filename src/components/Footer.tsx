import React from 'react'

const Footer = () => {
  return (
    <>
    <nav className=' bg-white border-t border-gray-200'>
        <div className='max-w-6xl mx-auto px-5'>
            <div className="flex pt-20 items-start justify-between h-96">
                <div className='w-2/3 space-y-2'>
                    <img src='src/assets/avatar.png' className='max-h-12 pr-2' />
                    <h1 className='font-bold font-sans text-xl'>Jolson's Personal Site</h1>
                    <h2 className='font-medium text-md'>Software Developer</h2>
                </div>
                <div className='flex justify-end w-1/3 space-x-40'>
                    <div className='flex flex-col space-y-3'>
                        <h6 className='font-bold text-xl pb-2'>Pages</h6>
                        <a className='hover:underline' href='#'>Home</a>
                        <a className='hover:underline' href='#'>About</a>
                        <a className='hover:underline' href='#'>Projects</a>
                        <a className='hover:underline' href='#'>CV</a>
                        <a className='hover:underline' href='#'>Contact</a>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h6 className='font-bold text-xl pb-2'>Connect</h6>
                        <a className='hover:underline' href='#'>Email</a>
                        <a className='hover:underline' href='#'>GitHub</a>
                        <a className='hover:underline' href='#'>LinkedIn</a>
                        <a className='hover:underline' href='#'>Instagram</a>
                        <a className='hover:underline' href='#'>X</a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between h-48 border-t border-dashed">
                <div className='space-x-14'>
                    <a href='#'>Imprint</a>
                    <a href='#'>Privacy Policy</a>
                </div>
                <div className='space-x-20'>
                    <span>Copyright © jcz.dev 2024</span>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Footer