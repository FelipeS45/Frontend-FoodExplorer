import { useState, useEffect } from "react";
import { Container, Banner, Content } from "./styles";

import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Card } from "../../components/card";
import { SideBar } from "../../components/sidebar";
import background from "../../assets/Background.png";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export function Home() {
  const {user} = useAuth();

  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes?search=${search}`)
        setDishes(response.data)
      } catch (error) {
        console.error("Erro ao buscar pratos:", error)
      }
    }

    fetchDishes()
  }, [search])

  return (
    <Container menuIsOpen={menuIsOpen}>

      <SideBar menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} onSearch={setSearch}/>

      <Header onMenuToggle={() => setMenuIsOpen((prev) => !prev)}/>

      <div className="banner-wrapper">

        <Banner>

          <div className="banner">
            <img src={background} alt="Imagem de ingredientes" />
          </div>

          <div className="title-wrapper">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>

        </Banner>
      </div>

      <Content>

        <div className="cards-wrapper">

          <p className="section-dishes">Pratos</p>

          <Swiper modules={[Navigation]} navigation spaceBetween={32} slidesPerView={"auto"}>
            
            {
              dishes
              .filter((dish) => dish.category === "dishes")
              .map((dish, index) => (
                <SwiperSlide key={index} style={{ width: "auto" }}>
                  <Card data={dish} />
                </SwiperSlide>
              ))
            }

          </Swiper>

          <p className="section-desserts">Sobremesas</p>

          <Swiper modules={[Navigation]} navigation spaceBetween={32} slidesPerView={"auto"}>
            
            {
              dishes
              .filter((dish) => dish.category === "dessert")
              .map((dish, index) => (
                <SwiperSlide key={index} style={{ width: "auto" }}>
                  <Card data={dish} />
                </SwiperSlide>
              ))
            }

          </Swiper>

          <p className="section-drinks">Bebidas</p>

          <Swiper modules={[Navigation]} navigation spaceBetween={32} slidesPerView={"auto"}>
            
            {
              dishes
              .filter((dish) => dish.category === "drinks")
              .map((dish, index) => (
                <SwiperSlide key={index} style={{ width: "auto" }}>
                  <Card data={dish} />
                </SwiperSlide>
              ))
            }

          </Swiper>

        </div>

      </Content>

      <Footer />
      
    </Container>
  );
}
