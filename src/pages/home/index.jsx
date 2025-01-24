import { Container, Cards } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Card } from "../../components/card";
import { Banner } from "../../components/banner";

export function Home() {

  return(
    <Container>

      <Header/>

      <Banner/>

      <Cards>

        <div className="cards-wrapper">

          <span><h1>Refeições</h1></span>

          <div className="meals">

            <Card/>
            <Card/>
            <Card/>

          </div>

          <h1>Sobremesas</h1>

          <div className="desserts">

            <Card/>
            <Card/>
            <Card/>

          </div>

          <h1>Bebidas</h1>

          <div className="drinks">

            <Card/>
            <Card/>
            <Card/>           

          </div>

        </div>

      </Cards>

      <Footer/>

    </Container>
  )
}