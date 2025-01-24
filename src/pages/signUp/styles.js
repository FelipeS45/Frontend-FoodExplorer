import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  max-width: 132rem;
  
  margin: auto;
  padding: 10rem;
`

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

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
    
  width: 47.6rem;
  height: 62.1rem;
    
  padding: 6.4rem;
  border-radius: 1.6rem;

  background: ${({theme}) => theme.COLORS.DARK_700};

  .input {
    margin-bottom: 32px;
  }

  >h2 {
    font-size: 3.2rem;
    margin: 48px 0px;
    text-align: center;
  }

  >a {
    margin-top: 48px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    text-align: center;
  }
`
