import React from "react";
import Link from "next/link";

import styled from "styled-components";

import Logo from "../Logo";
import Menu from "../Menu";
import SocialMediaMenu from "../SocialMediaMenu";

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
`;

const Header = ({ activePage }) => {
  return (
    <WrapperHeader>
      <div className="page-wrapper header-wrapper">
        <Link className="nav-home" href="/">
          <Logo />
        </Link>
        <Menu activePage={activePage} menuPosition="header" />
        <SocialMediaMenu />
      </div>
    </WrapperHeader>
  );
};

export default Header;
