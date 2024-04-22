import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Customer1 from '../assets/customers/1.png'
import Customer2 from '../assets/customers/2.png'
import Customer3 from '../assets/customers/3.png'
import Customer4 from '../assets/customers/4.png'
import Customer5 from '../assets/customers/5.png'
import Customer6 from '../assets/customers/6.png'

const Customers = () => {

    const allCustomer = [Customer1, Customer2, Customer3, Customer4, Customer5, Customer6]
    const items = allCustomer.map((val, ind) =>
        <div key={ind} className='flex items-center justify-center h-16'>
            <img src={val} alt={`Customer ${ind + 1}`} />
        </div>
    )

    // Responsiveness of Alice carousel
    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 3,
        },
        768: {
            items: 4
        }
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center sm:my-10'>
                <h2 className='font-myHeadlines font-bold text-3xl my-5 mb-10 sm:mb-24 max-lg:text-center'>Working with a diverse global customer base</h2>

                <div className='w-11/12 sm:w-3/4'>
                    <AliceCarousel
                        mouseTracking
                        infinite
                        autoPlayInterval={1000}
                        animationDuration={1500}
                        disableButtonsControls
                        responsive={responsive}
                        autoPlay
                        items={items}
                    />
                </div>
            </div>
        </>
    )
}

export default Customers