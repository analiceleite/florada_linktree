import { HeroContainer, LogoImage } from './styles';
import Logo from '../../assets/hero.jpg';
import Description from '../Description';

const Hero = () => {
    return (
        <>
            <HeroContainer>
                <LogoImage src={Logo} alt="Logo Image" />
            </HeroContainer>
            <Description />
        </>
    );
};

export default Hero;
