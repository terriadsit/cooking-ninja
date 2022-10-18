import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

//fired by dispatch, action argument is the object passed by dispatch,
//return updated state
const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, color: action.payload }
        case 'CHANGE_MODE':
            return {...state, mode: action.payload }
        default:
            return state
    }

}
//This component wraps all the components which you want to have ThemeContext State 
//available to, see index.js
export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c',
        mode: 'dark'
    })

    const changeColor = (color) => {
        dispatch({ type: 'CHANGE_COLOR', payload: color })
    }

    const changeMode = (mode) => {
        dispatch({ type: 'CHANGE_MODE', payload: mode })
    }

    return (
        <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}