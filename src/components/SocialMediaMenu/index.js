import React from "react";
import Link from "next/link";

import styled from "styled-components";

import { IconFacebook, IconInstagram, IconWhatsApp } from "../Icons";

const SocialMenu = styled.div`
  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    grid-gap: 8px;
  }

  .nav-link--social {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(var(--gold-300));
    &:hover {
      color: rgb(var(--teal));
      transition: 300ms color ease-in-out;
    }
  }
`;

const SocialMediaMenu = ({ menuPosition }) => {
  return (
    <SocialMenu>
      <ul>
        {menuPosition === "footer" ? (
          <li>
            <Link
              className="nav-link--social"
              href="https://www.facebook.com/alamassita/"
            >
              <IconFacebook />
            </Link>
          </li>
        ) : (
          ""
        )}
        <li>
          <Link
            className="nav-link--social"
            href="https://www.instagram.com/alamassita/"
          >
            <IconInstagram />
          </Link>
        </li>
        <li>
          <Link
            className="nav-link--social"
            href="https://api.whatsapp.com/send?phone=5511972576023"
          >
            <IconWhatsApp />
          </Link>
        </li>
      </ul>
    </SocialMenu>
  );
};

export default SocialMediaMenu;
