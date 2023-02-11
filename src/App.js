 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import './theme.css'
import Profile from "./pages/profile";
import { useContext } from "react";
import ThemeContext from "./context/themeProvider";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  const {theme} = useContext(ThemeContext);
  return <div className={`App ${theme}`}>
    <RouterProvider router={router} />
  </div>
}

export default App;
