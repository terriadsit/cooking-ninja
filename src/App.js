import { BrowserRouter, Route, Routes } from 'react-router-dom'
/*Learn to use React Route, Firebase, Context, */
//page components
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'

//styles
import './App.css'

function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipes/:id" element={<Recipe />}/>
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
