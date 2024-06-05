import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState} from 'react';
import SummaryApi from './common';
import Context from './context';
import { setUserDetails } from './store/userSlice';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch() //redux
  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : 'include' //if 'include' is not mentioned , then cookies will not be sent to the backend
    })

    const dataApi = await dataResponse.json()

    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }

    console.log("data-user",dataResponse)
  }

  useEffect(()=>{
    /** user Details */ 
    fetchUserDetails()
 

  },[])

  return (
    <>
      <Context.Provider value={{
        fetchUserDetails 
      }}>
        <ToastContainer />

        <Header />
        <main className="min-h-[calc(100vh-120px)]">
          <Outlet />
        </main>
        <Footer />

      </Context.Provider>
    </>
  );
}

export default App;
