import React, { useState } from 'react'
import loginIcons from '../assets/login.png'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {Link} from 'react-router-dom';

const SignUp = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  const [data,setData]=useState({
    email : "",
    password : "",
    name : "",
    confirmPassword : ""
  })

  const handleOnChange=(e) =>{
    const{ name, value} = e.target

    setData((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  
  console.log("data login",data)
  return (
    <section id='signup'>
    <div className='mx-auto container px-4 mt-10'>

     <div className='bg-white p-5 w-full max-w-sm mx-auto'>
        <div className='w-20 h-20 mx-auto'>
            <img src={loginIcons} alt='login icons'/>

        </div>
        <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
        <div className='grid'>
           <label>Name : </label>
           <div className='bg-slate-100 p-2'>
           <input 
             type='text' 
             placeholder='enter your name' 
             name='name'
             value={data.name}
             onChange={handleOnChange}
             required
             className='w-full h-full bg-transparent'/>
           </div>
         </div>

         <div className='grid'>
           <label>Email : </label>
           <div className='bg-slate-100 p-2'>
           <input 
             type='email' 
             placeholder='enter email' 
             name='email'
             value={data.email}
             onChange={handleOnChange}
             required
             className='w-full h-full bg-transparent'/>
           </div>
         </div>

         <div>
           <label>Password : </label>
           <div className='bg-slate-100 p-2 flex'>
           <input 
             type={showPassword ? "text" : "password"} 
             placeholder='enter password'
             value={data.password}
             name='password'
             onChange={handleOnChange}
             required
             className='w-full h-full bg-transparent'/> 
           <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
             <span>
               {
                  showPassword ? (
                     <FaEyeSlash/>
                  )
                  :
                  (
                   <FaEye/>
                  )
               }
               
               
             </span>
           </div>
           </div>
           
           
     
         </div>
         
         <div>
           <label>Confirm Password : </label>
           <div className='bg-slate-100 p-2 flex'>
           <input 
             type={showConfirmPassword ? "text" : "password"} 
             placeholder='confirm your password'
             value={data.confirmPassword}
             name='confirmPassword'
             onChange={handleOnChange}
             required
             className='w-full h-full bg-transparent'/> 
           <div className='cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
             <span>
               {
                  showConfirmPassword ? (
                     <FaEyeSlash/>
                  )
                  :
                  (
                   <FaEye/>
                  )
               }
               
               
             </span>
           </div>
           </div>
           
           
     
         </div>

         <button className='bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sign Up</button>
        </form>
        <p className='my-5'>Already have account ? <Link to={"/login"} className='text-yellow-400 hover:text-yellow-600 hover:underline'>Login</Link></p>
     </div>

    </div>

  </section>
  )
}

export default SignUp