import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Container = styled.div`
`

export const Main = styled.div`
  padding: 24px 121px 0 121px;

  .gobackbutton-wrapper {
    display: flex;
    align-items: center;
    gap: 5px;

    margin-bottom: 32px;
  }
`

export const BackToHome = styled(Link)`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`

export const Image = styled.div`

  .image-upload {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 14px;
    border-radius: 5px; /* Arredonda as bordas */
  }

  .upload-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 16px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 5px;
    cursor: pointer;
  }

  .upload-button:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .image-upload input {
    display: none;
  }
`

export const Content = styled.div`
  padding: 0 121px 121px;

  .dish-details {
    display: flex;
    align-items: center;
    gap: 32px;

    .image-wrapper {
      max-width: 230px;
    }

    .inputimage-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;

      padding: 12px 24px;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};

      border: none;
      border-radius: 5px;

      button{
        font-size: 14px;
      }
    }

    .name-wrapper {
      flex: 1;
    }

    .category-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 12px 14px;

      border-radius: 5px; 
    }

    .category-wrapper p {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .category-wrapper select {
      display: flex;
      gap: 8px;

      padding: 14px 18px;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};

      border: none;
      border-radius: 5px;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      cursor: pointer;
      font-size: 16px;
    }

    .category-wrapper select:hover {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }

  .ingredients-price {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .ingredients-wrapper {
    flex: 1;

    .insert-ingredients {
      flex-wrap: wrap;

      max-width: 1460px;

      border: none;
      border-radius: 5px;

      padding: 8px;

      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;

      background-color: ${({ theme }) => theme.COLORS.DARK_900}
    }
  }

  .price-wrapper {
    max-width: 240px;
  }

  .description-details {
    .description {
      min-height: 220px;
      max-height: 240px;
      overflow-y: scroll;
    }
  }

  .dish-details p, .ingredients-price p, .description-details p {
    margin: 32px 0 14px 0;
  }

  .button-wrapper {
    margin-top: 32px;

    display: flex;
    align-items: center;
    gap: 24px;

    button {
      max-width: 210px;
    }

    .delete-dish {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
    }
  }
`