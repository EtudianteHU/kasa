import React from 'react'
import styled from 'styled-components'
import colors from '../../colors'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const NavLink = styled.a`
  position: relative;
  margin-left: 30px;
  font-size: 20px;
  color: black;
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
    background-color: black;
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
  @media screen and (max-width: 768px) {
    text-transform: uppercase;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    color: black;
  }
`

const Navigation = () => {
  return (
    <Nav>
      <NavLink href="/">Accueil</NavLink>
      <NavLink href="/about">A propos</NavLink>
    </Nav>
  )
}

export default Navigation
