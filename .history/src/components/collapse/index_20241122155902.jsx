// src/components/collapse/index.js
import styled from 'styled-components'
import ToggleCollapse from '../../components/ToggleCollapse/index'
import colors from '../../colors'
import React, { useState } from 'react'
import aboutData from '../data/aproposData'
import UpArrow from '../../assets/UpArrow.png'
import DownArrow from '../../assets/DownArrow.png'
const Container = styled.div`
  margin: 10px 0;
`

const Header = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: #f0f0f0;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  &:hover {
    background-color: #e0e0e0;
  }
`

const Content = styled.div`
  padding: 10px;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 10px;
`
const CollapseContentWrapper = styled.div`
  position: relative;
  top: -19px;
  width: 100%;
  z-index: -1;
  background: ${colors.backgroundLight};
  margin-bottom: 25px;
  border-radius: 5px;
  padding: 15px;
`
const Collapse = ({ title, children, isOpen, toggle }) => (
  <div>
    <TextWrapper onClick={toggle}>
      {title}
      <ArrowIcon src={isOpen ? UpArrow : DownArrow} alt="Toggle Icon" />
    </TextWrapper>
    {isOpen && <CollapseContentWrapper>{children}</CollapseContentWrapper>}
  </div>
)

const AboutCollapse = () => {
  const [activeIndexes, setActiveIndexes] = useState([])

  const ToggleCollapse = (index) => {
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <Container>
      <Header onClick={toggle}>{title}</Header>
      {isOpen && <Content>{children}</Content>}s
    </Container>
  )
}

export default Collapse
