import styled from "styled-components";
import { colors } from "../../style";

export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h2`
    margin-top: 15px;
    font-size: 18px;
    color: ${colors.white};

    // Responsivo para mobile
    @media (max-width: 768px) {
        font-size: 16px;  em telas menores
        margin-top: 10px; 
    }

    @media (max-width: 480px) {
        font-size: 14px;
        margin-top: 8px;
    }
`;

export const SubTitle = styled.p`
    margin-top: 5px;
    font-size: 16px;
    color: ${colors.white};

    // Responsivo para mobile
    @media (max-width: 768px) {
        font-size: 14px; 
        margin-top: 4px; 
    }

    @media (max-width: 480px) {
        font-size: 12px;
        margin-top: 3px;
    }
`;
