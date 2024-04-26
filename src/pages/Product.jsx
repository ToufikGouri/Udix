import React, { useEffect } from 'react'
import Card1Logo from '../assets/card1Logo.png'
import Card2Logo from '../assets/card2Logo.png'
import Card3Logo from '../assets/card3Logo.png'
import Arrow from '../assets/arrow.png'

const Product = () => {
    useEffect(() => {
        document.title = "Product - Udix"
      }, [])    

    return (
        <>
            <div className="navbarBgHandler h-16 bg-myLightRed"></div>

            <div className='flex flex-col items-center'>

                {/* Text Content */}
                <div className="textPart lg:w-3/5 my-8">
                    <h2 className='font-myHeadlines font-bold text-[26px] my-5 text-center max-sm:mx-10'>Solutions that will change your business forever</h2>
                    <p className='font-myText font-normal text-center max-sm:mx-10'>Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech solutions together with a team of creative experts.</p>
                </div>

                {/* Cards Content */}
                <div className="Cards flex flex-col items-center sm:flex-row justify-evenly mt-7 lg:w-3/5">
                    <div className="card1 w-4/5 sm:w-1/4 hover:shadow-2xl cursor-pointer my-3">
                        <div className='m-5'>
                            <img src={Card1Logo} alt="Target on goals" />
                            <h1 className='font-myHeadlines font-extrabold text-xl my-6'>CRM Product</h1>
                            <p className='font-myText font-normal'>Some networks believe that by only offering. </p>
                            <img className='mt-10' src={Arrow} alt="Arrow poiting right" />
                        </div>
                    </div>

                    <div className="card2 bg-myLightRed w-4/5 sm:w-1/4 hover:shadow-2xl cursor-pointer my-3">
                        <div className="m-5 text-white">
                            <img src={Card2Logo} alt="Target on goals" />
                            <h1 className='font-myHeadlines font-extrabold text-xl my-6'>Web Services</h1>
                            <p className='font-myText font-normal'>Service based on web are also available. </p>
                            <img className='mt-10' src={Arrow} alt="Arrow poiting right" />
                        </div>
                    </div>

                    <div className="card3 w-4/5 sm:w-1/4 hover:shadow-2xl cursor-pointer my-3">
                        <div className="m-5">
                            <img src={Card3Logo} alt="Target on goals" />
                            <h1 className='font-myHeadlines font-extrabold text-xl my-6'>Mobile App</h1>
                            <p className='font-myText font-normal'>Mobile based all type of consultancy and services. </p>
                            <img className='mt-10' src={Arrow} alt="Arrow poiting right" />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Product