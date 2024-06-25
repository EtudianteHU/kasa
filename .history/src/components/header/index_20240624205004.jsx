import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import colors from '../../utils/style/colors'
import Navigation from '../nav'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 3rem 6rem;
  height: 68px;
  color: ${colors.primary};
  font-weight: 700;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    color: black;
  }
`

const Logo = styled.img`
  height: 50px;
`
function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Logo du header" />
      <Navigation />
    </HeaderWrapper>
  )
}
export default Header
