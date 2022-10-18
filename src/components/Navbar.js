import { NavLink } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'


//styles
import './Navbar.css'

//components
import Searchbar from './Searchbar' 

export default function Navbar() {
    //destruct the object passed by the ThemeContext.Provider
    const { color } = useTheme()

    return (
        <div className="navbar" style={{ background: color }}>
            <nav>
                <NavLink exact className="brand" to="/">
                    <h1>Cooking Ninja</h1>
                </NavLink>
                <Searchbar />
                <NavLink to="/create">Create Recipe</NavLink>
            </nav>
        </div>
    )
}
