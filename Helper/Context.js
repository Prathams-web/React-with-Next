'use client'
import React, { createContext } from "react";
export const MyContext = createContext();


const Context = ({ children }) => {
    const userName = "Prathamesh";
    const userEmail = "prathameshtirlotkar2@gmail.com"

    return (
        <div>
            <MyContext.Provider value={ userName }>
                { children }
            </MyContext.Provider>
        </div>
    )

}

export default Context;