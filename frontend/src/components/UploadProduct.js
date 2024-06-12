import React, { useState } from 'react'
import { CgClose } from "react-icons/cg";
import productCategory from "../helpers/productCategory";
import { FaCloudUploadAlt } from "react-icons/fa";

const UploadProduct = ({
    onClose
}) => {

const [data,setData] = useState({
    productName : "",
    brandName : "",
    category : "",
    productImage : "",
    description :"",
    price : "",
    selling :""

})

const handleOnChange =(e)=>{

}

const handleUploadProduct =(e)=>{
    const file=e.target.files[0]
    console.log("file",file)
}
  return (
    <div className='fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
        <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>
            <div className='felx justify-between items-center pb-3'>
                <h2 className='font-bold text-lg'>Upload Product</h2>
                <div className='w-fit ml-auto text-2xl hover:text-yellow-600 cursor-pointer' onClick={onClose}>
                    <CgClose />
                </div>
            </div>

            <form className='grid p-4 gap-3 overflow-y-scroll h-full pb-5'>
                <label htmlFor='productName' className='mt-3'>Product Name :</label>
                <input 
                    type='text' 
                    id ='productName' 
                    placeholder='Enter product name' 
                    name='productName'
                    value={data.productName} 
                    onChange={handleOnChange}
                    className='p-2 bg-slate-100 border rounded'
                    
                />

                <label htmlFor='brandName' className='mt-3'>Brand Name :</label>
                <input 
                    type='text' 
                    id ='brandName' 
                    placeholder='Enter brand name' 
                    name='brandName'
                    value={data.brandName} 
                    onChange={handleOnChange}
                    className='p-2 bg-slate-100 border rounded'
                    
                />  

                <label htmlFor='category' className='mt-3'>Category :</label>
                <select value={data.category} className='p-2 bg-slate-100 border rounded'>
                    {
                        productCategory.map((el,index)=>{
                            return(
                                <option value={el.value} key={el.value+index}>{el.label}</option>
                            )
                        })
                    }
                </select>

                <label htmlFor='productImage' className='mt-3'>Product Image :</label>
                <label htmlFor='uploadImageInput'>
                <div className='p-2 bg-slate-100 border-rounded h-32 w-full flex justify-center items-center cursor-pointer'>
                    
                        <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
                            <span className='text-4xl'><FaCloudUploadAlt /></span>
                            <p className='text-sm'>Upload product image</p>
                            <input type='file' id='uploadImageInput' className='hidden' onChange={handleUploadProduct}/>
                        </div>
                    
                </div>
                </label>
                <div>
                    <img src='' width={80} height={80} className='bg-slate-100 border'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UploadProduct