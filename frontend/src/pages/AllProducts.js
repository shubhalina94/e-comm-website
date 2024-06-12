import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'

const AllProducts = () => {

  const [openUploadProduct,setOpenUploadProduct] = useState(false)
  return (
    <div>
      <div className='bg-white py-2 px-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>All Products</h2>
        <button className='border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all py-1 px-3 rounded-full' onClick={()=>setOpenUploadProduct(true)}>Upload Product</button>
      </div>

      {/* upload product component */}
      {
        openUploadProduct && (
          <UploadProduct onClose={()=>setOpenUploadProduct(false)}/>
        )
      }
      
    </div>
  )
}

export default AllProducts