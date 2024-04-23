import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMenuBtn, setIsMenuBtn] = useState(false)
    const [active, setActive] = useState("HOME")

    return (
        <>
            <nav className='h-16 w-full text-white flex items-center justify-around font-myHeadlines absolute top-0 z-10'>
                <div className='flex items-center justify-around w-full md:w-auto'>

                    {/* LOGO */}
                    <Link className="text-3xl italic font-bold pr-16" to='/'>udix.</Link>

                    {/* mobile screen Menu button */}
                    <button className={`md:hidden border-2 border-white px-3 py-1 ${isMenuBtn ? "text-hoverBlack border-hoverBlack" : ""}`} onClick={() => setIsMenuBtn(!isMenuBtn)}> MENU </button>

                    <ul
                        className={`${isMenuBtn === true ? "block" : "hidden"} 
                        max-md:absolute max-md:top-14 max-md:right-1 max-md:border-2 max-md:border-white max-md:z-10
                        md:flex` }
                        style={isMenuBtn ? {
                            background: 'rgba(255, 255, 255, 0.17)',
                            borderRadius: "8px",
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            backdropFilter: 'blur(8.6px)',
                            WebkitBackdropFilter: 'blur(8.6px)',
                            border: '1px solid rgba(255, 255, 255, 0.14)',
                        } : null}>

                        <li className={`font-medium px-3 hover:text-hoverBlack max-md:my-4 ${active == "HOME" ? "text-myYellow" : ""}`} onClick={()=> setActive("HOME")} ><Link to="/">HOME</Link></li>
                        <li className={`font-medium px-3 hover:text-hoverBlack max-md:my-4 ${active == "BLOG" ? "text-myYellow" : ""}`} onClick={()=> setActive("BLOG")} ><Link to="/">BLOG</Link></li>
                        <li className={`font-medium px-3 hover:text-hoverBlack max-md:my-4 ${active == "PRODUCT" ? "text-myYellow" : ""}`} onClick={()=> setActive("PRODUCT")} ><Link to="/product">PRODUCT</Link></li>
                        <li className={`font-medium px-3 hover:text-hoverBlack max-md:my-4 ${active == "CONTACTS" ? "text-myYellow" : ""}`} onClick={()=> setActive("CONTACTS")} ><Link to="/contact">CONTACTS</Link></li>

                        <li className='font-medium px-3 hover:text-hoverBlack max-md:my-4 max-md:block hidden'><button className='py-1 px-2 font-medium rounded text-myBlue border-2 border-myBlue'>SIGN IN</button></li>
                        <li className='font-medium px-3 hover:text-hoverBlack max-md:my-4 max-md:block hidden'><button className='py-1 px-2 font-medium rounded bg-myBlue border-2 border-myBlue'>SIGN UP</button></li>
                    </ul>
                </div>

                <div className='hidden md:block'>
                    <button className='mx-4 font-medium text-myBlue hover:text-hoverBlue'>SIGN IN</button>
                    <button className='mx-4 py-1 px-2 font-medium text-myBlue border-2 border-myBlue hover:text-hoverBlue hover:border-hoverBlue '>SIGN UP</button>
                </div>
            </nav>

        </>
    )
}

export default Navbar