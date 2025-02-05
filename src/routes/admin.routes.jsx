import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { Dish } from "../pages/dish";
import { EditDish } from "../pages/editDish";
import { NewDish } from "../pages/newDish";
import { Profile } from "../pages/profile";
import { NotFound } from "../pages/notFound";

export function AdminRoutes() {

  return(
    <Routes>

      <Route path = "/" element = {<Home/>}/>
      <Route path = "/editdish/:id" element = {<EditDish/>}/>
      <Route path = "/newdish" element = {<NewDish/>}/>
      <Route path = "/dish/:id" element = {<Dish/>}/>
      <Route path = "/profile" element = {<Profile/>}/>

      <Route path = "*" exact = {true} element = {<NotFound/>}/>
      
    </Routes>
  )
}