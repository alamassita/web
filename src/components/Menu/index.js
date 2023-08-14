import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import styled from "styled-components";

import { IconChevronDown } from "../Icons";
import SocialMediaMenu from "../SocialMediaMenu";

import { motion, AnimatePresence } from "framer-motion";

const MainMenu = styled.nav`
  display: flex;
  font-family: var(--font-gallery), sans-serif;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    grid-gap: 1.5rem;
  }
  .nav-link {
    display: flex;
    color: var(--gray-800);
    font-size: 1.5rem;
    padding: 0.5rem;
    transition: 300ms color ease-in-out;
    &.active {
      color: rgb(var(--primary-300));
      &:hover {
        color: rgb(var(--primary-300));
      }
    }
    &:hover {
      cursor: pointer;
      color: rgb(var(--teal));
    }
  }
  .nav-link.nav-link--internal {
    flex-direction: column;
    width: 362px;
    padding: 2.5rem 2rem;
    border-radius: 0.5rem;
    transition: 300ms background-color ease-in-out;
    strong {
      font-family: var(--font-geomanist);
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 1.125rem */
      letter-spacing: 0.3375rem;
      text-transform: uppercase;
      white-space: nowrap;
    }
    h4 {
      font-family: var(--font-gallery);
      font-size: 3.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 4.875rem */
      letter-spacing: -0.065rem;
      color: rgb(var(--nudge));
      margin-bottom: 1.5rem;
      white-space: nowrap;
    }
    p {
      font-family: var(--font-geomanist);
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 300;
      line-height: 150%; /* 1.6875rem */
      max-width: 300px;
      transition: 300ms color ease-in-out;
    }
    &.nav-link--internal__signature {
      background-color: rgb(var(--gray-800));
      strong {
        color: rgb(var(--pink-300));
      }
      p {
        color: rgb(var(--mint-100));
      }
      &:hover {
        background-color: rgb(30, 30, 33);
        p {
          color: rgb(var(--nudge));
        }
      }
    }
    &.nav-link--internal__pret {
      background-color: rgb(var(--pink-300));
      strong {
        color: rgb(var(--primary-300));
      }
      p {
        color: rgb(var(--primary-300));
      }
      &:hover {
        background-color: rgb(236, 121, 124);
        p {
          color: rgb(var(--nudge));
        }
      }
    }
  }
  .nav-link.nav-trigger {
    grid-gap: 0.5rem;
    align-items: center;
    display: flex;
  }
  .nav-submenu--wrapper {
    position: relative;
    z-index: 12;
    &.open {
      .nav-submenu--inner:before {
        opacity: 1;
      }
    }
  }
  .nav-submenu--wrapper__footer .nav-submenu--inner {
    bottom: 100%;
    transform: translate3d(-50%, -1rem, 0);
    &:before {
      border-top: 12px solid rgba(var(--teal), 0.35);
      bottom: -12px;
    }
  }
  .nav-submenu--wrapper__header .nav-submenu--inner {
    top: 100%;
    transform: translate3d(-50%, 1rem, 0);

    &:before {
      border-bottom: 12px solid rgba(var(--teal), 0.35);
      top: -12px;
    }
  }
  .nav-submenu--inner {
    position: absolute;
    left: 50%;
    padding: 1rem;
    border-radius: 1rem;
    background-color: rgba(var(--mint-200), 0);

    backdrop-filter: blur(4px);
    transition: 300ms background-color ease-in-out;
    &:before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      left: 50%;
      border-radius: 3px;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      transform: translate3d(-50%, 0, 0);
      opacity: 0;
      transition: 300ms opacity ease-in-out;
    }
  }
  .open .nav-submenu--inner {
    background-color: rgba(var(--mint-200), 0.25);
  }
  .nav-submenu {
    display: flex;
    grid-gap: 1rem;
  }
  @media screen and (max-width: 1240px) {
    .nav-submenu--inner:before {
      left: 154px;
    }
    .nav-submenu--wrapper__footer .nav-submenu--inner {
      left: 0;
      transform: translate3d(-94px, -1rem, 0);
    }
    .nav-submenu--wrapper__header .nav-submenu--inner {
      left: 0;
      transform: translate3d(-94px, 1rem, 0);
    }
  }
  @media screen and (max-width: 1001px) {
  }
`;

