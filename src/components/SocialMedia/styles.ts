import styled from "styled-components";
import { colors } from "../../style";

export const ContainerSocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const IconWrapper = styled.a`
    color: ${colors.card};
    margin-right: 15px;
    transition: background-color 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        transform: scale(1.1); 
    }
`;
