import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../colors'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const NavLinkStyled = styled(NavLink)`
  position: relative;
  margin-left: 30px;
  font-size: 24px;
  color: ${colors.primary};
  text-decoration: none;
  white-space: nowrap;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    transition: all 0.3s ease-out;
    background-color: ${colors.primary};
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }

  &:hover:before,
  &:hover:after {
    width: 50%;
  }

  &.active:before,
  &.active:after {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    text-transform: uppercase;
    font-size: 12px;
  }
`

const Navigation = () => {
  return (
    <Nav>
      <NavLinkStyled to="/" activeClassName="active">
        Accueil
      </NavLinkStyled>
      <NavLinkStyled to="/about" activeClassName="active">
        A propos
      </NavLinkStyled>
    </Nav>
  )
}

export default Navigation
