import { RouteObject } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

interface Route extends RouteObject {
  path: string
  name: string
}

export const routes: Route[] = [
  { path: '/', name: 'home', element: <Home /> },
  { path: '/about', name: 'about' , element: <About /> },
]

