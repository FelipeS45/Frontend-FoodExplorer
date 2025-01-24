import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 3.2rem;

    border-radius: 5px;    
    border: none;
    
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    background-color: ${({ theme }) => theme.COLORS.RED_100};
`;