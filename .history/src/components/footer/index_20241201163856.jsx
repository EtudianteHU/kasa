import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo-footer.png'

const StyledFooter = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
  min-height: 100px;
  display: grid;
  place-items: center;
  margin-top: 32px;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin: 32px 30px;
  }
`
const LogoWrapper = styled.div`
  display: flex;
  height: 80px;
`
const LogoFooter = styled.img`
  font-size: 24px;
`
const FooterText = styled.div`
  font-size: 24px;
  fon-weight:500
`

function Footer() {
  return (
    <StyledFooter>
      <LogoWrapper>
        <LogoFooter src={logo} alt="logo" />
      </LogoWrapper>
      <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </StyledFooter>
  )
}

export default Footer
