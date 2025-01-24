import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "Header"
    "Main"
    "Footer";

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
`

export const Main = styled.div`
  display: grid;
  grid-template-rows: 406px auto;
`

export const Banner = styled.div`

  padding: 0 12rem;

  .banner-wrapper {
    height: 28rem;

    margin-top: 16rem;
    padding-right: 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: var(--Gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
  } 

  img {
    z-index: 1; 

    margin-top: -130px;
    margin-left: -68px;

    height: 416px;
    width: 632px;
  }

  .title {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    text-align: center;
  }
`
