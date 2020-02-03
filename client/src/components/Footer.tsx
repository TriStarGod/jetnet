import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { routes } from "../constants";

const Footer: React.FC = () => {
  const { push } = useHistory();

  return (
    <Wrapper>
      <div>
        <FooterLogo onClick={() => push(routes.Landing)}>JETNET</FooterLogo>
        <FooterCopyright>2020 © All rights reserved</FooterCopyright>
      </div>
      <FooterLinks>
        <FooterColumn>
          <FooterColumnHeader>About</FooterColumnHeader>
          <FooterColumnItem>About the company</FooterColumnItem>
          <FooterColumnItem>Blog</FooterColumnItem>
          <FooterColumnItem>Sitemap</FooterColumnItem>
        </FooterColumn>
        <FooterColumn>
          <FooterColumnHeader>Company</FooterColumnHeader>
          <FooterColumnItem>Security & Privacy</FooterColumnItem>
          <FooterColumnItem>Careers</FooterColumnItem>
          <FooterColumnItem>Affiliates</FooterColumnItem>
        </FooterColumn>
        <FooterColumn>
          <FooterColumnHeader>Help</FooterColumnHeader>
          <FooterColumnItem>Get Started</FooterColumnItem>
          <FooterColumnItem>Contact Us</FooterColumnItem>
          <FooterColumnItem>Customer Service</FooterColumnItem>
        </FooterColumn>
      </FooterLinks>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-evenly;

  padding: 6rem 0 4rem 0;

  & > div:first-child {
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const FooterLogo = styled.h1`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2.3rem;
  letter-spacing: 2px;
`;

const FooterCopyright = styled.p`
  color: rgba(0, 0, 0, 0.7);
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-evenly;

  & > *:not(:last-child) {
    margin-right: 15rem;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  & > *:first-child {
    margin-bottom: 2rem;
  }
`;

const FooterColumnHeader = styled.h2`
  text-transform: uppercase;
  font-size: 1.8rem;
`;

const FooterColumnItem = styled.p`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;

export default Footer;
