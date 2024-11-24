// src/components/about/index.js
import React from 'react'
import styled from 'styled-components'
import Collapse from '../../components/collapse' // Le composant Collapse commun
import aboutData from '../../components/data/aproposData'
import aboutImg from '../../assets/aproposimg.png'
import colors from '../../colors'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 3rem 6rem;
`

const TextContent = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: black;
  margin: 30px 20px;
  width: 100%;
`

const AboutImage = styled.div`
  width: 100%;
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

  back-ground-color: rgb(255, 96, 96);
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`

const CollapseWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
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
        <CollapseWrapper key={index}>
          <Collapse title={title}>
            <TextContent>{contentMap[title]}</TextContent>
          </Collapse>
        </CollapseWrapper>
      ))}
    </Section>
  )
}

export default About
