import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;

  overflow-x: hidden;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "Header"
    "Banner"
    "Cards"
    "Footer";

  color: ${({theme}) => theme.COLORS.LIGHT_400};

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme}) => theme.COLORS.DARK_100};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.COLORS.LIGHT_400};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme}) => theme.COLORS.LIGHT_300};
  }
`

export const Cards = styled.div`
  margin-top: -142px;

  grid-area: "Cards";

  .cards-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 123px;
    gap: 32px;

    .meals, .desserts, .drinks {
      flex-wrap: wrap; // VER DEPOIS ******
      display: flex;
      align-items: center;
      gap: 32px;

      margin: -92px 0 -50px 0;
    } 
  }
`



