import {Container, Logo, Form} from "./styles";

import { FiMail, FiLock } from "react-icons/fi";

import { Button } from "../../components/button";
import { Input } from "../../components/input";

export function SignIn() {

  return(
    <Container>

      <Logo>

        <div className="logo-wrapper">

          <svg width="26" height="30" viewBox="0 0 26 30"     fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
          </svg>

          <h1>FoodExplorer</h1>

        </div>

      </Logo>

      <Form>

        <h2>Faça seu Login</h2>

        <div className = "input">

          <Input
            placeholder = "E-mail"
            type = "text"
            icon = {FiMail}
          />

        </div>

        <div className="input">

          <Input
            placeholder = "Senha"
            type = "password"
            icon = {FiLock}
          />

        </div>

        <Button title = "Entrar"/>

        <a href="#">Criar conta</a>

      </Form>

    </Container>
  )
}