import styled from "styled-components";

export const Container = styled.button`
  background: none;

  display: flex;
  align-items: center;

  font-size: 20px;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  
  border: none;
`