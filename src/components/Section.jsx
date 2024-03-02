import React from 'react'
import Card from './Card';

const Section = ({ title,button,data }) => {

    console.log(data)
    return (
        <>
            <div className='my-10'>
                <h3 className='abril-fatface-regular text-2xl pl-6'>{title}</h3>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 '>
                    {/* {data.map((item)=>{
                        return(
                            <Card details={data} />
                        )
                    })} */}
                </div>

                {button && <div className='inline-block py-2 px-10 rounded-full font-semibold mt-[50px] ml-7 cursor-pointer border border-gray-300'>
                        View All
                </div>}
            </div>
        </>
    )
}

export default Section;
