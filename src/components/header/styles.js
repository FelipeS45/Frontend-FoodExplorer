import styled from 'styled-components';

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

export const Profile = styled.div`
  >img{
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }

`