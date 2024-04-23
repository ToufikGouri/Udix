import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="bg-myBlack flex justify-center text-white border-t">

                <div className='w-3/4 py-10 flex justify-around max-md:flex-col-reverse'>

                    {/* Left Side of Footer */}
                    <div className="leftSide max-md:text-center">
                        <Link className="text-5xl md:text-3xl italic font-bold md:pr-16" to='/'>udix.</Link>

                        <div className="SocialMedia my-5">
                            <p className='font-myText font-normal'>Connect with us at</p>
                            <Link to="https://www.linkedin.com/in/toufik-gouri-a41a71234" target='_blank' className='hover:text-hoverBlack' ><i className="fa-brands fa-linkedin text-2xl m-3 ml-0"></i></Link>
                            <Link to="https://github.com/ToufikGouri" target='_blank' className='hover:text-hoverBlack' ><i className="fa-brands fa-github text-2xl m-3"></i></Link>
                        </div>

                        <ul className="flex max-md:justify-center">
                            <li className='font-medium pr-3 hover:text-hoverBlack max-md:my-4'><Link to="/">HOME</Link></li>
                            <li className='font-medium px-3 hover:text-hoverBlack max-md:my-4'><Link to="/">BLOG</Link></li>
                            <li className='font-medium px-3 hover:text-hoverBlack max-md:my-4'><Link to="/product">PRODUCT</Link></li>
                            <li className='font-medium pl-3 hover:text-hoverBlack max-md:my-4'><Link to="/contact">CONTACTS</Link></li>
                        </ul>
                    </div>

                    {/* Left Side of Footer */}
                    <div className="rightSide md:mx-6 max-md:text-center max-md:mb-6">
                        <h1 className='font-myText font-normal text-hoverBlack md:text-xl my-3 md:my-6'>If you have any questions, please contact us by email: <br /> contact@mail.com. Partial copying is allowed. provided that the <br /> indexed link is set to website.com </h1>
                        <p className='font-myText font-normal text-hoverBlack'> &copy; udix.com 2024 </p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer