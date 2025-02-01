import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  max-width: 100vw;
  padding: 24px 123px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;

  width: 100%;

  color: ${({theme}) => theme.COLORS.LIGHT_700};
  background-color: ${({theme}) => theme.COLORS.DARK_600};

  position: fixed;
  z-index: 1; 

  bottom: 0;

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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 18px 50px;
  }
`;
