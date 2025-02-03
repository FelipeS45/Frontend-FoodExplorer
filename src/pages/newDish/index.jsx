import { Container, Main, Image, Form } from "./styled";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Input } from "../../components/input";
import { IngredientItem } from "../../components/ingredientItem";
import { TextArea } from "../../components/textarea";
import { ButtonText } from "../../components/buttonText";
import { Button } from "../../components/button";

import { FiArrowLeft, FiUpload } from "react-icons/fi";

import { useAuth } from "../../hooks/auth"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function NewDish() {

  const [image, setImage] = useState(null)
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const navigate = useNavigate()

  function handleNewIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(removed){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== removed))
  }

  async function handleNewDish() {
    if(!image || !name || !category || !price || !description || !ingredients) {
      return alert("É necessário preencher a todos os campos")
    }

    const formData = new FormData()

    formData.append("image", image)
    formData.append("name", name)
    formData.append("category", category)
    formData.append("price", price)
    formData.append("description", description)

    ingredients.map(ingredient => (
      formData.append("ingredients", ingredient)
    ))

    await api
      .post("/dishes", formData)
      .then(alert("Prato adicionado com sucesso!"), navigate("/"))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
          
        } else {
          alert("Erro ao criar o prato!")
        }
      }); 
  }

  function handleBack() {
    navigate(-1)
  }

  return(
    <Container>

      <Header/>

      <Main>

        <div className="header-wrapper">

          <div className="gobackbutton-wrapper">

            <FiArrowLeft/>
            <ButtonText title = "Voltar" onClick= {handleBack}/>

          </div>

          <h1>Criar Prato</h1>        

        </div>

        <Form>

          <div className="image-wrapper">

            <p>Imagem</p>

            <Image>

              <div className="image-upload">

                <div className="label-wrapper">

                  <label htmlFor="image" className="upload-button">
                    <FiUpload size = {18}/>
                    Selecione a imagem
                  </label>

                </div>

                <input
                  type="file"
                  id="image"
                  onChange={(ev) => setImage(ev.target.files[0])}
                />

              </div>

            </Image>

          </div>  

          <div className="name-wrapper">

            <p>Nome</p>

            <Input 
              placeholder = "Ex.: Salada Ceasar" 
              className = "name"
              type = "text"
              value = {name}
              onChange = {ev => setName(ev.target.value)}
            />

          </div>

          <div className="category-wrapper">

            <p>Categoria</p>

            <select defaultValue={"default"} onChange={ev => setCategory(ev.target.value)}>
              <option value="default" disabled>Selecione a categoria</option>
              <option value="dishes">Pratos</option>
              <option value="dessert">Sobremesas</option> 
              <option value="drinks">Bebidas</option>
            </select>

          </div>

          <div className="ingredients-wrapper">

            <p>Ingredientes</p>

            <div className="insert-ingredients">

              {
                ingredients.map((ingredient, index) => (

                  <IngredientItem 
                    key = {String(index)}
                    value = {ingredient} 
                    onClick = {() => handleRemoveIngredient(ingredient)}
                  />
                ))
              }

              <IngredientItem placeholder = "Ingrediente"
                value = {newIngredient} 
                className = "new-ingredient"
                onChange = {event => setNewIngredient(event.target.value)}
                onClick = {handleNewIngredient}
                isNew
              />

            </div>

          </div>

          <div className="price-wrapper">

            <p>Preço</p>

            <Input 
              placeholder = "R$ 00,00" 
              type="number"
              onChange={ev => setPrice(ev.target.value)}
            />
            
          </div>

          <div className="description-wrapper">

            <p>Descrição</p>

            <TextArea
              placeholder = "Descrição do prato"
              onChange={e => setDescription(e.target.value)}
            />
              
          </div>

        </Form>

        <Button 
          className = "save-dish" 
          title = "Salvar prato"
          onClick = {handleNewDish}
        />

      </Main>

      <Footer/>

    </Container>
  )
}