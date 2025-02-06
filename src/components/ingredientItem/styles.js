import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.LIGHT_600};

  color: ${({theme}) => theme.COLORS.LIGHT_100};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  padding-right: 16px;

  border-radius: 5px;

  >button {
    display: flex;
    border: none;
    background: none;
  }

  .button-add {
    font-size: 18px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  .button-delete {
    font-size: 18px;
    color: ${({theme}) => theme.COLORS.RED_100};
  }

  >input {
    font-size: 14px;
    padding: 8px;
    border: none;

    color: ${({theme}) => theme.COLORS.LIGHT_100};

    background: transparent;

    &::placeholder{
      color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
  }
`;