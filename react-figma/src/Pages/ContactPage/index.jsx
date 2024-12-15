import React from "react";
import { useSelector } from 'react-redux'

export const ContactPage = () =>{
    const posts = useSelector(state => state.posts);
    console.log(posts)

    return(
        <div>Contact us</div>
    )
}

export default ContactPage;