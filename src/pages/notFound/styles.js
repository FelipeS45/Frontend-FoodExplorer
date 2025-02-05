import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: grid;
  place-content: center;

  h1 {
    font-size: 42px;
  }
  
  a {
    font-size: 24px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    margin-top: 24px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    h1 {
      font-size: 36px;
    }

    a {
      font-size: 18px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    h1 {
      font-size: 28px;
    }

    a {
      font-size: 16px;
    }
  }
`;