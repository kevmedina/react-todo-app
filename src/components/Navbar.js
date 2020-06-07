import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const Nav = styled.nav`
    background-color: #5f9ea0;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
  `;

  return (
    <Nav>
      <Link className="link" to="/">
        Todo App
      </Link>
      <Link className="link" to="/react-redux">
        Todo App with Redux
      </Link>
    </Nav>
  );
};

export default Navbar;
