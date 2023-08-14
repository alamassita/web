import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import styled from "styled-components";

import Logo from "../Logo";
import Menu from "../Menu";
import SocialMediaMenu from "../SocialMediaMenu";
import { HamburguerMenu, CloseButton } from "../Button";

import Portal from "../../HOC/Portal";
import Backdrop from "../Backdrop";

import { AnimatePresence } from "framer-motion";

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
  .close-button {
    background-color: rgb(var(--gray-100));
    color: rgb(var(--gray-700));
  }
  .closeButtonWrapper {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 1rem;
    margin-right: -2rem;
    .close-button:hover {
      cursor: pointer;
    }
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
    .menuWrapper {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 99;
      background: white;
      min-height: 100vh;
      padding: 1rem 3rem 3rem 3rem;
      transition: 300ms transform ease-in-out, 300ms opacity ease-in-out;
      transform: translate3d(100%, 0, 0);
      opacity: 0;
      // visibility: hidden;
      &.is-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        visibility: visible;
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
        margin-top: 3rem;
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

const Header = ({ activePage, pageType }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const clickMenuChecker = useRef(null);
  const close = useRef(null);

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!mobileMenu) return;
    function handleClick(event) {
      console.log(event);
      const item = event.target.className;
      if (typeof item === "string") {
        if (item.includes("Backdrop") || close.current.contains(event.target)) {
          setMobileMenu(false);
        }
      } else {
        if (close.current.contains(event.target)) {
          setMobileMenu(false);
        }
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [mobileMenu]);

  return (
    <WrapperHeader>
      <div className="page-wrapper header-wrapper">
        <Link className="nav-home" href="/">
          <Logo />
        </Link>
        <div
          className={`menuWrapper ${mobileMenu ? "is-active" : ""}`}
          ref={clickMenuChecker}
        >
          {mobileMenu ? (
            <div className="closeButtonWrapper" ref={close}>
              <CloseButton />
            </div>
          ) : (
            ""
          )}
          <Menu
            activePage={activePage}
            pageType={pageType}
            menuPosition="header"
            setMobileMenu={setMobileMenu}
          />
        </div>

        <SocialMediaMenu />
        <HamburguerMenu onClick={() => setMobileMenu((prev) => !prev)} />
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <Portal className="portal">
            <Backdrop />
          </Portal>
        )}
      </AnimatePresence>
    </WrapperHeader>
  );
};

export default Header;
