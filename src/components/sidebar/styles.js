import styled from "styled-components";

import { Link } from 'react-router-dom';

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
  grid-area: sidebar;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 38px;
  padding: 36px 12px;

  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  button {
    border: none;
    background: none;

    margin-top: 10px;

    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const NewDishButton = styled(Link)`
  padding: 24px 0;

  width: 280px;
  height: 72px;

  background: ${({ theme }) => theme.COLORS.RED_100};

  font-size: 18px;
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`