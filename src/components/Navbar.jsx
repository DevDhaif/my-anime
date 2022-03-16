import React from 'react'
import {Link,useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate()
    const location=useLocation()

    const pathMatchRoute=(route)=>{
        if(route === location.pathname){
            return true
        }
    }

  return (
    <nav className='bg-bg-dark px-8 py-4   flex  w-full justify-center'>
        <div className='flex justify-between w-full max-w-7xl'>
        <div>
            <p className='text-bg-prime text-2xl font-normal  font-robert '>My<span className='text-t-dark ml-2'>Anime</span></p>
        </div>

        <div className='flex flex-col space-y-2 sm:flex-row  space-x-6'>
        
            
                <button 
                className= {`px-2 rounded-md hover:bg-bg-prime/50 cursor-pointer ${pathMatchRoute('/')?'bg-bg-prime':''}`}
                onClick={()=>navigate('/')}
                >Explore</button>
                
                <button 
                className= {`px-2 py-0.5 rounded-md hover:bg-bg-prime/50 cursor-pointer ${pathMatchRoute('/upcoming')?'bg-bg-prime':''}`}
                onClick={()=>navigate('/upcoming')}
                >Upcoming</button>

                <button 
                className= {`px-2 py-0.5 rounded-md hover:bg-bg-prime/50 cursor-pointer ${pathMatchRoute('/search')?'bg-bg-prime':''}`}
                onClick={()=>navigate('/search')}
                >Search</button>
        </div>

        
        </div>
    </nav>
  )
}

export default Navbar