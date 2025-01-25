import { Container, Main, Content } from "./styles"

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Button } from "../../components/button";
import { Ingredients } from "../../components/ingredients";
import { ButtonText } from "../../components/buttonText";
import PlateImg from "../../assets/Plate1.png"

import { PiCaretLeft } from "react-icons/pi";
import { FiMinus, FiPlus } from "react-icons/fi";

export function Dish() {
  
  return(
    <Container>

      <Header/>

        <Main>

          <div className="gobackbutton-wrapper">

            <PiCaretLeft/>
            <ButtonText title = "Voltar"/>

          </div>

          <Content>

            <div className="plateimg-wrapper">

              <img src = {PlateImg} alt="Imagem do prato escolhido"/>

            </div>

            <div className="content-wrapper">

              <h1>Prato</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo praesentium facere delectus error omnis aspernatur provident quod, amet aliquid cupiditate et nostrum, repellat illo numquam doloribus dolores enim odit cum!</p>

              <div className="ingredients-wrapper">

                <Ingredients name = "Batata"/>
                <Ingredients name = "Polvilho"/>
                <Ingredients name = "Sal"/>

              </div>

              <div className="interactions-wrapper">

                <div className="admin-only">

                  <Button className = "editPlate" title = "Editar Prato"/>

                </div>

                <div className="customer-only">

                  <div className="quantity-control">
                
                    <button><FiMinus/></button>
                    <span>01</span>
                    <button><FiPlus/></button>
              
                  </div>

                  <Button className = "includePlate" title = "Incluir"/>

                </div>

              </div>

            </div>

          </Content>

        </Main>

      <Footer/>

    </Container>
  )
}