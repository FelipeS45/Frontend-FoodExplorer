import { styled, keyframes } from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  max-width: 1320px;

  margin: auto;

  padding: 100px;

  animation: ${appear} 1s ease-out;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 5rem;

    flex-direction: column;
    padding: 3rem;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 1.9rem;
  }

  svg {
    height: 4.94rem;
    width: 4.75rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    svg {
      height: 3.5rem;
      width: 3.5rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 47.6rem;
  max-width: 90%;

  padding: 6.4rem;
  
  border-radius: 1.6rem;
  background: ${({ theme }) => theme.COLORS.DARK_700};

  .input {
    margin-bottom: 32px;
    width: 100%;
  }

  h2 {
    font-size: 3.2rem;
    margin: 48px 0px;
    text-align: center;
  }

  a {
    margin-top: 48px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;
  }

  .signin {
    width: 100%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
    padding: 4rem;
    margin-top: 48px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 3rem;
  }
`;