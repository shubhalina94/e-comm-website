import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import productCategory from '../helpers/productCategory'
import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay'
import VerticalCard from '../components/VerticalCard'
import SummaryApi from '../common'

const CategoryProduct = () => {
    const params = useParams()
    const [data,setData] =useState([])
    const [loading,setLoading]= useState(false)
    const location=useLocation()
    const urlSearch= new URLSearchParams(location.search)
    const urlCategoryListinArray= urlSearch.getAll("category")
    const urlCategoryListObject ={}
    urlCategoryListinArray.forEach(el =>{
      urlCategoryListObject[el]=true
    })

    console.log("urlCategoryListObject",urlCategoryListObject)

    console.log("urlCategoryListinArray",urlCategoryListinArray)

    const [selectCategory,setSelectCategory]= useState(urlCategoryListObject)
    const [filterCategoryList,setFilterCategoryList]=useState([])

    const fetchData = async()=>{
      const response= await fetch(SummaryApi.filterProduct.url,{
        method :SummaryApi.filterProduct.method,
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({
          category:filterCategoryList
        })
      })
      const dataResponse = await response.json()

      setData(dataResponse?.data || [])
      console.log(dataResponse)
    }
    const handleSelectCategory =(e) =>{
       const {name, value, checked} = e.target
       setSelectCategory((preve)=>{
        return{
          ...preve,
          [value]:checked
        }
       })
    }
    useEffect(()=>{
      fetchData()
    },[filterCategoryList])

    //console.log("category",params.categoryName)
    //{params?.categoryName}
    useEffect(()=>{
        const arrayOfCategory = Object.keys(selectCategory).map(categoryKeyName=>{
          if(selectCategory[categoryKeyName]){
            return categoryKeyName
          }
          return null
        }).filter(el => el)
      
        setFilterCategoryList(arrayOfCategory)

    },[selectCategory])
  return (
    <div className='container mx-auto p-4'>
      {/* desktop version */}
        <div className='hidden lg:grid grid-cols-[200px,1fr]'>
          {/* left side */}
          <div className='bg-white p-2 min-h-[calc(100vh-120px)] overflow-y-scroll'>

            {/* sort by */}
            <div className=''>
              <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Sort By</h3>

              <form className='text-sm flex-col gap-2 py-2 '>
                <div className='flex items-center gap-3'>
                  <input type='radio' name='sortBy' />
                  <label>Price- Low to High</label>
                </div>

                <div className='flex items-center gap-3'>
                  <input type='radio' name='sortBy' />
                  <label>Price- High to Low</label>
                </div>
              </form>
            </div>


              {/* filter by  */}
            <div className=''>
              <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Category</h3>

              <form className='text-sm flex-col gap-2 py-2 '>
                {
                  productCategory.map((categoryName,index)=>{
                    return(
                      <div className='flex items-center gap-3'>
                        <input type='checkbox' name={"category"} checked={selectCategory[categoryName?.value]} value={categoryName?.value} id={categoryName?.value}onChange={handleSelectCategory}/>
                        <label htmlFor='categoryName?.value'>{categoryName?.label}</label>
                      </div>
                    )
                  })
                }
              </form>
            </div>

          </div>

          {/* right side */}
          <div>
           {
            data.length!==0 && !loading && (
              <VerticalCard data={data} loading={loading}/>
            )
           }
          </div>
        </div>
    </div>
  )
}

export default CategoryProduct