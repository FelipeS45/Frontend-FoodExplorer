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

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
`

export const Banner = styled.div`
 
`

export const Cards = styled.div`
  margin-top: -232px;

  grid-area: "Cards";

  .cards-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 123px;
    gap: 32px;

    h1:first-child {
    }

    .meals, .desserts, .drinks {
      display: flex;
      align-items: center;
      gap: 32px;

      margin: -92px 0 -50px 0;
    } 
  }
`



