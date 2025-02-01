import { Container, Content, Form, Avatar } from "./styles";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { Footer } from "../../components/footer";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api"
import { Main } from "../newDish/styled";

export function Profile(){

  const {user, updateProfile, signOut} = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : ""

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]

    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  async function handleUpdate() {
    
    const updated = {
      name, 
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({user: userUpdated, avatarFile})
  }

  function handleSignOut() {
    navigate("/")

    signOut()
  }

  return(
    <Container>

      <Content>

        <Form>

          <ButtonText 
            title = "Voltar"
            icon = {FiArrowLeft}   
            onClick = {handleBack}       
          />

          <Avatar>

            <img 
              src = {avatarUrl} 
              alt="Foto do usuário"
            />

            <label htmlFor = "avatar">

              <FiCamera/>

              <input 
                id = "avatar" 
                type = "file"
                onChange = {handleChangeAvatar}
              />

            </label>

          </Avatar>

          <div className="inputs-wrapper">

            <Input
              placeholder = "Nome"
              type = "text"
              icon = {FiUser}
              value = {name}
              onChange = {ev => setName(ev.target.value)}
            />

            <Input
              placeholder = "E-mail"
              type = "text"
              icon = {FiMail}
              value = {email}
              onChange = {ev => setEmail(ev.target.value)}
            />

            <Input
              placeholder = "Senha atual"
              type = "password"
              icon = {FiLock}
              onChange = {event => setPasswordOld(event.target.value)}
            />

            <Input
              placeholder = "Nova senha"
              type = "password"
              icon = {FiLock}
              onChange = {ev => setPasswordNew(ev.target.value)}
            />

          </div>

          <div className="buttons-wrapper">

            <Button title = "Salvar" onClick = {handleUpdate}/>
            <Button title = "Sair" onClick = {handleSignOut}/>

          </div>

        </Form>

      </Content>

      <Footer/>

    </Container>
  )
}