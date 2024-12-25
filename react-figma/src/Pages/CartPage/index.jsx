import React from "react";
import { useSelector } from 'react-redux'
import ProductCard from "../../components/ProductCard";

export const CartPage = () =>{
    const posts = useSelector(state => state.posts);
    console.log(posts)

    return(
        <div>
            <ProductCard/>
        </div>
    )
}

export default CartPage;