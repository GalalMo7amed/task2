import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Dashbord() {


    const navigate = useNavigate()

    function delet() {
        localStorage.removeItem("currentmode")
        navigate("/singup")
    }

    const emailAdmin = localStorage.getItem("currentmode")
    return (
        <div className='text-center text-[30px]'>
            <p>
                welcome to Dashboard
            </p>
            <h1 className='font-bold mt-5'>
                hello, {emailAdmin}
            </h1>

            <button className='bg-red-600 px-10 py-2 rounded-md text-white' onClick={delet}>
                logout
            </button>
        </div>
    )
}
