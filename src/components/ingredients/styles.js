import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  padding: 5px 10px;

  background: ${({theme}) => theme.COLORS.DARK_1000};

  border: none;
  border-radius: 5px;
`;