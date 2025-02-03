import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  min-width: 320px;
  height: 100vh;   
  min-height: 100%;
`

export const Main = styled.div`
  padding: 48px 121px 0 121px;

  .gobackbutton-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;

    margin-bottom: 32px;
  }

  .header-wrapper {
    margin-bottom: 24px;
  }

  .save-dish {
    margin-top: 24px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 24px 32px 96px 32px;

    .save-dish {
      width: 100%;
    }
  }
`

export const Form = styled.div`
  display: grid;
  grid-template-areas: 
  "image name category"
  "ingredients ingredients price"
  "description description description";

  grid-template-columns: 320px auto 320px;

  align-items: center;
  gap: 32px;

  .image-wrapper, .name-wrapper, .category-wrapper, .ingredients-wrapper, .price-wrapper, .description-wrapper {
    p {
      margin-bottom: 10px;
    }
  }

  .image-wrapper {
    grid-area: image;
  }

  .name-wrapper {
    grid-area: name;

    flex-wrap: wrap;
  }

  .category-wrapper {
    grid-area: category;


    p {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    select {
      width: 100%;

      padding: 14px 18px;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};

      border: none;
      border-radius: 5px;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      cursor: pointer;
      font-size: 16px;
    }
  }

  .ingredients-wrapper {
    grid-area: ingredients;

    .insert-ingredients {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 12px;
      flex-wrap: wrap;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};

      border: none;
      border-radius: 5px;

      padding: 6px 12px;
    }
  }

  .price-wrapper {
    grid-area: price;
  }

  .description-wrapper {
    grid-area: description;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .image-wrapper, .name-wrapper, .category-wrapper, .ingredients-wrapper, .price-wrapper, .description-wrapper {
      width: 100%;
    }
  }
`

export const Image = styled.div`
  .upload-button {
    display: flex;
    align-items: center;
    gap: 8px;

    max-width: 320px;

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