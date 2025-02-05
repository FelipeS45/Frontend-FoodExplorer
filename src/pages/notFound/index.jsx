import { Container } from "./styles";

import { Link } from "react-router-dom";

import { Footer } from "../../components/footer";

export function NotFound() {
  return (
    <Container>

      <h1>Página indisponível</h1>
      <Link to = "/">Clique aqui para voltar ao início</Link>

      <Footer/>

    </Container>
  )
}