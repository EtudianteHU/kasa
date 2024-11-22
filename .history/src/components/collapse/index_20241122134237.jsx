// src/components/collapse/index.js
import React, { useState } from 'react'
import styled from 'styled-components'

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

const Collapse = ({ title, children, isOpen, toggle }) => {
  return (
    <Container>
      <Header onClick={toggle}>{title}</Header>
      {isOpen && <Content>{children}</Content>}
    </Container>
  )
}

export default Collapse
return (
  <><div className='collapse__div'>
      <div onClick={toggle} className="top__bar">
          <h1 className='collapse__title'>{title}</h1>
          <img className='arrow__closed' id={id} src={arrowclosed} alt="Paysage" />
      </div>
      <div className='bottom__bar' id={iddiv}><p className='collapse__text'>{text}</p></div>
  </div></