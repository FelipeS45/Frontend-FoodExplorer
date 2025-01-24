import { Container } from "./styles";

import { Input } from "../input";
import { Button } from "../button";

import { FiSearch } from "react-icons/fi";

export function Footer(){

  return(
    <Container>

      <div className="logo-wrapper">

        <svg width="26" height="30" viewBox="0 0 26 30"     fill="#4D585E" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#4D585E"/>
        </svg>
      
        <h1>FoodExplorer</h1>
      
      </div>

      <p>© 2023 - Todos os direitos reservados.</p>

    </Container>  
  )
}