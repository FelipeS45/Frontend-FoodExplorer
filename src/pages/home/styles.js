import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  width: 100vw;

  overflow-x: hidden;
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

  color: ${({theme}) => theme.COLORS.LIGHT_400};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 48px;
`

export const Cards = styled.div`
  margin-top: 54px;

  padding: 0px 120px;

  .section-dishes, .section-desserts, .section-drinks {
    margin-bottom: 32px;

    font-size: 42px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
  }

  .dishes-wrapper, .desserts-wrapper, .drinks-wrapper {
    display: flex;
    align-items: center;
    gap: 32px;
    flex-wrap: wrap;
    place-content: center;
  }
`

export const Header = styled.div`
padding: 24px 123px;

max-width: 100vw;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 3.2rem;

background-color: ${({theme}) => theme.COLORS.DARK_600};

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 1.9rem;
}

svg {
  height: 3rem;
  width: 3rem;
}

h1 {
  font-size: 2.4rem;
}

button {
  width: 216px;
  height: 56px;
}

`


export const NewDishButton = styled(Link)`
  display: flex;
  align-items: center;

  white-space: nowrap;

  min-height: 55px;
  padding: 12px 32px;

  border-radius: 5px;    
  border: none;
    
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  background-color: ${({ theme }) => theme.COLORS.RED_100};
`

export const ProfileView = styled(Link)`
  >img{
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }

`


