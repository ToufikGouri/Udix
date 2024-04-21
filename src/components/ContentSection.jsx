import React from 'react'
import Content1Img from '../assets/content1.png'
import Content2Img from '../assets/content2.png'

const ContentSection = () => {
    return (
        <>
            <div className='flex flex-col items-center my-16 max-lg:mt-44'>

                {/* Upper Section */}
                <div className="upperSection text-right  md:w-2/3">

                    <h1 className="text-5xl italic font-bold text-myBlue lg:mr-7 max-lg:text-center">udix.</h1>
                    <div className='flex justify-evenly max-lg:flex-col-reverse max-lg:items-center'>
                        <img className='h-80 w-80' src={Content1Img} alt="Team discussing" />

                        <div className="textPart lg:w-3/5">
                            <h2 className='font-myHeadlines font-bold text-[26px] my-5 max-lg:text-center'>is a leading provider of the digital marketing services</h2>
                            <p className='font-myText font-normal max-lg:text-center max-lg:mx-4'>Using proprietary tools and we run thousands of simultaneous self-funded campaigns across different platforms such as paid search, social advertising, mobile and video ads and many more. The campaigns either support our publishing assets or (in most cases) direct users directly to our clients.</p>
                        </div>
                    </div>
                </div>

                {/* Lower Section */}
                <div className="lowerSection md:w-2/3">

                    <div className='flex justify-evenly max-lg:flex-col-reverse max-lg:items-center'>
                        <img className='h-80 w-96 lg:ml-10 lg:mr-5' src={Content2Img} alt="Team discussing" />

                        <div className="textPart lg:w-3/5">
                            <h2 className='font-myHeadlines font-bold text-[26px] my-5 max-lg:text-center'>Creativity & Technology</h2>
                            <p className='font-myText font-normal mb-14 max-lg:mx-4'>Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech solutions together with a team of creative experts on-call with the tools you need based on real-time results</p>

                            <h2 className='font-myHeadlines font-bold text-[26px] my-5 max-lg:text-center'>Defines our true value</h2>
                            <p className='font-myText font-normal max-lg:mx-4'>Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentSection