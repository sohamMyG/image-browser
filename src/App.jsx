import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SearchBar from './components/SearchBar'
import { Route, Routes} from 'react-router-dom';
import SearchResults from './pages/SearchResults'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/searchResults/:query?" element={<SearchResults />} />
    </Routes>
  )
}

export default App
