import React, { useState } from "react";
import Link from "next/link";

import styled from "styled-components";

import { IconChevronDown } from "../Icons";

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
`;

const Menu = ({ activePage, menuPosition }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <MainMenu>
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
              onClick={() => setShowSubMenu((prev) => !prev)}
            >
              Portfólio
              <IconChevronDown />
            </div>
            <AnimatePresence>
              {showSubMenu && (
                <div className="nav-submenu--inner">
                  <motion.div
                    className="nav-submenu"
                    initial={{ opacity: 0, y: -14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                  >
                    <Link
                      className="nav-link nav-link--internal nav-link--internal__signature"
                      href="/portfolio/signature"
                    >
                      <>
                        <strong>Artes únicas</strong>
                        <h4>Signature</h4>
                        <p>
                          Identidade visual 100% personalizada para o seu dia
                          perfeito.
                        </p>
                      </>
                    </Link>
                    <Link
                      className="nav-link nav-link--internal nav-link--internal__pret"
                      href="/portfolio/pret-a-porter"
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
        <li>
          <Link className="nav-link" href="/como-comprar">
            Como comprar
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/quem-somos">
            Quem somos
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/contato">
            Contato
          </Link>
        </li>
      </ul>
    </MainMenu>
  );
};

export default Menu;
