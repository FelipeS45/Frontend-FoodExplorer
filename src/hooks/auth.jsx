import { createContext, useContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({children}){

  const [data, setData] = useState({})

  async function signIn({email, password}) { // {} - quero o email e a senha dentro do objeto independente da posição em que ele está (podem ser informados em qualquer ordem)
    
    try{
      const response = await api.post("/sessions", {email, password})
      const {user, token} = response.data

      localStorage.setItem("@foodexplorer: user", JSON.stringify(user))
      localStorage.setItem("@foodexplorer: token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({user, token})

    } catch(error){

      if(error.response){
        alert(error.response.data.message)
      }

      else{
        alert("Não foi possível entrar!")
      }
    }
  }

  function signOut(){ // remover as informações do usuário armazenadas no localStorage
    localStorage.removeItem("@foodexplorer: user")
    localStorage.removeItem("@foodexplorer: token")

    setData({})
  }

  async function updateProfile({user, avatarFile}) {
    
    try {

      if(avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put("/users", user)

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user))

      setData({user, token: data.token})

      alert("Perfil atualizado com sucesso")
      
    } catch(error) {

      if(error.response){
        alert(error.response.data.message)
      }

      else{
        alert("Não foi possível atualizar o perfil do usuário")
      }
    }
  }

  useEffect(() => { // dizer ao React o que deve ser feito depois da renderização (renderização -> atualizar a DOM)
    const user = localStorage.getItem("@foodexplorer: user")
    const token = localStorage.getItem("@foodexplorer: token")

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }

  }, []) // toda vez que o atributo que estiver dentro de [] é atualizado, o useEffect é chamado
  
  return(
    <AuthContext.Provider value = {{
      signIn, 
      signOut, 
      updateProfile,
      user: data.user}}>

      {children}

    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export {AuthProvider, useAuth};