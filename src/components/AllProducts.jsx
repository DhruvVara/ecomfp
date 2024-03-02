import React, { useEffect, useState } from 'react'
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { data } from '../utils/products';
import { fetchData } from '../store/slices/ProductSlice';


const category = [{ name: "category", val: "phone", title: "Phone" }, { name: "category", val: "clothes", title: "Clothes" }, { name: "category", val: "shoes", title: "Shoes" }, { name: "category", val: "watch", title: "Watch" }]

const priceRange = [{ name: "price", val: "100", title: "Below 100" }, { name: "price", val: "500", title: "Below 500" }, { name: "price", val: "1000", title: "Below 1000" }]

const ratings = [{ name: "rating", val: "3.5", title: "Above 3.5" }, { name: "rating", val: "4", title: "Above 4" }, { name: "rating", val: "4.5", title: "Above 4.5" }]


const AllProducts = () => {

    const [categoryFilter, setCategoryFilter] = useState("");
    const [priceRangeFilter, setPriceRangeFilter] = useState(1000000);
    const [ratingsFilter, setRatingsFilter] = useState(0);


    const dispatch = useDispatch();
    const prod = useSelector(((state) => state.product));


    useEffect(() => {
        dispatch(fetchData(data));
    }, [])

    console.log(prod);


    const handleCategory = (e) => {
        const val = e.target.value.toLowerCase();

        setCategoryFilter(val)

    }

    const handleRatings = (e) => {
        const val = e.target.value.toLowerCase();

        setRatingsFilter(val)

    }

    const handlePriceRange = (e) => {
        const val = Number(e.target.value.toLowerCase());

        setPriceRangeFilter(val)


    }

    const filters = [{ title: "Categories", list: category, onchange: handleCategory }, { title: "price range", list: priceRange, onchange: handlePriceRange }, { title: "ratings", list: ratings, onchange: handleRatings }];

    const filterData = prod.data.filter(items => {
        const categoryMatch = items.product_category.toLowerCase().includes(categoryFilter);
        const pricelist = items.product_mrp <= priceRangeFilter;
        const ratingMatch = items.product_rating >= ratingsFilter;

        return categoryMatch && pricelist && ratingMatch;
    })



    return (
        <>
            <div className='w-full px-[5%] my-[50px] flex'>
                {/* filters */}
                <div className='w-[20%] h-[40rem] px-8 my-8 bg-gray-200 rounded-md'>
                    <div className='flex justify-between py-5 border border-dotted border-b-black'>
                        <h3>FILTERS</h3>
                        {/* <button className='text-red-500' onClick={() => { setCategoryFilter([]); setPriceRangeFilter([]); setRatingsFilter([]); }}>CLEAR ALL</button> */}
                    </div>

                    <div className='mt-8'>
                        {filters.map((itms, i) => {
                            return (
                                <>
                                    <div className='my-8' key={i}>
                                        <Filter title={itms.title} list={itms.list} onchange={itms.onchange} />
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>

                {/* products */}
                <div className='w-[80%] grid lg:grid-cols-3 md:grid-cols-2 '>

                    {filterData.map((items)=>{
                        return(
                            <>
                            <Card details={items} />
                            </>
                        )
                    })}

                </div>

            </div>
        </>
    )
}

export default AllProducts;



const Filter = ({ title, list, onchange }) => {
    return (
        <>
            <div>
                <h3 className='uppercase poppins-regular'>{title}</h3>
                {list.map((itms, i) => {
                    return (
                        <div className='mt-1' key={i}>
                            <input type='radio' value={itms.val} onChange={onchange} name={itms.name} /> <span className='capitalize'>{itms.title}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}