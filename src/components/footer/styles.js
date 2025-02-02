import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  grid-area: footer;

  max-width: 100vw;
  padding: 24px 48px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({theme}) => theme.COLORS.LIGHT_700};
  background-color: ${({theme}) => theme.COLORS.DARK_600};

  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;

  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  svg {
    height: 3rem;
    width: 3rem;
  }

  h1 {
    font-size: 2.4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 18px 24px;

    .logo-wrapper {
      gap: 8px;

      h1 {
        font-size: 18px;
      }
    }

    p {
      text-align: center;
      font-size: 12px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 18px;
  }
`;
