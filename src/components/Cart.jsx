import React, { useEffect } from 'react'
import { SizeCard } from './Product';
import Section from './Section';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeAll, totalPrice } from '../store/slices/CartSlice';

const Cart = () => {

    const { data,total } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    useEffect(()=>{
        // dispatch(totalPrice(data))
    },[data]);

    return (
        <>
            <div className='w-full px-[5%]' >
                {/* Top */}
                <div className='flex justify-between my-10'>
                    <Link to='/'><img src='/images/ecomBlack.svg' /></Link>
                    <p className='poppins-regular'>100% Secure Payment</p>
                </div>

                {/* Stages of order */}
                <div className='h-[90px] border-0 border-y-2 border-t-3 border-b-black border-t-black flex items-center justify-center'>
                    <div className='w-[50%] flex justify-around items-center'>
                        <h3 className='font-bold poppins-regular uppercase '>cart</h3><img src='/images/arrow.svg' className='h-[13px]' />
                        <h3 className='font-bold poppins-regular uppercase '>address</h3><img src='/images/arrow.svg' className='h-[13px]' />
                        <h3 className='font-bold poppins-regular uppercase '>payment</h3>
                    </div>
                </div>


                {/* Cart Items and Total */}
                <div className='w-full flex justify-between my-5'>
                    {/* cart Items */}
                    <div className='w-[60%] flex  flex-col px-10'>
                        {/* no ot items in the cart */}
                        <div className='my-5 flex justify-between'>
                            1/1 items Selected
                            <button className='text-red-500' onClick={()=>dispatch(removeAll())}>Remove All</button>
                        </div>

                        <div className='mt-2 border-0 border-r-2 border-gray-400 pr-5'>

                            {/* <CartCard /> */}

                            {data ? data.map((item)=>{
                                return(
                                    <Link to={`/product/${item.product_id}`}><CartCard details={item} /></Link>
                                )
                            }):("No data in the cart")}

                        </div>
                    </div>

                    {/* Total */}
                    <div className='w-[40%] pt-[100px] poppins-regular px-5'>
                        <h3 className='font-extrabold uppercase'>Price Details</h3>

                        <div className='my-8 uppercase w-[70%] border-0 border-b-2 border-b-black'>
                            <div className='my-5 flex justify-between items-center'>
                                <h3 className=''>Total mrp</h3>500
                            </div>
                            <div className='my-5 flex justify-between items-center'>
                                <h3 className=''>Total Discount</h3>500
                            </div>
                            <div className='my-5 flex justify-between items-center'>
                                <h3 className=''>Shipping fee</h3>0
                            </div>
                        </div>

                        {/* total */}
                        <div className='my-3'>
                            <div className='mb-3 flex w-[70%] justify-between font-black'>
                                <h3>Total Amount</h3>0
                            </div>
                        </div>
                    </div>

                </div>

                <div className='my-[100px] border-0 border-t-2 border-black'>
                    <Section title={"You May Also Like"} />

                </div>
            </div>
        </>
    )
}

export default Cart;


const CartCard = ({details}) => {
    return (
        <>
            <div className='w-full  border border-gray-400 h-[190px] rounded-xl flex mb-5'>
                <div className='w-[30%]  rounded-xl p-3'>
                    <div className='rounded-xl bg-gray-500 h-full w-full'>

                    </div>
                </div>

                {/* description */}
                <div className='px-10 py-6'>
                    <div className=' poppins-regular '>
                        <h3 className='font-bold '>{details.product_title}</h3>
                        <span>{details.product_subtitle}</span>
                    </div>

                    {/* sizes and Quantity */}
                    <div className='my-3 flex items-center'>
                        <SizeCard />
                        <div className='ml-10 border border-black w-[100px]  py-1 px-1 flex justify-between rounded-full'>
                            <button className='bg-gray-300 rounded-full w-[25px] flex items-center justify-center '><img src='./images/minus.svg' /></button>
                            1
                            <button className='bg-gray-300 rounded-full w-[25px] flex items-center justify-center '><img src='./images/plus.svg' /></button>
                        </div>

                    </div>

                    {/* Prices */}
                    <div className=''>
                        <div className='flex mt-5 text-lg'>
                            <h3 className='font-bold poppins-regular'>{details.product_price}</h3>
                            <h3 className=' font-bold line-through text-gray-400 mx-5 poppins-regular '>{details.product_mrp}</h3>
                            <h3 className='font-semibold poppins-regular'>({details.product_offer})</h3>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}