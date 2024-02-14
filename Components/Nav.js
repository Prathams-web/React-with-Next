import { MyContext } from "@/Helper/Context";
import React, { useContext } from "react";

const Nav = () => {
    const user = useContext(MyContext);
 
    return (
        <div className="bg-orange-500 p-2 rounded m-2 text-xl text-white">
            <h1>We're going to Achieve Everything...</h1>
            <h2>@{user}</h2>
        </div>
    )
}


export default Nav;