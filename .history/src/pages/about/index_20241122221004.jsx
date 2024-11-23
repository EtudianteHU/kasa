import React, { useState } from 'react'
import styled from 'styled-components'
import aboutData from '../../components/data/aproposData'
import Collapse from '../../components/collapse'
import aboutImg from '../../assets/aproposimg.png' // Assurez-vous que l'importation est correcte
import colors 
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

const AboutImage = styled.div`
  width: 88%;
  height: 220px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.5)
    ),
    url(${aboutImg});
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  margin-bottom: 25px;
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
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
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

const About = () => {
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
      <AboutImage />
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

export default About