import { Container } from "./styles";

export function ButtonText({ icon: Icon, title, onClick, ...rest }) {
  return (
    <Container type="button" onClick={onClick} {...rest}>

      {Icon && <Icon size={20} />}
      {title}

    </Container>
  )
}
