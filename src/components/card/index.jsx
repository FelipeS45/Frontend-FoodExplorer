import { Container, DishView, ButtonToEditDish } from "./styles"

import { Link } from 'react-router-dom';

import { Button } from "../button"

import Plate1 from "../../assets/Plate1.png"

import { FiHeart } from "react-icons/fi";
import { TfiPencil } from "react-icons/tfi";
import { FiMinus, FiPlus } from "react-icons/fi";

export function Card() {

 return(
  <Container>

    <div className="icons-wrapper">

      <DishView to = "/dish/:id">

        <img src= {Plate1} alt="Imagem do prato" /> 

      </DishView>

      <div className="favorites-wrapper">
       <button><FiHeart/></button>
      </div>

      <div className="edit-wrapper">
       <ButtonToEditDish to = "/editdish"><TfiPencil/></ButtonToEditDish>
      </div>

    </div>

    <div className="header-wrapper">

      <h1>Prato</h1>
      <p>dpandawd padadwd awidawhd awjdpadajdawpdjawjd</p>

    </div>

    <div className="footer-wrapper">

      <div className="quantity-control">

        <button><FiMinus/></button>
        <span>01</span>
        <button><FiPlus/></button>

      </div>

      <div className="button">

        <Button title = "Adicionar"/>

      </div>

    </div>  

  </Container>
 )
}