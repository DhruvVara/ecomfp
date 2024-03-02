import React, { useEffect } from 'react'
import SliderComponent from '../components/Slider';
import Section from '../components/Section';
import { useDispatch, useSelector } from 'react-redux';
import { data } from '../utils/products';
import { fetchData } from '../store/slices/ProductSlice';


const HomePage = () => {

    const dispatch = useDispatch();
    const prod = useSelector(((state)=>state.product.data));


    useEffect(()=>{
        dispatch(fetchData(data));
    },[])


    return (
        <>
            <div className=''>
                {/* Slider */}
                <div className='h-[7rem] bg-gray flex items-center justify-around'>
                    <div className='abril-fatface-regular text-2xl'>Better Things <br /> At Better Prices</div>
                    <img src='./images/wideRange.svg' />
                    <img src='./images/valueForMoney.svg' />
                    <img src='./images/fastDelivery.svg' />
                    <img src='./images/safePayments.svg' />
                    <img src='./images/dataPrivacy.svg' />
                </div>

                <div className='container mx-auto h-[28rem] bg-slate-600 overflow-x-hidden'>
                        <SliderComponent />
                </div>

                {/* deals for you section */}

                <div className='px-[5%]'>
                    <Section title={"Deals For You"} />
                </div>

                <div className='px-[5%]'>
                    <Section title={"More To Love"} />
                </div>

            </div>
        </>
    )
}

export default HomePage;
