import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  grid-area: header;

  padding: 24px 72px;

  max-width: 100vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;

  background-color: ${({theme}) => theme.COLORS.DARK_600};

  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  svg {
    height: 3rem;
    width: 3rem;
  }

  h1 {
    font-size: 2.4rem;
  }

  button {
    background: none;
    border: none;

    margin-top: 8px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 24px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 18px 6px;

    display: flex;
    align-items: center;
    gap: 2px;
  }
`

export const ProfileView = styled(Link)`
  display: flex;
  gap: 12px;

  >img{
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }
`