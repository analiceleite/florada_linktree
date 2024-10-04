import styled from "styled-components";
import { colors } from "../../style";

export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h2`
    margin-top: 15px;
    font-size: 18px;
    color: ${colors.white};
`

export const SubTitle = styled.p`
    margin-top: 5px;
    font-size: 16px;
    color: ${colors.white};
`