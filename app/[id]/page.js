'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function User({ params }) {

    const { id } = params;
    const [userdata, setUserdata] = useState("");

    const getData = async () => {
      try{
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/" + id);
        setUserdata(data);
        console.log(data);
      } catch(e){
        console.log(e.message);
      }
      
    }

    useEffect(() => {
        getData()
      }, [])  
    
        
    return (
        <>
            <p className="text-2xl mt-2 bg-slate-300 p-2">{userdata.name} ---- {userdata.username} ---- <a>{userdata.website}</a></p>
        </>
    )
}
