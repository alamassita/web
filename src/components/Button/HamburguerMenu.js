import React from "react";
import styled from "styled-components";
const HamburguerWrapper = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  border-radius: 6px;
  transition: 300ms background-color ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: rgb(var(--pink-100));
    .navbar-toggler-icon,
    .navbar-toggler-icon--02,
    .navbar-toggler-icon--03 {
      width: 32px;
      background-color: rgb(var(--primary-300));
    }
  }
  .navbar-toggler--wrapper {
    display: flex;
    align-items: center;
    grid-gap: 8px;
    padding-left: 8px;
    color: rgb(var(--gray-500));
    font-family: var(--font-geomanist);
    font-size: 11px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.6875rem */
    letter-spacing: 0.015em;
  }
  .navbar-toggler--inner {
    width: 52px;
    height: 52px;
    display: flex;
    flex-direction: column;
    grid-gap: 4px;
    padding: 19px 9px 0 9px;
  }
  .navbar-toggler-icon {
    height: 2px;
    width: 32px;
    background-color: rgb(var(--gray-700));
    margin-left: auto;
    border-radius: 2px;
    transition: 300ms background-color ease-in-out, 300ms width ease-in-out;
  }
    .navbar-toggler-icon--02 {
      width: 24px;
    }
    .navbar-toggler-icon--03 {
      width: 16px;
    }
  }
`;
const HamburguerMenu = ({ onClick, className }) => {
  return (
    <HamburguerWrapper
      onClick={onClick}
      className="navbar-toggler"
      type="button"
      aria-controls="navbarsExample05"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <div className="navbar-toggler--wrapper">
        Menu
        <div className="navbar-toggler--inner">
          <span className="navbar-toggler-icon navbar-toggler-icon--01"></span>
          <span className="navbar-toggler-icon navbar-toggler-icon--02"></span>
          <span className="navbar-toggler-icon navbar-toggler-icon--03"></span>
        </div>
      </div>
    </HamburguerWrapper>
  );
};

export default HamburguerMenu;
