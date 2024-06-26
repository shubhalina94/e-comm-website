import React, {useContext, useState} from 'react';
import Logo from './Logo'; // Importing the logo image
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import {toast} from 'react-toastify'
import {setUserDetails} from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';


const Header = () => {

  const user = useSelector(state => state?.user?.user)
  const dispatch=useDispatch()
  const [menuDisplay,setMenuDisplay] = useState(false)

  // console.log("user header",user)

  const context= useContext(Context)
  const navigate = useNavigate()
  const searchInput = useLocation()
  const URLSearch = new URLSearchParams(searchInput?.search)
  const searchQuery = URLSearch.getAll("q")
  const [search,setSearch] = useState(searchQuery)

  //console.log("searchInput",searchInput?.search.split("=")[1])

  const handleLogout =async()=>{
    const fetchData=await fetch(SummaryApi.logout_user.url,{
      method : SummaryApi.logout_user.method,
      credentials : 'include'
    })

    const data=await fetchData.json()

    if(data.success){
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
      
    }

    if(data.error){
      toast.error(data.message)
    }
  }
  const handleSearch =(e) =>{
       const{ value } = e.target
       setSearch(value)
       if(value){
        navigate(`/search?q=${value}`)
      }
       else{
        navigate("/search")
       }


  }
  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
      <div className="h-full container mx-5 flex items-center px-1 justify-between"> 
        <div className=''>
          <Link to={"/"}>
            <Logo w={90} h={60}/>
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within: shadow pl-2'>
          <input type='text' placeholder='Search for products '  className='w-full outline-none'onChange={handleSearch} value={search}/>
          <div className='text-lg min-w-[50px] h-8 bg-yellow-400 flex items-center justify-center rounded-r-full'>
            <IoSearch />
          </div>
        </div>

        <div className='flex items-center gap-8 mr-8'>

          <div className='relative flex justify-center'>

            {
              user?._id && (
                <div className='text-2xl cursor-pointer relative justify-center ' onClick={()=>setMenuDisplay(preve => !preve)}>
                  <FaRegUser />
                </div>
              )
            }
            
          {
            menuDisplay && (
              <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded'>
            <nav>
              {
                user?.role === ROLE.ADMIN && (
                  <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                )
                }

                 
              
            </nav>
          </div>
            )
          }
    
          </div>


          {
            user?._id && (
              <Link to={"/cart"} className='text-3xl relative'>
                <span>
                  <HiOutlineShoppingBag/>
                </span>
           
                <div className='bg-yellow-400 w-5 h-5 rounded-full p-1 flex items-center justify-center absolute top-0 -right-2'>
                  <p className='text-xs'> {context?.cartProductCount} </p>
                </div>
               
              </Link>

            )
          }
          
          <div>

            {
              user?._id ? (
                <button onClick={handleLogout} className='px-3 py-1 bg-yellow-400 rounded-full hover:bg-yellow-600'>Logout</button>
              )
              : (
              <Link to="/Login" className='px-3 py-1 bg-yellow-400 rounded-full hover:bg-yellow-600'>Login</Link>
              )
            }
            
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
