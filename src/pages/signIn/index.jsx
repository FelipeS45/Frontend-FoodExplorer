import {Container, Logo, Form} from "./styles";

import { Button } from "../../components/button";
import { Input } from "../../components/input";

import { FiMail, FiLock } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";
import { useState } from "react";

export function SignIn() {

  const [email, setEmail] = useState("") // ("") -> começa vazio
  const [password, setPassword] = useState("")

  const {signIn} = useAuth();

  function handleSignIn(){
    signIn({email, password})
  }

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
            onChange = {ev => setEmail(ev.target.value)}
          />

        </div>

        <div className="input">

          <Input
            placeholder = "Senha"
            type = "password"
            icon = {FiLock}
            onChange = {ev => setPassword(ev.target.value)}
          />

        </div>

        <Button title = "Entrar" onClick = {handleSignIn}/>

        <Link to = "/register">Criar conta</Link>

      </Form>

    </Container>
  )
}