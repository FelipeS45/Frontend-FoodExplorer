import { Container, Header, NewDishButton, ProfileView, Content, Cards } from "./styles";

import { Footer } from "../../components/footer";
import { Card } from "../../components/card";
import { Banner } from "../../components/banner";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { FiSearch } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { useState, useEffect } from "react";

import { api } from "../../services/api";

export function Home() {

  const {user} = useAuth()

  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState("")

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : ""

  useEffect(() => {
    async function fetchDishes() {
      const token = localStorage.getItem("token") 

      const response = await api.get(`/dishes?name=${search}`)
      setDishes(response.data)
    }

    fetchDishes();
  }, [search])

  return(
    <Container>

      <Header>

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
          onChange = {(ev) => setSearch(ev.target.value)}
        />
        
        <NewDishButton to = "/newdish">Novo Prato</NewDishButton>

        <Button title = "Pedidos: "></Button>

        <ProfileView to = "/profile">
        
          <img src = {avatarUrl} alt="Foto do usuário"/>
        
        </ProfileView>
        
      </Header>

      <Content>

        <Banner/>

        <Cards>

          <div className="cards-wrapper">

            <p className = "section-dishes" >Pratos</p>

            <div className="dishes-wrapper">

              {
                dishes.filter(dish => dish.category == "dishes").map((dish, index) => (
                  <Card
                    key={String(index)}
                    data={dish}
                  />
                ))              
              }

            </div>

            <p className = "section-desserts">Sobremesas</p>

            <div className="desserts-wrapper">

              {
                dishes.filter(dish => dish.category == "dessert").map((dish, index) => (
                  <Card
                    key={String(index)}
                    data={dish}
                  />
                ))              
              }

            </div>

            <p className = "section-drinks">Bebidas</p>

            <div className="drinks-wrapper">

              {
                dishes.filter(dish => dish.category == "drinks").map((dish, index) => (
                  <Card
                    key={String(index)}
                    data={dish}
                  />
                ))              
              }

            </div>
            
          </div>

        </Cards>

      </Content>      

      <Footer/>

    </Container>
  )
}