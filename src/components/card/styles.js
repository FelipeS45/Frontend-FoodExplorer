import styled from "styled-components"

import { Link } from 'react-router-dom';

export const Container = styled.div`

  height: 422px;
  width: 304px;

  margin: 100px 0;
  padding: 24px;

  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.COLORS.DARK_300};

  background: ${({theme}) => theme.COLORS.DARK_200};

  .icons-wrapper {
    display: flex;
    margin-bottom: 12px;
    margin-left: 38px;

    .favorites-wrapper button {
      font-size: 28px;

      background: ${({theme}) => theme.COLORS.DARK_200};
      color: ${({theme}) => theme.COLORS.LIGHT_400};

      border: none;
    }
  }

  img {
    width: 170px;
    height: 170px;
    justify-content: center;
  }

  .header-wrapper {
    margin: 15px 0;
    text-align: center;

    p {
      margin-top: 15px;
    }
  }

  .footer-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 36px;
  }  

  .quantity-control{
    display: flex;
    gap: 10px;

    font-size: 24px;
  }

  .quantity-control button{
    background: ${({theme}) => theme.COLORS.DARK_200};

    font-size: 24px;
    color: ${({theme}) => theme.COLORS.LIGHT_400};

    border: none;
  }
`

export const DishView = styled(Link)``

export const ButtonToEditDish = styled(Link)`
  font-size: 28px;
  color: ${({theme}) => theme.COLORS.LIGHT_400};
`

