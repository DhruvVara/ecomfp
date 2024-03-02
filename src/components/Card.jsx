import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ details }) => {
    return (
        <>
            <Link to={`/product/${details.product_id}`}>
                <div className='xl:w-[18rem] md:w-[18rem] lg:w-[15rem] xl:h-[22em] lg:h-[21rem] md:h-[22rem] lg:mt-8 mt-4 m-auto border border-gray-300 rounded-lg hover:cursor-pointer hover:shadow-xl shadow-md'>
                    <div className='h-[72%] rounded-t-lg bg-white' >
                        <img src={details.product_images[0]} className='h-full w-full object-contain' />
                    </div>
                    <div className='px-5 py-1 border border-t-5 border-b-0 border-t-black '>
                        <h2 className='text-lg poppins-regular line-clamp-1'>{details.product_title}</h2>
                        <div className='flex items-center'>
                            <img src='./images/star.svg' className='h-3' /> <span className='ml-1'>{details.product_rating}/5</span>
                        </div>
                        <div className='flex items-center poppins-regular '>
                            <p>${details.product_price}</p>
                            <sapn className='line-through text-gray-400 mx-3'>${details.product_mrp}</sapn>
                            <span className='text-center bg-red-300 text-red-500 text-discount px-2 py-1 rounded-2xl'>-{details.product_offer}</span>
                        </div>
                    </div>
                </div></Link>
        </>
    )
}

export default Card;
