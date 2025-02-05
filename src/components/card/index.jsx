import { Container, DishView, ButtonToEditDish } from "./styles";

import { Button } from "../button";

import Logo from "../../assets/Polygon1.png";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils"

import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { TfiPencil } from "react-icons/tfi";

import { useState } from "react";

import { api } from "../../services/api";

export function Card({ data, onAdd, ...rest }) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const {user} = useAuth()

  const dishImageURL = data.image ? `${api.defaults.baseURL}/files/${data.image}` : Logo

  function decreaseQuantity() {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1))
  }

  function increaseQuantity() {
    setQuantity((prevQuantity) => Math.min(10, prevQuantity + 1))
  }

  function handleAdd() {
    onAdd(data.id, quantity)  
  }

  function toggleFavorite() {
    setIsFavorite(!isFavorite)
  }

  return (

    <Container>

      <div className="icons-wrapper">

        <DishView to={`/dish/${data.id}`}>
          <img src={dishImageURL} alt="Imagem do prato" />
        </DishView>

        {
          USER_ROLE.CUSTOMER.includes(user.role) &&

          <div className="favorites-wrapper">
            <button onClick = {toggleFavorite}>
              <FiHeart
                color={isFavorite ? "#AB222E" : ""} 
                fill={isFavorite ? "#AB222E" : ""}
              />
            </button>
          </div>

        }

        

        {
          USER_ROLE.ADMIN.includes(user.role) &&

          <div className="edit-wrapper">
            <ButtonToEditDish to={`/editdish/${data.id}`}><TfiPencil /></ButtonToEditDish>
          </div>

        }

      </div>

      <div className="content-wrapper">

        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <h2>R$ {data.price}</h2>

      </div>

      <div className="footer-wrapper">

        {
          USER_ROLE.CUSTOMER.includes(user.role) &&

          <div className="quantity-control">

            <button onClick={decreaseQuantity} disabled={quantity === 1}>
              <FiMinus />
            </button>

            <span>{String(quantity).padStart(2, "0")}</span>

            <button onClick={increaseQuantity} disabled={quantity === 10}>
              <FiPlus />
            </button>

          </div>

        }

        {
          USER_ROLE.CUSTOMER.includes(user.role) &&

          <div className="button">
            <Button title="Adicionar" onClick={handleAdd} />
          </div>

        }

      </div>

    </Container>
  )
}
