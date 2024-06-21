import React from 'react'
import { useLocation} from 'react-router-dom'
import SummaryApi from '../common'

const SearchProduct = () => {
    const query =useLocation()
    console.log("query",query.search)
    const fetcProduct=async()=>{
        const response = await fetch(SummaryApi.searchProduct.url+query)
         const dataResponse = await response.json()

         console.log("dataResponse",dataResponse)
        
    }
  return (
    <div>SearchProduct</div>
  )
}

export default SearchProduct