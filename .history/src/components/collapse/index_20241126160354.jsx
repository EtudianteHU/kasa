import React, { useState } from 'react'
import styled from 'styled-components'
import Up// You can use react-icons for the arrow
import colors from '../../colors'

const Container = styled.div`
  margin: 10px 0;
`

const Header = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: ${colors.primary};
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  color: ${colors.colorTertiary};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${colors.primary};
  }
`

const Content = styled.div`
  padding: 10px;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 10px;
`

const ArrowIcon = styled.div`
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
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
        {/* Display the arrow icon based on the collapse state */}
        <ArrowIcon isOpen={isOpen}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </ArrowIcon>
      </Header>
      {isOpen && <Content>{children}</Content>}
    </Container>
  )
}

export default Collapse
