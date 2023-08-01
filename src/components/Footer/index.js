import React from "react";
import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";

import Menu from "../Menu";
import Logo from "../Logo";

import SocialMediaMenu from "../SocialMediaMenu";

import footerDividerImage from "../../../public/images/divider-footer.png";
import footerBackgroundImage from "../../../public/images/plant-shadow--footer.png";
import StampApproval from "../../../public/images/selo-lapis-de-noiva.png";

const FooterWrapper = styled.footer`
  background-color: rgb(var(--nudge));
  background-image: url(${footerBackgroundImage.src});
  background-position: bottom right;
  background-repeat: no-repeat;
  padding: 6rem 0;
  .page-wrapper {
    padding-top: 4rem;
    background-image: url(${footerDividerImage.src});
    background-position: top center;
    background-repeat: no-repeat;
  }
  .social-footer,
  .menu-footer,
  .logo-footer,
  .copyright {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
  }
  .logo-footer {
    padding: 2rem 0;
    margin-top: 3rem;
  }
  .copyright {
    .copyright--inner {
      font-family: var(--font-geomanist);
      color: rgb(var(--primary-200));
      font-size: 0.75rem;
      display: flex;
      justify-content: center;
      grid-gap: 1rem;
      font-weight: 300;
    }
  }
  .legal-menu {
    color: rgb(var(--primary-200));
    a {
      color: rgb(var(--blue-300));
      &:hover {
        color: rgb(var(--teal));
      }
    }
  }
  .main-nav--inner ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 767px) {
    .copyright--inner {
      flex-direction: column;
      text-align: center;
    }
  }
  .stampApproval {
    display: flex;
    align-items: center;
    grid-gap: 8px;
    max-width: 302px;
    justify-content: center;
    margin: auto;
    .stampApproval-text {
      font-family: var(--font-geomanist);
      font-size: 0.8rem;
      font-weight: 300;
      span {
        display: block;
        font-size: 0.75rem;
        font-weight: 500;
        margin-top: 1rem;
      }
    }
  }
`;

const Footer = () => {
  const actualYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <div className="page-wrapper">
        <div className="stampApproval">
          <div className="stampApproval-text">
            Selecionado e aprovado por Lápis de Noiva
            <span>#GenteQueAmaOQueFaz</span>
          </div>
          <div className="stampApproval-image">
            <Link href="https://lapisdenoiva.com/fornecedores/a-la-massita/">
              <Image
                src={StampApproval.src}
                alt="Selecionado e aprovado por Lápis de Noiva"
                width={140}
                height={140}
                quality="100"
              />
            </Link>
          </div>
        </div>
        <div className="menu-footer">
          <Menu menuPosition="footer" />
        </div>
        <div className="social-footer">
          <SocialMediaMenu menuPosition="footer" />
        </div>
        <div className="logo-footer">
          <Logo />
        </div>
        <div className="copyright">
          <div className="copyright--inner">
            À La Massita © {actualYear} - Todos os direitos reservados{" "}
            <div className="legal-menu">
              <Link className="nav-link" href="/politica-privacidade">
                Política de privacidade
              </Link>{" "}
              |{" "}
              <Link className="nav-link" href="/politica-de-cookies">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
