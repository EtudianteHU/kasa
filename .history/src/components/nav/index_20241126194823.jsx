import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../colors'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const NavLink = styled(Link)`
  position: relative;
  margin-left: 30px;
  font-size: 20px;
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
    background- color: ${colors.primary}
   
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
`

const Navigation = () => {
  return (
    <Nav>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/about">A propos</NavLink>
    </Nav>
  )
}

export default Navigation
