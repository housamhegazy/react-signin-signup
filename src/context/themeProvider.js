import { createContext,useReducer } from "react";
const ThemeContext = createContext();
const initialData = {theme:localStorage.getItem('DarkMood')|| "light" };
const reducer = (state,action)=>{
  switch (action.type){
    case  "CHANGE_THEME" :
      return { ...state, theme: action.newValue };
    default:
      return state;
  
  }
}

export function ThemeProvider({children}){
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const changeTheme = (newTheme) => { dispatch({ type: "CHANGE_THEME", newValue: newTheme }) }
  return (
    <ThemeContext.Provider	 value={{ ...firstState,changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );

}

export default ThemeContext;