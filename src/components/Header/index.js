import React, { useState, useEffect } from "react";
import Link from "next/link";

import styled from "styled-components";

import Logo from "../Logo";
import Menu from "../Menu";
import SocialMediaMenu from "../SocialMediaMenu";
import { HamburguerMenu } from "../Button";

const WrapperHeader = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .navbar-toggler,
  .socialMediaMobile {
    display: none;
    visibility: hidden;
  }
  @media screen and (max-width: 1001px) {
    .navbar-toggler {
      display: block;
      visibility: visible;
    }
    .social-menu {
      display: none;
      visibility: hidden;
    }
    .main-nav {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 99;
      background: white;
      min-height: 100vh;
      padding: 3rem;
      transition: 300ms transform ease-in-out, 300ms opacity ease-in-out;
      transform: translate3d(100%, 0, 0);
      opacity: 0;
      &.is-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      .main-nav--inner {
        display: flex;
        flex-direction: column;
        height: inherit;
        min-width: 256px;
      }
      .nav-submenu--wrapper__header .nav-submenu--inner {
        position: relative;
        transform: none;
        width: 100%;
        top: auto;
        left: auto;
      }
      .nav-submenu {
        flex-direction: column;
      }
      ul {
        flex-direction: column;
      }
      .socialMediaMobile {
        display: flex;
        visibility: visible;
        margin-top: auto;
        .social-menu {
          display: flex;
          visibility: visible;
        }
        ul {
          flex-direction: row;
        }
      }
    }
    .nav-link.nav-link--internal {
      width: 224px;
      padding: 1.5rem 1rem;
      h4 {
        font-size: 2rem;
        margin: 0;
      }
      strong {
        white-space: initial;
      }
      p {
        display: none;
      }
    }
  }
`;

const Header = ({ activePage }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    console.log(mobileMenu);
  }, [mobileMenu]);
  return (
    <WrapperHeader>
      <div className="page-wrapper header-wrapper">
        <Link className="nav-home" href="/">
          <Logo />
        </Link>
        <Menu
          handleMobileMenu={mobileMenu}
          activePage={activePage}
          menuPosition="header"
        />
        <SocialMediaMenu />
        <HamburguerMenu onClick={() => setMobileMenu((prev) => !prev)} />
      </div>
    </WrapperHeader>
  );
};

export default Header;
