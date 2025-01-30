import styled from "styled-components"

import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 452px;
  width: 304px;

  padding: 24px;

  margin-bottom: 72px;

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

  .content-wrapper {
    margin: 15px 0;
    text-align: center;

    p {
      margin-top: 15px;
    }

    h2 {
      margin-top: 15px;

      color: ${({theme}) => theme.COLORS.BLUE_200};
    }
  }

  .footer-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    margin-top: 24px;
  }  

  .quantity-control {
    display: flex;
    flex-direction: row;
    gap: 5px;

    font-size: 24px;

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background: ${({theme}) => theme.COLORS.DARK_200};

    button {
    background: ${({theme}) => theme.COLORS.DARK_400};
    border: none;

    font-size: 20px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;
    }
  }
`

export const DishView = styled(Link)``

export const ButtonToEditDish = styled(Link)`
  font-size: 28px;
  color: ${({theme}) => theme.COLORS.LIGHT_400};
`

