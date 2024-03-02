import React from 'react'

const company = ["About", "Features", "Works", "Careers"]
const help = ["Customer Help", "Delivery Details", "Terms & Conditions", "Privacy Policy"]
const faq = ["Account", "Manage Deliveries", "Orders", "Payments"];

const payments = ["visa", "masterCard", "payPal", "applePay", "gPay"]

const Footer = () => {
    return (
        <>
            <div className='w-full h-[23rem] mt-[150px] bg-gray-200 relative px-[5%]'>
                <div className='w-full h-[18rem] flex items-center border border-b-black'>
                    <div className='w-[30%]'>
                        <img src='./images/ecomBlack.svg' className='h-5 cursor-pointer' />
                        <p className='mt-5 poppins-regular text-gray-400'>We have all the items that you <br /> need now or in future!</p>
                        <div className='flex mt-3'>
                            <img className='mr-1' src='./images/twitter.svg' />
                            <img className='m-1' src='./images/facebook.svg' />
                            <img className='m-1' src='./images/insta.svg' />
                            <img className='m-1' src='./images/github.svg' />
                        </div>
                    </div>
                    <div className='w-[70%] flex justify-around'>
                        <ShortLinks title={"company"} list={company} />
                        <ShortLinks title={"help"} list={help} />
                        <ShortLinks title={"faq"} list={faq} />
                    </div>
                </div>
                <div className='text-gray-400 flex justify-between my-3 px-5'>
                    <p>ecom C 2024. All Rights Reserved.</p>
                    <div className='flex'>
                        {payments.map((mode, i) => {
                            return (

                                <img key={i} src={`./images/${mode}.svg`} className='h-[35px]' />
                            )
                        })}
                    </div>
                </div>

                <div className='absolute bg-black h-[120px] rounded-lg w-[90%] -top-[70px] flex justify-between items-center px-[5%]'>
                    <h3 className='abril-fatface-regular uppercase text-white text-2xl'>Stay Up to Date about <br />our latest offer</h3>
                    <div className='poppins-regular'>

                        <div className='  bg-white rounded-full px-4 py-1 flex '>
                            <img src='./images/mail.svg' className='py-1' />
                            <input placeholder='Enter Your E-mail Addre...'  className=' rounded-full w-[100%] p-1 outline-none px-3 text-md ' />
                        </div>
                        <button className='bg-white py-2 px-8 mt-2 w-full rounded-full font-bold'>
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;





const ShortLinks = ({ title, list }) => {
    return (
        <>
            <div className=''>
                <h3 className='poppins-regular uppercase my-3 text-black font-bold'>{title}</h3>
                <div>
                    {list.map((name, i) => {
                        return (
                            <>
                                <p key={i} className='capitalize my-1 text-gray-400'>{name}</p>
                            </>
                        )
                    })}
                    {/* <p className='capitalize my-1 text-gray-400'>About</p>
                    <p className='capitalize my-1'>About</p>
                    <p className='capitalize my-1'>About</p>
                    <p className='capitalize my-1'>About</p>     */}
                </div>
            </div>
        </>
    )
}