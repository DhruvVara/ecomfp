import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const Header = () => {

    const [search, setSearch] = useState("");
    const [signUpOffer, setSignUpOffer] = useState(true);

    return (
        <div className=' overflow-x-hidden'>
            {signUpOffer && <div className='h-[4vh] w-[100%] bg-white flex relative'>
                <div className='w-[100%] m-auto flex justify-center poppins-regular text-sm'>Sign and get 20% off to your First order. <span className='text-underline'>Sign Up Now</span></div>
                <img src='./images/close.svg' className='h-3 m-auto absolute right-20 top-2 cursor-pointer' onClick={() => setSignUpOffer(false)} />
            </div>}
            <div className='w-[100vw] h-[17vh] bg-black flex flex-col py-2 px-[5%]'>
                <div className='w-[100%] h-[10vh] flex justify-between items-center'>
                    <div >
                        <Link to="/"><img src='./images/ecom.svg' className='h-5 cursor-pointer' /></Link>
                    </div>

                    <div className='w-[50%] relative'>
                        <div className='  bg-white rounded-full px-4 py-1 flex'>
                            <img src='./images/search.svg' className='py-1' />
                            <input placeholder='search for products...' value={search} onChange={(e) => setSearch(e.target.value)} className='rounded-full w-[100%] p-1 outline-none px-3 text-md ' />
                            <img src='./images/camMic.svg' className='py-1' />
                        </div>

                        {search && <div className='absolute py-3 px-5  z-10 w-[85%] shadow-xl rounded-md mt-1 ml-8 border border-black bg-white'>
                            <h4 className='border-0 border-b-2 border-gray-400 py-2'>ada </h4>
                            <h4 className='border-0 border-b-2 border-gray-400 py-2'>ada </h4>
                        </div>}
                    </div>

                    <div className='flex '>
                        <Link to='/cart'> <img src='./images/cart.svg' className='py-1 mx-4 h-[32px] cursor-pointer' /></Link>
                        <img src='./images/user.svg' className='py-1 h-[35px] cursor-pointer' />
                    </div>

                </div>

                <div className='w-[70%] m-auto'>
                    <div className=' text-white flex justify-around px-10'>
                        <Link to="bestseller"><p>Best Seller</p></Link>
                        <Link to="topbrans"><p>Top Brands</p></Link>
                        <Link to="homeappliances"><p>Home Appliances</p></Link>
                        <Link to="clothins"><p>Clothing</p></Link>
                        <Link to="shoes"><p>Shoes</p></Link>
                        <Link to="electronics"><p>Electronics</p></Link>
                        <Link to="more"><p>More</p></Link>
                    </div>

                </div>

            </div>

            <Outlet />

        </div>
    )
}

export default Header;




