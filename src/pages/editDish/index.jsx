import { Container, Main, Content } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ButtonText } from "../../components/buttonText";
import { Input } from "../../components/input";
import { IngredientItem } from "../../components/ingredientItem";

import { PiCaretLeft } from "react-icons/pi";
import { FiUpload } from "react-icons/fi";
import { Button } from "../../components/button";

export function EditDish() {

  return(
    <Container>

      <Header/>

      <Main>

        <div className="gobackbutton-wrapper">
        
          <PiCaretLeft/>
          <ButtonText title = "Voltar"/>
        
        </div>

        <h1>Editar Prato</h1>

      </Main>

      <Content>

        <div className="dish-details">

          <div className="image-wrapper">

            <p>Imagem do prato</p>

            <div className="input-wrapper">

              <FiUpload/>
              <ButtonText className = "button-text" title = "Selecione a imagem"/>

            </div>

          </div>

          <div className="name-wrapper">

            <p>Nome</p>
           <Input Placeholder = "Ex.: Salada Ceasar" className = "name"/>

          </div>

          <div className="category-wrapper">

            <p>Categoria</p>
            <Input className = "category"/>
            
          </div>

        </div>

        <div className="ingredients-price">

          <div className="ingredients-wrapper">

            <p>Ingredientes</p>

            <div className="insert-ingredients">

              <IngredientItem value = "batata"/>
              <IngredientItem value = "batata" isNew/>
              <IngredientItem value = "batata" isNew/>
              <IngredientItem value = "batata" isNew/>

            </div>

          </div>

          <div className="price-wrapper">

            <p>Preço</p>
            <Input Placeholder = "R$ 00,00" className = "price"/>
            
          </div>

        </div>

        <div className="description-details">

          <div className="description-wrapper">

            <p>Descrição</p>
            <Input className = "description"/>

          </div>

        </div>

        <div className="buttons-wrapper">

          <Button className = "delete-dish" title = "Excluir prato"/>

          <Button title = "Salvar alterações"/>

        </div>

      </Content>

      <Footer/>

    </Container>
  )
}