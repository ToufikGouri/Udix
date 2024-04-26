import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal'

const Pricing = () => {
    const [modalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        document.title = "Pricing - Udix"
      }, [])    

    return (
        <>
            <div className="navbarBgHandler h-16 bg-myLightRed"></div>

            <div className='flex flex-col items-center'>

                <div className="textArea">
                    <h2 className='font-myHeadlines font-bold text-3xl my-5 text-center max-sm:mx-10'>Choose the plan that's right for your business </h2>
                    <p className='font-myText font-semibold text-center max-sm:mx-10'>Start with the free plan <span className='text-hoverBlack font-normal'>to try our platform for an unlimited period of time.</span> </p>
                </div>

                <div className="sm:w-full lg:w-11/12">
                    <div className="priceCards font-myText font-medium flex justify-evenly items-center max-sm:flex-col">

                        <div className="Discover my-6 py-5 w-full sm:w-1/4 rounded-lg text-center shadow-2xl border-t-4 border-myBlack">
                            <h2 className='font-myHeadlines font-bold text-3xl mb-5 text-center max-sm:mx-10'>Discover</h2>
                            <p className='text-hoverBlack my-2'>Fast start your business with this.</p>
                            <p className='my-2'>$ <span className='font-myHeadlines text-3xl font-bold'>69</span> /mo</p>

                            <button className='font-myHeadlines m-5 rounded py-1 px-2 font-bold text-myBlue border-2 border-myBlue hover:text-hoverBlue hover:border-hoverBlue' onClick={() => setModalOpen(true)}>SIGN UP NOW</button>

                            <p className='my-2'>3 Months of Data Retention</p>
                            <p className='my-2'>20 Active Campaigns</p>
                            <p className='my-2'>1 Custom Domain</p>

                            <div className='breaker m-8 border border-slate-100'></div>

                            <p className=' my-2'>Group Onboarding</p>
                            <p className=' my-2'>Basic Tracker Features</p>
                            <p className='text-slate-300 my-2'>Automatic A/B Testing</p>
                            <p className='text-slate-300 my-2'>Fraud detection</p>
                            <p className='text-slate-300 my-2'>Additional Users</p>

                            <div className='breaker m-8 border border-slate-100'></div>
                        </div>

                        <div className="Essentials my-6 py-5 w-full sm:w-1/4 rounded-lg text-center shadow-2xl border-t-4 border-myBlue">
                            <h2 className='font-myHeadlines font-bold text-3xl mb-5 text-center max-sm:mx-10'>Essentials</h2>
                            <p className='text-hoverBlack my-2'>Start tracking your affiliate campaigns.</p>
                            <p className='my-2 text-myBlue'>$ <span className='font-myHeadlines text-3xl font-bold'>169</span> /mo</p>

                            <button className='font-myHeadlines m-5 rounded py-1 px-2 font-bold text-myBlue border-2 border-myBlue hover:text-hoverBlue hover:border-hoverBlue' onClick={() => setModalOpen(true)}>SIGN UP NOW</button>

                            <p className='my-2'>3 Months of Data Retention</p>
                            <p className='my-2'>20 Active Campaigns</p>
                            <p className='my-2'>1 Custom Domain</p>

                            <div className='breaker m-8 border border-slate-100'></div>

                            <p className='my-2'>Group Onboarding</p>
                            <p className='my-2'>Basic Tracker Features</p>
                            <p className='my-2'>Automatic A/B Testing</p>
                            <p className='text-slate-300 my-2'>Fraud detection</p>
                            <p className='text-slate-300 my-2'>Additional Users</p>

                            <div className='breaker m-8 border border-slate-100'></div>
                        </div>

                        <div className="Premium my-6 py-5 w-full sm:w-1/4 rounded-lg text-center shadow-2xl border-t-4 border-myRed">
                            <h2 className='font-myHeadlines font-bold text-3xl mb-5 text-center max-sm:mx-10'>Premium</h2>
                            <p className='text-hoverBlack my-2'>Start tracking your affiliate campaigns.</p>
                            <p className='my-2 text-myRed'>$ <span className='font-myHeadlines text-3xl font-bold'>269</span> /mo</p>

                            <button className='font-myHeadlines m-5 rounded py-1 px-2 font-bold text-myBlue border-2 border-myBlue hover:text-hoverBlue hover:border-hoverBlue' onClick={() => setModalOpen(true)}>SIGN UP NOW</button>

                            <p className='my-2'>3 Months of Data Retention</p>
                            <p className='my-2'>20 Active Campaigns</p>
                            <p className='my-2'>1 Custom Domain</p>

                            <div className='breaker m-8 border border-slate-100'></div>

                            <p className='my-2'>Group Onboarding</p>
                            <p className='my-2'>Basic Tracker Features</p>
                            <p className='my-2'>Automatic A/B Testing</p>
                            <p className='my-2'>Fraud detection</p>
                            <p className='my-2'>Additional Users</p>

                            <div className='breaker m-8 border border-slate-100'></div>
                        </div>


                    </div>
                </div>

                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                    <h2 className="text-xl mb-2">Thank you for your request</h2>
                    <p>This feature is coming soon till then please explore the page.</p>
                </Modal>

            </div>
        </>
    )
}

export default Pricing