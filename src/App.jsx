import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import './index.css'
import Home from './pages/Home'
import Item from './pages/Item'
import Search from './pages/Search'
import Upcoming from './pages/Upcoming'

import { AnimeProvider } from "./context/AnimeContext";
import NotFound from './pages/NotFound'
import Test from './pages/Test'


function App() {
 
  
  return (
    
    <div className='min-h-screen bg-bg-dark-nav     text-t-dark'>
    <Router>
    <Navbar/>
        <div className='px-6 max-w-6xl mx-auto my-4'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/test' element={<Test/>}/>
            <Route path='/upcoming' element={<Upcoming/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route exact path="/search/:animeId" element={<Item />}/>
            <Route path="/notfound" element={<NotFound />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </div>

    )
}

export default App
