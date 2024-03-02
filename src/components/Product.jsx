import React, { useEffect } from 'react'
import Section from './Section';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/CartSlice';

const Product = () => {

    const { id } = useParams();

    // // const [details,menu] = useRestaurantMenu(resId);
    const { data } = useSelector((state) => state.product);

    const dispatch = useDispatch();



    const filter = data.filter(item => {
        return item.product_id == id;
    })


    return (
        <>
            <div className='w-full px-[5%] my-[50px]'>
                <div className='flex justify-between'>
                    <div className='w-[60%] flex flex-col items-center'>

                        {/* top images */}
                        <div className='flex'>
                            <Image source={filter[0].product_images[0]} />
                            <Image source={filter[0].product_images[1]} />
                        </div>

                        {/* mid images */}
                        <div className='my-3'>
                            <div className='w-[31rem] h-[13rem] mx-2 rounded-2xl '>
                                <img src={filter[0].product_images[2]} className='w-full h-full object-contain' />
                            </div>

                        </div>

                        {/* bottom images */}
                        <div className='flex'>
                            <Image source={filter[0].product_images[3]} />
                            <Image source={filter[0].product_images[4]} />
                        </div>
                    </div>

                    <div className='w-[40%] flex flex-col items-center'>
                        {/* top - heading & ratings */}
                        <div className='border-0 border-b-2 border-b-gray-400 w-full px-3'>
                            <h3 className='py-2  poppins-regular font-extrabold'>{filter[0].product_title} </h3>
                            <h5 className=' poppins-regular'>{filter[0].product_subtitle} </h5>
                            <div className='py-1 px-2 border border-gray-400 rounded-lg flex items-center w-[11rem] my-2 h-8 mb-6 '>
                                <span className='flex items-center border-0 border-r-2 border-r-gray-400'>{filter[0].product_rating} <img src='../images/star.svg' className='h-[18px] mx-1' /></span>
                                <span className='mx-3 poppins-regular '>10 Ratings</span>
                            </div>
                        </div>
                        {/* mid - prices & add to cart */}

                        <div className='w-full border-0 border-b-2 border-b-gray-400'>
                            {/* prices and off */}
                            <div className=''>
                                <div className='flex mt-5 text-xl'>
                                    <h3 className='font-bold poppins-regular'>{filter[0].product_price}</h3>
                                    <h3 className=' font-bold line-through text-gray-400 mx-5 poppins-regular '>{filter[0].product_mrp}</h3>
                                    <h3 className='font-semibold poppins-regular'>({filter[0].product_offer})</h3>
                                </div>
                                <p className='poppins-regular my-1'>inclusive of all taxes</p>
                            </div>

                            {/* sizes */}
                            <div className='my-10'>
                                <h3 className=' text-xl poppins-regular mb-2'>Select sizes:</h3>
                                <SizeCard />
                            </div>
                            {/* add to cart */}

                            <div className='my-5'>
                                <button className=' px-8 py-2 rounded-full bg-black text-white' onClick={()=>dispatch(addToCart(filter))}>Add to cart</button>
                            </div>

                        </div>

                        {/* bottom - details */}

                        <div className='w-full mt-10'>
                            <h2 className='uppercase font-bold poppins-regular '>Product details</h2>
                            {filter[0].product_description}
                        </div>

                    </div>
                </div>


                {/* Similar Products */}
                <div className='my-[200px]'>

                    <Section button={false} title={"Similar Products"} data={data[4]} />
                </div>
            </div>
        </>
    )
}

export default Product;


const Image = ({source}) => {
    return (
        <>
            <div className='w-[15rem] h-[10rem] mx-2 rounded-2xl bg-white'>
                <img src={source} className='object-contain w-full h-full' />
            </div>
        </>
    )
}


export const SizeCard = ({ size }) => {
    return (
        <>
            <div className='w-14 h-10 rounded-3xl border border-black flex items-center justify-center poppins-regular hover:bg-black hover:text-white cursor-pointer font-bold'>
                S
            </div>
        </>
    )
}