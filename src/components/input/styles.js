import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: 100%;

    border-radius: 5px;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    input {
      width: 100%;
      height: 4.8rem;

      padding: 1.6rem 1.4rem;

      border-radius: 5px;
      border: none;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background: transparent;

      &:placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
    
    > svg {
        margin-left: 1.4rem;
    }
`;