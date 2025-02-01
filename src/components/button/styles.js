import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.button`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  padding: 12px 32px;

  border-radius: 5px;    
  border: none;
    
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  background-color: ${({ theme }) => theme.COLORS.RED_100};
`;