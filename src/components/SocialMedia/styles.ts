import styled from "styled-components";
import { colors } from "../../style";

export const ContainerSocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`

export const IconWrapper = styled.a`
    color: ${colors.card};
    margin-right: 15px;

    &:last-child {
        margin-right: 0;
    }
`;
