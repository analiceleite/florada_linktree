import { FooterContainer, Copyright } from './styles'

const Footer = () => {
    return (
        <FooterContainer>
            <Copyright>© {new Date().getFullYear()} Florada Brechó - Todos os direitos reservados.</Copyright>
        </FooterContainer>
    );
}

export default Footer