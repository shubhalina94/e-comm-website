import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'

const AllUsers = () => {
  const [allUser,setAllUsers] = useState([])
  const fetchAllUsers=async()=>{
    const fetchData=await fetch(SummaryApi.allUser.url,{
      method : SummaryApi.allUser.method,
      credentials: 'include'
    })

    const dataResponse=await fetchData.json()

    console.log(dataResponse)
    
  }
  useEffect(()=>{
    fetchAllUsers()
  },[])

  return (
    <div>AllUsers</div>
  )
}

export default AllUsers