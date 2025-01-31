import { Container, Main, Content } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { Ingredients } from "../../components/ingredients";
import { ButtonText } from "../../components/buttonText";

import { FiArrowLeft, FiMinus, FiPlus } from "react-icons/fi";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";

export function Dish() {

  const params = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState(null)
  const [quantity, setQuantity] = useState(1) // Estado para a quantidade

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`)
        setData(response.data)
      } catch (error) {
        console.error("Erro ao buscar prato:", error)
      }
    }
    fetchDish();
  }, [params.id])

  const dishImageURL = data ? `${api.defaults.baseURL}/files/${data.image}` : ""

  function editDish() {
    navigate(`/editdish/${data.id}`)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>

      <Header />

      <Main>

        <div className="gobackbutton-wrapper">
          <FiArrowLeft/>
          <ButtonText title = "Voltar" onClick = {handleBack}/>
        </div>

        <Content>

          <div className="plateimg-wrapper">
            <img src={dishImageURL} alt="Imagem do prato escolhido" />
          </div>

          <div className="content-wrapper">

            <h1>{data?.name}</h1>
            <p>{data?.description}</p>

            <div className="ingredients-wrapper">
              
              {
                data?.ingredients?.map((ingredient) => (
                  <Ingredients 
                    key={String(ingredient.id)} 
                    name={ingredient.name} 
                  />
                ))
              }

            </div>

            <div className="interactions-wrapper">

              <div className="admin-only">
                <Button title="Editar prato" onClick={editDish} />
              </div>

            </div>

          </div>

        </Content>

      </Main>

      <Footer />
      
    </Container>
  );
}
