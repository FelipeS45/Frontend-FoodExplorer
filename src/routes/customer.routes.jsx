import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { Dish } from "../pages/dish";
import { Profile } from "../pages/profile";
import { NotFound } from "../pages/notFound";

export function CustomerRoutes() {

  return(
    <Routes>

      <Route path = "/" element = {<Home/>}/>
      <Route path = "/dish/:id" element = {<Dish/>}/>
      <Route path = "/profile" element = {<Profile/>}/>

      <Route path = "*" exact = {true} element = {<NotFound/>}/>
      
    </Routes>
  )
}