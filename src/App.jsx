import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import Navbar from './components/Navbar'
import './index.css'
import Home from './pages/Home'
import Item from './pages/Item'
import Search from './pages/Search'


function App() {
 
  
  return (
    <div className='min-h-screen bg-bg-dark-nav     text-t-dark'>
    <Router>
    <Navbar/>
        <div className='px-6 '>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route exact path="/:animeId/:animeTitle" element={<Item />}/>
            
          </Routes>
        </div>
      </Router>
    </div>
    )
}

export default App
