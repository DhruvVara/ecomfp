import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        data: [{
            "product_category": "phone",
            "product_id": "1",
            "product_title": "Samsung Galaxy S21 Ultra",
            "product_subtitle": "Experience the pinnacle of mobile technology",
            "product_description": "Experience the pinnacle of mobile technology with the Samsung Galaxy S21 Ultra. Featuring a stunning 6.8-inch Dynamic AMOLED display, powerful Snapdragon 888 processor, pro-grade camera system, and 5G connectivity.",
            "product_price": 1199,
            "product_mrp": 1299,
            "product_size": "6.8",
            "product_brand": "Samsung",
            "product_rating": 4.8,
            "product_offer": "10% off",
            "product_discount": 100,
            "product_images": [
                "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/s/l/-original-imagtnqjjuc6dh6v.jpeg?q=70&crop=false",
                "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/3/u/-original-imagt46g4qahyjza.jpeg?q=70&crop=false",
                "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/b/o/-original-imagtnqjmk7dxnkh.jpeg?q=70&crop=false",
                "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/g/d/-original-imagtnqjyzabh8wz.jpeg?q=70&crop=false",
                "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/g/d/-original-imagtnqjyzabh8wz.jpeg?q=70&crop=false"
            ],
            "product_number_of_review": 1025
        }],
        total:0

    },
    reducers: {
        addToCart: (state, action) => {


            var newData = Object.assign({ quantity: 1 }, action.payload);
            // let newData = action.payload;

            let item_existed = state.data.find(item => action.payload.id === item.id)
            if (item_existed) {
                item_existed.quantity += 1;
                return {
                    ...state,
                    total: state.total + item_existed.price
                }
                // }else{
                //     newData.quantity = 1;
                //     return{
                //         ...state,
                //         total:state.total+newData.price
                //     }
            }

            state.data.push(newData);
            state.total = state.total + action.payload.price


            // state.data.push(newData);
            // const newTotal = state.total + action.payload.price;

            //check if the action id exists in the addedItems
            //    if(existed_item)
            //    {
            //       addedItem.quantity += 1 
            //        return{
            //           ...state,
            //            total: state.total + addedItem.price 
            //             }
            //   }
            //    else{
            //       addedItem.quantity = 1;
            //       //calculating the total
            //       let newTotal = state.total + addedItem.price 

            //       return{
            //           ...state,
            //           addedItems: [...state.addedItems, addedItem],
            //           total : newTotal
            //       }

            //   }


        },
        removeFromCart: (state, action) => {
            state.total = (state.total - action.payload.price).toFixed(2);
            state.data = state.data.filter((data) => data.id != action.payload.id);
        },
        removeAll: (state) => {
            state.data = [];
        },
        totalPrice:(state,action)=>{
            let price=0;
            for(let i=0;i<action.payload.length;i++){
                price+=data[i].product_price;
            }
            state.total=price
        }
    }
})

export default CartSlice.reducer;

export const { removeAll, removeFromCart, addToCart,totalPrice } = CartSlice.actions;