const Menu = ({ activePage, pageType, menuPosition, setMobileMenu }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const dropdown = useRef(null);
  const trigger = useRef(null);
  const internal = useRef(null);
  const internal2 = useRef(null);

  //console.log("pageType", pageType);

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!showSubMenu) return;
    function handleClick(event) {
      //console.log(event);
      if (!trigger.current.contains(event.target)) {
        if (
          (dropdown.current && !dropdown.current.contains(event.target)) ||
          internal.current.contains(event.target) ||
          internal2.current.contains(event.target)
        ) {
          setShowSubMenu(false);
        }
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [showSubMenu]);

  return (
    <MainMenu className="main-nav">
      <div className="main-nav--inner">
        <ul>
          {menuPosition === "footer" ? (
            <li>
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
          ) : (
            ""
          )}
          {menuPosition === "footer" ? (
            <li>
              <Link className="nav-link" href="/portfolio">
                Portfolio
              </Link>
            </li>
          ) : (
            <li>
              <div
                className={`nav-submenu--wrapper ${showSubMenu ? "open" : ""} ${
                  menuPosition === "footer"
                    ? "nav-submenu--wrapper__footer"
                    : "nav-submenu--wrapper__header"
                }`}
              >
                <div
                  className="nav-link nav-trigger"
                  onClick={() => setShowSubMenu((b) => !b)}
                  ref={trigger}
                >
                  Portfólio
                  <IconChevronDown />
                </div>
                <AnimatePresence>
                  {showSubMenu && (
                    <div className="nav-submenu--inner" ref={dropdown}>
                      <motion.div
                        className="nav-submenu"
                        initial={{ opacity: 0, y: -14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                      >
                        <Link
                          className="nav-link nav-link--internal nav-link--internal__signature"
                          href="/signature"
                          ref={internal}
                          onClick={
                            menuPosition === "header"
                              ? () => setMobileMenu(false)
                              : null
                          }
                        >
                          <>
                            <strong>Artes únicas</strong>
                            <h4>Signature</h4>
                            <p>
                              Identidade visual 100% personalizada para o seu
                              dia perfeito.
                            </p>
                          </>
                        </Link>
                        <Link
                          className="nav-link nav-link--internal nav-link--internal__pret"
                          href="/pret-a-porter"
                          ref={internal2}
                          onClick={
                            menuPosition === "header"
                              ? () => setMobileMenu(false)
                              : null
                          }
                        >
                          <>
                            <strong>Soluções com essência</strong>
                            <h4>Prêt-à-porter</h4>
                            <p>Uma coleção de trabalhos para se inspirar</p>
                          </>
                        </Link>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </li>
          )}

          <li>
            <Link
              className={`nav-link ${
                pageType === "como_comprar" ? "active" : ""
              }`}
              href="/como-comprar"
              onClick={
                menuPosition === "header" ? () => setMobileMenu(false) : null
              }
            >
              Como comprar
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${
                pageType === "quem_somos" ? "active" : ""
              }`}
              href="/quem-somos"
              onClick={
                menuPosition === "header" ? () => setMobileMenu(false) : null
              }
            >
              Quem somos
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${pageType === "contato" ? "active" : ""}`}
              href="/contato"
              onClick={
                menuPosition === "header" ? () => setMobileMenu(false) : null
              }
            >
              Contato
            </Link>
          </li>
        </ul>
        {menuPosition === "header" ? (
          <div className="socialMediaMobile">
            <SocialMediaMenu />
          </div>
        ) : (
          ""
        )}
      </div>
    </MainMenu>
  );
};

export default Menu;
