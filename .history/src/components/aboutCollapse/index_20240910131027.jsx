/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import aboutData from '../data/aproposData'
import Collapse from '.'

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media screen and (width<=768px) {
    width: 100%;
  }
`
const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  text-align: center;
  color: white;
  background: ${colors.primary};
  cursor: pointer;
  border-radius: 5px 5px 5px 5px;
  padding: 10px;
  margin-bottom: 20px;
`

const CollapseContentWrapper = styled.div`
  position: relative;
  top: -19px;
  width: 100%;
  z-index: -1;
  background: ${colors.backgroundLight};
  margin-bottom: 25px;
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

  const collapseContent = (index) => {
    setActiveIndexes((activeIndexes) => {
      const indexIsOpen = activeIndexes.includes(index)
      return indexIsOpen
        ? activeIndexes.filter((i) => i !== index)
        : [...activeIndexes, index]
    })
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

<Collapse/>

  return (
    <Section>
      <Collapse title="Fiable" index={0} />
      <Collapse title="Respect" index={1} />
      <Collapse title="Service" index={2} />
      <Collapse title="Securité" index={3} />
    </Section>
  )
}

export default AboutCollapse
