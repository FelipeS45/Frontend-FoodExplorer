import styled from "styled-components";

export const Container = styled.div`
`

export const Main = styled.div`
  padding: 36px 121px 0 121px;

  .gobackbutton-wrapper {
    display: flex;
    align-items: center;
    gap: 5px;

    margin-bottom: 32px;
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

    .input-wrapper {
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
      max-width: 230px;
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

  .buttons-wrapper {
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