import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import Home from "./pages/Home";
import Search from './pages/Search';
import Movie from './pages/Movie';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <Movie />
      },
      {
        path: "search",
        element: <Search />
      }
    ],
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
