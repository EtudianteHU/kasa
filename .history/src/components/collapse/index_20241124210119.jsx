// src/components/collapse/index.js
import React, { useState } from 'react'
import styled from 'styled-components'
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
  &:hover {
    background-color: #e0e0e0;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
     @media screen and (min-width: 768px) and (max-width: 1024px) {
    flex-grow: 1;
  }
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
      <Header onClick={toggle}>{title}</Header>
      {isOpen && <Content>{children}</Content>}
    </Container>
  )
}

export default Collapse
