import React from 'react'

const Navbar = () => {
    // make active link color myYellow
    // font color white
    return (
        <>
            <nav className='flex h-16 w-full text-white items-center justify-around font-myHeadlines absolute top-0 z-10'>
                <div className='flex items-center'>

                    {/* LOGO */}
                    <h1 className="text-3xl italic font-bold pr-16 hover:cursor-pointer">udix.</h1>

                    <ul className='flex'>
                        <li className='font-medium px-3 hover:text-hoverBlack'><a href="/">HOME</a></li>
                        <li className='font-medium px-3 hover:text-hoverBlack'><a href="/">BLOG</a></li>
                        <li className='font-medium px-3 hover:text-hoverBlack'><a href="/">PRODUCT</a></li>
                        <li className='font-medium px-3 hover:text-hoverBlack'><a href="/">CONTACTS</a></li>
                    </ul>
                </div>

                <div>
                    <button className='mx-4 font-medium text-myBlue hover:text-hoverBlue '>SIGN IN</button>
                    <button className='mx-4 py-1 px-2 font-medium text-myBlue border-2 border-myBlue hover:text-hoverBlue hover:border-hoverBlue '>SIGN UP</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar