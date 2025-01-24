import { Container, Main, Banner } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import background from "../../assets/Background.png"

export function Home() {

  return(
    <Container>

      <Header/>

      <Main>

        <Banner>

          <div className="banner-wrapper">

            <div className="img-wrapper">

              <img src={background} alt="Imagem de ingredientes" />

            </div>

            <div className="title">
                      
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                              
            </div>

          </div>
          
        </Banner>

      </Main>

      <Footer/>

    </Container>
  )
}