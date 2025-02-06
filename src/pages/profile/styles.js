import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  margin: auto;
  width: 100%;
  max-width: 600px;
  background: ${({ theme }) => theme.COLORS.DARK_400};
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 4rem;
    margin-bottom: 120px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 2rem;
    margin-bottom: 120px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
  margin: 120px 0;

  padding: 5rem;

  border: none;
  border-radius: 5px;

  background: ${({ theme }) => theme.COLORS.DARK_700};

  > div:nth-child(2) {
    margin-top: 72px;
  }

  .buttons-wrapper {
    margin-top: 24px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    .signout {
      margin-top: 48px;
    }
  }

  .inputs-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 4rem;

  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 32px;
  width: 186px;
  height: 186px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -15px;
    right: -15px;
    cursor: pointer;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 40px;
      height: 40px;
      bottom: -5px;
      right: -10px;
    }

    > input {
      display: none;
    }

    svg {
      width: 32px;
      height: 32px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;