import React from "react";
import Link from "next/link";

import styled from "styled-components";

import Menu from "../Menu";
import Logo from "../Logo";

import SocialMediaMenu from "../SocialMediaMenu";

import footerDividerImage from "../../../public/images/divider-footer.png";
import footerBackgroundImage from "../../../public/images/plant-shadow--footer.png";

const FooterWrapper = styled.footer`
  background-color: rgb(var(--nudge));
  background-image: url(${footerBackgroundImage.src});
  background-position: top right;
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
`;

const Footer = () => {
  const actualYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <div className="page-wrapper">
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
