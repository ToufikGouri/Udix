import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Modal from './Modal'

const Navbar = () => {
    const [isMenuBtn, setIsMenuBtn] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);
    const { pathname } = useLocation()

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

                        <li className={`font-medium px-3 hover:text-hoverBlack max-md:my-4 ${pathname == "/" ? "text-myYellow" : ""}`} ><Link to="/">HOME</Link></li>
                        <li className={`font-medium px-3 hover:text-hoverBlack max-md:my-4 ${pathname == "/product" ? "text-myYellow" : ""}`} ><Link to="/product">PRODUCT</Link></li>
                        <li className={`font-medium px-3 hover:text-hoverBlack max-md:my-4 ${pathname == "/pricing" ? "text-myYellow" : ""}`} ><Link to="/pricing">PRICING</Link></li>
                        <li className={`font-medium px-3 hover:text-hoverBlack max-md:my-4 ${pathname == "/contact" ? "text-myYellow" : ""}`} ><Link to="/contact">CONTACTS</Link></li>

                        <li className='font-medium px-3 hover:text-hoverBlack max-md:my-4 max-md:block hidden'><button className='py-1 px-2 font-medium rounded text-myBlue border-2 border-myBlue' onClick={() => setModalOpen(true)}>SIGN IN</button></li>
                        <li className='font-medium px-3 hover:text-hoverBlack max-md:my-4 max-md:block hidden'><button className='py-1 px-2 font-medium rounded bg-myBlue border-2 border-myBlue' onClick={() => setModalOpen(true)}>SIGN UP</button></li>
                    </ul>
                </div>

                <div className='hidden md:block'>
                    <button className='mx-4 font-medium text-myBlue hover:text-hoverBlue' onClick={() => setModalOpen(true)}>SIGN IN</button>
                    <button className='mx-4 py-1 px-2 font-medium text-myBlue border-2 border-myBlue hover:text-hoverBlue hover:border-hoverBlue' onClick={() => setModalOpen(true)}>SIGN UP</button>
                </div>


                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                    <h2 className="text-xl mb-2">Thank you for your request</h2>
                    <p>This feature is coming soon till then please explore the page.</p>
                </Modal>

            </nav>

        </>
    )
}

export default Navbar