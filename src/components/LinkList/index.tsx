import { useEffect, useRef } from 'react';
import { ContainerList, Link } from './styles';
import { FaWhatsapp, FaUserFriends, FaChild, FaShoppingBag } from 'react-icons/fa';
import gsap from 'gsap';

const LinkTree = () => {
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        if (linkRefs.current) {
            // Verifica se os elementos estão acessíveis e aplica a animação
            gsap.set(linkRefs.current, { opacity: 0, y: 50 }); // Inicializa com a opacidade zerada e deslocados
            gsap.to(linkRefs.current, {
                opacity: 1,
                y: 0,
                duration: 1, // Duração de 1 segundo para a animação completa
                stagger: 0.2, // Aplica o efeito de atraso entre os elementos
                ease: 'power3.out',
            });
        }
    }, []);

    return (
        <ContainerList>
            <Link href="https://chat.whatsapp.com/H0IrDr0YehhBI2mT1h1eSp?mode=gi_t" target="_blank" ref={(el) => (linkRefs.current[1] = el)}>
                <FaUserFriends size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                Grupo Bazar
            </Link>
            <Link href="https://chat.whatsapp.com/Fqy64P1iC5l2PPnKnDGRJM?mode=gi_t" target="_blank" ref={(el) => (linkRefs.current[2] = el)}>
                <div>
                    <FaChild size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                    Grupo Infantil
                </div>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=554733078069" target="_blank" ref={(el) => (linkRefs.current[0] = el)}>
                <FaWhatsapp size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                Fale Conosco
            </Link>
            {/*             <Link href="https://link-para-comprar-pecas" target="_blank" ref={(el) => (linkRefs.current[3] = el)}>
                <FaShoppingBag size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                Venda Suas Peças
            </Link> */}
        </ContainerList>
    );
};

export default LinkTree;
