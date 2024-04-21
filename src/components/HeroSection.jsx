import React from 'react'
import HeroImg from '../assets/heroImg.png'
import HeroLeft from '../assets/heroLeft.png'
import HeroRight from '../assets/heroRight.png'
import Star from '../assets/star.png'

const HeroSection = () => {
    return (
        <>
            <main className="heroSection h-screen md:flex bg-no-repeat bg-cover" style={{ backgroundImage: `url(${HeroImg})` }}>

                {/* Left side of hero page: width: 60% */}
                <div className="sideLeft md:w-3/5 flex justify-center items-center bg-no-repeat mix-blend-overlay" style={{ backgroundImage: `url(${HeroLeft})` }} >

                    <div className='h-[521px] w-[470px] font-bold font-myHeadlines flex flex-col md:justify-center max-lg:mt-20'>
                        <div className='flex items-center justify-center md:justify-start' >
                            <img className='invert h-10 ' src={Star} alt="star logo" />
                            <p className='text-white' >Top market company</p>
                        </div>
                        <h1 className='capitalize text-myLightRed text-4xl md:text-6xl text-center md:text-left my-3 md:my-8 max-lg:mx-1'>Focus on the work that matters</h1>
                        <p className='text-white font-myText font-light text-xl md:text-2xl text-center md:text-left'>udix is the world’s first smart workspace. We bring all your team’s content together while letting you use the tools you love.</p>
                    </div>

                </div>

                {/* Right side of hero page: width: 40% */}
                <div className="sideRight w-4/5 m-auto md:w-2/5 flex justify-center items-center ">

                    <div className="cardBody bg-white w-[400px] relative md:right-44 max-md:bottom-44 shadow-2xl">
                        <h1 className='font-extrabold text-2xl font-myHeadlines ml-12 mt-12'>Get started now</h1>

                        <div className="inputs m-auto font-myText w-4/5 md:w-2/4 ml:0 md:ml-12 my-5">
                            <input type="text" className='border-inherit border-2 p-2 my-2 text-sm w-full' placeholder='Name' />
                            <input type="text" className='border-inherit border-2 p-2 my-2 text-sm w-full' placeholder='Email' />
                            <input type="text" className='border-inherit border-2 p-2 my-2 text-sm w-full' placeholder='Phone Number' />
                            <input type="text" className='border-inherit border-2 p-2 my-2 text-sm w-full' placeholder='Company Name' />

                            <button className='p-2 px-6 my-2 font-bold text-sm font-myHeadlines border-2 text-white bg-myBlue hover:bg-white hover:text-hoverBlue hover:border-hoverBlue '>Sign up</button>
                        </div>

                        <p className='font-myText ml-12 mb-12 max-lg:text-xs max-lg:ml-8'>Support: <span className='text-myBlue'>help@udix.com</span></p>

                        <img className='absolute bottom-5 right-0 max-lg:h-28 max-lg:bottom-8 max-lg:right-4' src={HeroRight} alt="computer logo" />

                    </div>
                </div>

            </main>
        </>
    )
}

export default HeroSection