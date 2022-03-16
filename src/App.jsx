import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import { useEffect } from 'react/cjs/react.production.min'
import Navbar from './components/Navbar'
import './index.css'
import Home from './pages/Home'
import Item from './pages/Item'
import Search from './pages/Search'
import Upcoming from './pages/Upcoming'


function App() {
 
  
  return (
    <div className='min-h-screen bg-bg-dark-nav     text-t-dark'>
    <Router>
    <Navbar/>
        <div className='px-6 max-w-6xl mx-auto my-4'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/upcoming' element={<Upcoming/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route exact path="/search/:animeId" element={<Item />}/>
            
          </Routes>
        </div>
      </Router>
    </div>
    )
}

export default App
