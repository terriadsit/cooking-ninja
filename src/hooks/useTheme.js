import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


export const useTheme = () => {
    //context will be the object created as the value of ThemeContext.Provider
    const context = useContext(ThemeContext)
  
    if (context === undefined) {
        throw new Error("useTheme() must be used inside a ThemeProvider") ;
    }
    
    return context
}
