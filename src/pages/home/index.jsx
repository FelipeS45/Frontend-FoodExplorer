import { Container, Header, NewDishButton, ProfileView, Content, Cards } from "./styles";

import { Footer } from "../../components/footer";
import { Card } from "../../components/card";
import { Banner } from "../../components/banner";
import { Input } from "../../components/input";

import { FiSearch, FiMenu } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { api } from "../../services/api";

export function Home() {

  const { user } = useAuth()
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState("")
  const [cart, setCart] = useState([])  

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : ""

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?name=${search}`)
      setDishes(response.data)
    }

    fetchDishes();
  }, [search]);

  const handleAddToCart = (id, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        )
      } else {
        return [...prevCart, { id, quantity }]
      }
    })
  }

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (

    <Container>

      <Header>

        <FiMenu/>

        <div className="logo-wrapper">

          <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
          </svg>
          <h1>FoodExplorer</h1>

        </div>

        <Input 
          placeholder="Busque por pratos" 
          type="text" 
          icon={FiSearch} 
          onChange={(ev) => setSearch(ev.target.value)} 
        />

        <NewDishButton to="/newdish">Novo Prato</NewDishButton>

        <span>Pedidos: {totalQuantity}</span>

        <ProfileView to="/profile">
          <img src={avatarUrl} alt="Foto do usuário"/>
        </ProfileView>

      </Header>

      <Content>

        <Banner/>

        <Cards>

          <p className="section-dishes">Pratos</p>

          <Swiper modules={[Navigation]} navigation spaceBetween={32} slidesPerView={'auto'}>
            
            {
              dishes.filter(dish => dish.category === "dishes").map((dish, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                  <Card data={dish} onAdd={handleAddToCart} />
                </SwiperSlide>
              ))
            }

          </Swiper>

          <p className="section-desserts">Sobremesas</p>

          <Swiper modules={[Navigation]} navigation spaceBetween={32} slidesPerView={'auto'}>
            
            {
              dishes.filter(dish => dish.category === "dessert").map((dish, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                  <Card data={dish} onAdd={handleAddToCart} />
                </SwiperSlide>
              ))
            }

          </Swiper>

          <p className="section-drinks">Bebidas</p>

          <Swiper modules={[Navigation]} navigation spaceBetween={32} slidesPerView={'auto'}>
            
            {
              dishes.filter(dish => dish.category === "drinks").map((dish, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                  <Card data={dish} onAdd={handleAddToCart} />
                </SwiperSlide>
              ))
            }

          </Swiper>

        </Cards>

      </Content>

      <Footer />

    </Container>
  );
}
