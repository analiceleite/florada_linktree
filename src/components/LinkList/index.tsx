import { ContainerList, Link } from './styles';
import { FaWhatsapp, FaUserFriends, FaChild, FaShoppingBag } from 'react-icons/fa';

const LinkTree = () => {
    return (
        <ContainerList>
            <Link href="https://api.whatsapp.com/send?phone=seu_numero" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                Fale Conosco
            </Link>
            <Link href="https://link-para-o-grupo-adulto" target="_blank" rel="noopener noreferrer">
                <FaUserFriends size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                WhatsApp - Grupo Adulto
            </Link>
            <Link href="https://link-para-o-grupo-infantil" target="_blank" rel="noopener noreferrer">
                <div>
                    <FaChild size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                    WhatsApp - Grupo Infantil
                </div>
            </Link>
            <Link href="https://link-para-comprar-pecas" target="_blank" rel="noopener noreferrer">
                <FaShoppingBag size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                Compramos suas peças
            </Link>
        </ContainerList>
    );
};

export default LinkTree;
