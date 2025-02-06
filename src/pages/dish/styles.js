import styled from "styled-components";

import { Link } from 'react-router-dom';

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div``;

export const Main = styled.div`
  padding: 121px;

  .gobackbutton-wrapper {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 50px;

    margin-bottom: 96px;

    .plateimg-wrapper img {
      width: 250px;
      height: 250px;

      margin: auto;
    }
    
    .screen-wrapper {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const BackToHome = styled(Link)`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;

export const Content = styled.div`
  margin-top: 96px;

  display: grid;
  place-items: center;

  font-family: "Poppins", sans-serif;

  .screen-wrapper {
    display: flex;
    gap: 56px;
  }

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
    display: flex; 
    flex-wrap: wrap; 
    gap: 10px;

    padding: 12px 16px;

    margin-top: 24px;
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
`;