import styled from "styled-components";
import { colors } from "../../style";

export const ContainerList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;  
    width: 40vw;

    @media (max-width: 768px) {
        width: 80vw; 
        padding: 15px; 
    }

    @media (max-width: 480px) {
        width: 90vw; 
        padding: 10px; 
    }
`;

export const Link = styled.a`
    background-color: ${colors.card};  
    color: ${colors.secondary};          
    text-decoration: none;     
    padding: 15px 25px;         
    border-radius: 8px;     
    width: 100%;  
    margin: 10px 0;       
    font-size: 14px;       
    text-align: center; 
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: ${colors.secondary};
        color: ${colors.card};
    }
`;
