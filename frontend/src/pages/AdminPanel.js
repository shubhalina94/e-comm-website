import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { FaRegUser } from "react-icons/fa";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';


const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user)
    const navigate = useNavigate()

    //if role is general, redirect to the home page
    useEffect(()=>{
        if(user?.role !==ROLE.ADMIN){
            navigate("/")
        }
    },[user])

  return (
    <div className='min-h-[calc(100vh-120px)] md:flex hidden '>
        <aside className='bg-white min-h-full w-full max-w-60 customShadow'>
            <div className='h-32 flex justify-center items-center flex-col'>
                <div className='text-4xl cursor-pointer relative flex justify-center '>
                    <FaRegUser />
                </div>
                <p className='capitalize text-lg fonr-semibold'>
                    {user?.name}
                </p>
                <p className='text-sm'>
                    {user?.role}
                </p>
            </div>

            {/* navigation */}
            <div>
                <nav className='grid'>
                    <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-100'>All Users</Link>
                    <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-100'>All products</Link>
                </nav>
            </div>
        </aside>
        <main className='w-full h-full p-2'>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminPanel