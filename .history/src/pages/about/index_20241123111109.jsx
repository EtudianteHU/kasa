// src/components/about/index.js
import React from 'react'
import styled from 'styled-components'
import Collapse from '../../components/collapse' // The common Collapse component
import aboutData from '../../components/data/aproposData'
import aboutImg from '../../assets/aproposimg.png'
import colors from '../../colors'

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media screen and (max-width: 768px) {
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
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
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

const contentMap = {
  Fiable: aboutData.fiable,
  Respect: aboutData.respect,
  Service: aboutData.service,
  Securité: aboutData.securite,
}

const About = () => {
  return (
    <Section>
      <AboutImage />
      {['Fiable', 'Respect', 'Service', 'Securité'].map((title, index) => (
        <Collapse key={index} title={title}>
          <TextContent>{contentMap[title]}</TextContent>
        </Collapse>
      ))}
    </Section>
  )
}

export default About
