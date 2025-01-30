import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
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