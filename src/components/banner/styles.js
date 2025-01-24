import styled from "styled-components";

export const Container = styled.div`
  grid-area: "Banner";
  padding: 0 12rem;

  max-width: 100vw;

  .banner-wrapper {
    height: 28rem;
    margin-top: 16rem;
    padding-right: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 12px;
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