import { useEffect, useRef } from "react";
import React from "react";
import { ContainerSocialMedia, IconWrapper } from "./styles";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import gsap from 'gsap';

const SocialMedia: React.FC = () => {
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])

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
    <ContainerSocialMedia>
      <IconWrapper href="https://www.facebook.com/floradabrecho/" target="_blank" ref={(el) => (linkRefs.current[0] = el)}>
        <FaFacebook size={25} />
      </IconWrapper>
      <IconWrapper href="https://wa.me/123456789" target="_blank" ref={(el) => (linkRefs.current[1] = el)}>
        <FaWhatsapp size={25} />
      </IconWrapper>
      <IconWrapper href="https://www.instagram.com/floradabrecho/" target="_blank" ref={(el) => (linkRefs.current[2] = el)}>
        <FaInstagram size={25} />
      </IconWrapper>
    </ContainerSocialMedia>
  );
};

export default SocialMedia;
