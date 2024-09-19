import React, { useState } from 'react'

import styled from 'styled-components'
import aboutData from '../data/aproposData'
import UpArrow from '../../assets/arrow-up.png'
import DownArrow from '../../assets/down-arrow.png'
import Collapse from '../collapse'
const Section = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media screen and (width<=768px) {
    width: 100%;
  }
`

const TextContent = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: black;
  margin: 30px 20px;
`

const ArrowIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  object-fit: contain;
`

const AboutCollapse = () => {
  const [activeIndexes, setActiveIndexes] = useState([])

  const toggleCollapse = (index) => {
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const content = (title) => {
    switch (title) {
      case 'Fiable':
        return aboutData.fiable
      case 'Respect':
        return aboutData.respect
      case 'Service':
        return aboutData.service
      case 'Securité':
        return aboutData.securite
      default:
        return ''
    }
  }

  return (
    <Section>
      <Collapse
        title="Fiable"
        isOpen={activeIndexes.includes(0)}
        toggle={() => toggleCollapse(0)}
      >
        <TextContent>{content('Fiable')}</TextContent>
      </Collapse>
      <Collapse
        title="Respect"
        isOpen={activeIndexes.includes(1)}
        toggle={() => toggleCollapse(1)}
      >
        <TextContent>{content('Respect')}</TextContent>
      </Collapse>
      <Collapse
        title="Service"
        isOpen={activeIndexes.includes(2)}
        toggle={() => toggleCollapse(2)}
      >
        <TextContent>{content('Service')}</TextContent>
      </Collapse>
      <Collapse
        title="Securité"
        isOpen={activeIndexes.includes(3)}
        toggle={() => toggleCollapse(3)}
      >
        <TextContent>{content('Securité')}</TextContent>
      </Collapse>
    </Section>
  )
}

export default AboutCollapse
