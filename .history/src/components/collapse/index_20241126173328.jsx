import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../colors'

const Container = styled.div`
  margin: 10px 0;
`

const Header = styled.div`
  display: flex;
  align-items: center;  // Align title and arrow on the same line
  cursor: pointer;
  padding: 10px;
  background-color: ${colors.primary};
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  color: ${colors.colorTertiary};
  justify-content: space-between;  // Ensure space between title and arrow
  &:hover {
    background-color: ${colors.primary};
  }
`

// Styled div for the arrow
const ArrowIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid white;  // Make the arrow white
  margin-left: 10px;  // Add space between the title and the arrow
  transition: transform 0.3s ease-in-out;  // Smooth rotation transition

  /* Rotate the arrow based on the state of collapse */
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const Content = styled.div`
  padding: 10px;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 10px;
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
        <ArrowIcon isOpen={isOpen} />  {/* Pass the state to the ArrowIcon */}
      </Header>
      {isOpen && <Content>{children}</Content>}
    </Container>
  )
}

export default Collapse
