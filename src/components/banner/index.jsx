import { Container } from "./styles"

import background from "../../assets/Background.png"

export function Banner() {

  return(
    <Container>

      <div className="banner-wrapper">
      
        <div className="img-wrapper">
      
          <img src={background} alt="Imagem de ingredientes" />
      
        </div>
      
        <div className="title">
                            
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                                    
        </div>
      
      </div>

    </Container>
  )
}