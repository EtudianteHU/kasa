import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../colors'
import UpArrow from '../../assets/uparrow.png'
import DownArrow from '../../assets/downarrow.png'

const Container = styled.div`
  margin: 10px 0;
`

const Header = styled.div`
  display: flex;
  align-items: center; 
  cursor: pointer;
  padding: 10px;
  background-color: ${colors.primary};
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  color: ${colors.colorTertiary};
  justify-content: space-between; // Ensure space between title and arrow
  &:hover {
    background-color: ${colors.primary};
  }
`

const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  margin-left: 10px;
  filter: brightness(0) invert(1);
`

const Content = styled.div`
  padding: 10px;
  background-color: #fafafa;
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;
`

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false) // Track the collapse state

  // Toggle function to change the open/close state
  const toggle = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <Container>
      <Header onClick={toggle}>
        {title}
        <ArrowIcon src={isOpen ? UpArrow : DownArrow} alt="Arrow Icon" />
      </Header>
      {isOpen && <Content>{children}</Content>}
    </Container>
  )
}

export default Collapse
