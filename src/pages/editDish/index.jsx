import { Container, Main, Image, Content } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Input } from "../../components/input";
import { IngredientItem } from "../../components/ingredientItem";
import { Button } from "../../components/button";
import { TextArea } from "../../components/textarea";
import { ButtonText } from "../../components/buttonText";

import { FiUpload, FiArrowLeft } from "react-icons/fi";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";

export function EditDish() {

  const [image, setImage] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const [data, setData] = useState(null)

  const params = useParams()

  const navigate = useNavigate()

  const dishImageURL = data && `${api.defaults.baseURL}/files/${data.image}`

  function handleChangeDishImage(ev) {
    const image = ev.target.files[0]
    setImageFile(image)

    const imagePreview = URL.createObjectURL(image)
    setImage(imagePreview)
  }

  async function handleRemoveDish() {
    const confirmRemoval = confirm("Confirme se deseja remover o prato")
  
    if(confirmRemoval) {
      await api.delete(`/dishes/${params.id}`)
      .then(() => {
        alert("Prato removido com sucesso!")
        navigate("/")
      })

    } else {
      return
    }
  }

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleUpdateDish() {
    if(!name || !category || !price || !description || !ingredients) {
      return alert("É necessário preencher a todos os campos")
    }

    const formData = new FormData()

    formData.append("image", imageFile)
    formData.append("name", name)
    formData.append("category", category)
    formData.append("price", price)
    formData.append("description", description)

    ingredients.map(ingredient => (
      formData.append("ingredients", ingredient)
    ))

    await api
      .put(`/dishes/${params.id}`, formData)
      .then(alert("Prato atualizado com sucesso!"), navigate("/"))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)

        } else {
          alert("Erro ao atualizar o prato!")
        }
      }
    )
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)

      setData(response.data)
          
      const { name, category, price, description, ingredients } = response.data

      setName(name)
      setCategory(category)
      setPrice(price)
      setDescription(description)
      setIngredients(ingredients.map(ingredient => ingredient.name))
    }
  
    fetchDish();
  }, [])

  function handleBack() {
    navigate(-1)
  }

  return(
    <Container>

      <Header/>

      <Main>

        <div className="gobackbutton-wrapper">
        
          <FiArrowLeft/>
          <ButtonText title = "Voltar" onClick= {handleBack}/>

        </div>

        <h1>Editar Prato</h1>

      </Main>

      <Content>

        <div className="dish-details">

          <div className="image-wrapper">

            <p>Imagem do prato</p>

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

        </div>

        <div className="ingredients-price">

          <div className="ingredients-wrapper">

            <p>Ingredientes</p>

            <div className="insert-ingredients">

              {
                ingredients.map((ingredient, index) => (
                  <IngredientItem 
                    key={String(index)} 
                    value={ingredient} 
                    onClick={() => handleRemoveIngredient(ingredient) }
                  />
                ))
              }

              <IngredientItem 
                isNew 
                placeholder="Adicionar" 
                value={newIngredient}
                onClick={handleAddIngredient}
                onChange={ev => setNewIngredient(ev.target.value)}
              />

            </div>

          </div>

          <div className="price-wrapper">

            <p>Preço</p>
            <Input 
              placeholder = "R$ 00,00" 
              className = "price"
              type = "number"
              value = {price}
              onChange = {ev => setPrice(ev.target.value)}
            />
            
          </div>

        </div>

        <div className="description-details">

          <div className="description-wrapper">

            <p>Descrição</p>
            <TextArea 
              placeholder = "Descrição do prato"
              className = "description"
              value = {description}
              onChange = {ev => setDescription(ev.target.value)}
            />

          </div>

        </div>

        <div className="buttons-wrapper">

          <Button 
            className = "delete-dish" 
            title = "Excluir prato"
            onClick = {handleRemoveDish}
          />

          <Button 
            className = "save-dish" 
            title = "Salvar alterações"
            onClick = {handleUpdateDish}
          />

        </div>

      </Content>

      <Footer/>

    </Container>
  )
}