import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import colors from '../../colors'
import Navigation from '.'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 3rem 6rem;
  height: 68px;
  color: ${colors.primary};
  font-weight: 700;
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
  }
`

const Logo = styled.img`
  height: 50px;
  @media (max-width: 768px) {
    height: 100px;
    width: 200px;
  }
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
