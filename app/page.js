'use client';
import React, { useContext } from "react";
import Link from "next/link";
import axios from "axios";
import Header from "@/Components/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const notify = () => {
    toast.success('🦄 Wow so easy! 🌹', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <>
    <div className="text-2xl m-2 bg-slate-200 px-5 py-3">
    <ToastContainer />
      <Header />
      <button onClick={notify} className="text-lg text-white px-4 py-2 mt-2 rounded bg-purple-700">Get Noti...</button>
      
    </div>
    </>

  )
}

export default page;