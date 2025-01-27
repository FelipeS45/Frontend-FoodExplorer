import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { Dish } from "../pages/dish";
import { EditDish } from "../pages/editDish";
import { NewDish } from "../pages/newDish";

export function AppRoutes() {

  return(
    <Routes>

      <Route path = "/" element = {<Home/>}/>
      <Route path = "/editdish" element = {<EditDish/>}/>
      <Route path = "/newdish" element = {<NewDish/>}/>
      <Route path = "/dish/:id" element = {<Dish/>}/>
      
    </Routes>
  )
}