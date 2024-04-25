import React, { useState } from 'react'
import Modal from '../components/Modal';

const Contact = () => {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className='h-screen text-center flex flex-col sm:justify-center items-center bg-myBlack text-white'>
                <div className="textPart mt-16">
                    <h2 className='font-myHeadlines font-bold text-4xl sm:text-5xl my-5 mb-10'>Working with us are the path to success</h2>
                    <p className='font-myText text-slate-300 font-normal text-lg sm:text-xl max-lg:mx-4'>Get the Onboarding Package for Free and enjoy our platform <br /> with the support of our professional onboarding team.</p>
                </div>

                <div className="inputs my-5 sm:my-12">
                    <input className='bg-myBlack font-myText text-xl sm:text-2xl p-3 px-8 sm:mx-3 max-sm:my-3 brightness-125 placeholder-hoverBlack placeholder:font-light' type="text" placeholder='Name' />
                    <button className='bg-myRed font-myText text-xl sm:text-2xl p-3 px-8 sm:mx-3 max-sm:my-3 font-bold hover:bg-hoverRed' onClick={() => setModalOpen(true)}>Subscribe</button>
                </div>

                <p className='font-myText text-hoverBlack font-normal text-base sm:text-xl'>WARNING: once you join udix you <br /> will lose the need for any other landing page</p>

                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                    <h2 className="text-xl mb-2">Thank you for your request</h2>
                    <p>This feature is coming soon till then please explore the page.</p>
                </Modal>

            </div>
        </>
    )
}

export default Contact