import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ menuIsOpen }) => (menuIsOpen ? '280px' : '0')} auto;
  grid-template-areas:
    "sidebar header"
    "sidebar banner"
    "sidebar content"
    "sidebar footer";

  max-width: 100vw;
  height: 100vh;

  overflow-x: hidden;
  overflow-y: auto;  
  box-sizing: border-box;

  .banner-wrapper {
    padding: 48px 64px;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.DARK_100};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.LIGHT_400};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .banner-wrapper {
      padding: 32px 20px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .banner-wrapper {
      padding: 32px 14px;
    }
  }
`;

export const Banner = styled.div`
  grid-area: banner;

  margin-top: 24px;

  padding: 32px 50px;

  display: flex;
  justify-content: space-between;

  position: relative;

  background: var(--Gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));

  border: none;
  border-radius: 8px;

  height: 290px;
  max-width: 100%;
  
  h1 {
    font-size: 42px;
    font-weight: 500;
    text-align: center;
    margin-top: 64px;
    margin-bottom: 8px;
  }

  p {
    text-align: center;
    margin-top: 16px;
  }

  img {
    max-width: 100%;
    height: auto;
    z-index: -1;
    margin-left: -108px;
    margin-top: -79px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 314px;

    display: flex;
    flex-direction: row;

    padding: 32px 10px 0 0;

    .title-wrapper {
      h1 {
        font-size: 26px;
      }

      p {
        font-size: 14px;
      }
    }

    img {
      width: 100%;
      height: 360px;

      margin-left: -16px;
      margin-top: -79px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .title-wrapper {
        h1 {
        font-size: 36px;
      }

      p {
        font-size: 16px;
      }
    }

    img {
      width: 100%;
      height: 335px;

      margin-left: -96px;
      margin-top: -79px;
    }
  }
`;

export const Content = styled.div`
  grid-area: content;
  max-width: 100vw;

  .cards-wrapper {
    padding: 12px 72px 72px 72px;
    .section-dishes, .section-desserts, .section-drinks {
      font-size: 42px;
      margin-bottom: 32px;
    }
  }

  .swiper-button-next, .swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 14px;
    height: 14px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .cards-wrapper {
      padding: 32px;

      .section-dishes, .section-desserts, .section-drinks {
        font-size: 28px;
        margin-bottom: 24px;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .cards-wrapper {
      padding: 12px;

      .section-dishes, .section-desserts, .section-drinks {
        font-size: 24px;
        margin-bottom: 18px;
      }
    }
  }
`;
