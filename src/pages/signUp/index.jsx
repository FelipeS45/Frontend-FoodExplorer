import {Container, Logo, Form} from "./styles";

import { Button } from "../../components/button";
import { Input } from "../../components/input";

import { FiMail, FiLock, FiUser} from "react-icons/fi";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos")
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
        
      } else{
        alert("Não foi possível realizar o cadastro")
      }
    })
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
  
          <h2>Faça seu Registro</h2>

          <div className = "input">

            <Input
              placeholder = "Nome"
              type = "text"
              icon = {FiUser}
              onChange = {ev => setName(ev.target.value)}
            />
          
          </div>

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
  
          <Button title = "Cadastrar" onClick = {handleSignUp}/>

          <Link to = "/">Voltar ao Login</Link>

        </Form>
  
      </Container>
    )
}