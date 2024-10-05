import React from "react";
import { ContainerSocialMedia, IconWrapper } from "./styles";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const SocialMedia: React.FC = () => {
  return (
    <ContainerSocialMedia>
      <IconWrapper href="https://www.facebook.com/floradabrecho/" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={25} />
      </IconWrapper>
      <IconWrapper href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={25} />
      </IconWrapper>
      <IconWrapper href="https://www.instagram.com/floradabrecho/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={25} />
      </IconWrapper>
    </ContainerSocialMedia>
  );
};

export default SocialMedia;
