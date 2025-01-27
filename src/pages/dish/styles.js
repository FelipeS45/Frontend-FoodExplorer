import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Container = styled.div`
`

export const Main = styled.div`
  padding: 121px;

  .gobackbutton-wrapper {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`

export const BackToHome = styled(Link)`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`

export const Content = styled.div`
  margin-top: 96px;

  display: flex;
  gap: 64px;

  font-family: "Poppins", sans-serif;

  .content-wrapper {
    margin-top: 48px;

    >h1 {
      font-size: 40px;
    }

    >p {
      margin-top: 12px;
      text-align: left;
    }
  }

  .ingredients-wrapper {
    margin-top: 36px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 18px;
  }

  .interactions-wrapper {
    display: flex;
    align-items: center;
    gap: 24px;

    margin-top: 36px;
  }

  .editPlate, .includePlate {
    width: fit-content;
  }

  .customer-only {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .quantity-control {
    display: flex;
    gap: 10px;
    font-size: 24px;
  }

  .quantity-control button {
    background: ${({theme}) => theme.COLORS.DARK_400};
    border: none;

    font-size: 20px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;
  }
`