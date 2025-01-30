import { Container, NewDishButton, ProfileView } from "./styles";

import { Input } from "../input";

import { FiSearch } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

export function Header(){

  const {user} = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : ""

  return(
    <Container>

      <div className="logo-wrapper">

        <svg width="26" height="30" viewBox="0 0 26 30"     fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
        </svg>
      
        <h1>FoodExplorer</h1>
      
      </div>

      <Input
        placeholder = "Busque por pratos"
        type = "text"
        icon = {FiSearch}
      />

      <NewDishButton to = "/newdish">Novo Prato</NewDishButton>

      <ProfileView to = "/profile">
              
        <img src = {avatarUrl} alt="Foto do usuário"/>
              
      </ProfileView>

    </Container>  
  )
}