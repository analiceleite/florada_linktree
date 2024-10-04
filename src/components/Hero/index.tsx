import { HeroContainer } from './styles'
import { FaShoppingBag } from 'react-icons/fa';

import Description from '../Description';


const Hero = () => {
    return (
        <>
            <HeroContainer>
                <FaShoppingBag />
            </HeroContainer>
            <Description />
        </>
    )
}

export default Hero