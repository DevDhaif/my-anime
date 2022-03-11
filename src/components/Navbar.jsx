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
    <nav className='bg-bg-dark flex justify-between px-8 py-4'>

        <div>
            <p className='text-bg-prime text-2xl font-normal  font-robert '>My<span className='text-t-dark ml-2'>Anime</span></p>
        </div>

        <div className='flex space-x-6'>
        
            
                <button 
                className= {`px-2 py-1 rounded-md hover:bg-bg-prime/50 cursor-pointer ${pathMatchRoute('/')?'bg-bg-prime':''}`}
                onClick={()=>navigate('/')}
                >Explore</button>


                <button 
                className= {`px-2 py-1 rounded-md hover:bg-bg-prime/50 cursor-pointer ${pathMatchRoute('/search')?'bg-bg-prime':''}`}
                onClick={()=>navigate('/search')}
                >Search</button>
        </div>
    </nav>
  )
}

export default Navbar