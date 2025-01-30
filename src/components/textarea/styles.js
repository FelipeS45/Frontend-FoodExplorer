import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 162px;
  padding: 14px;

  border-radius: 5px;
  border: none; 
    
  resize: none;
    
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;