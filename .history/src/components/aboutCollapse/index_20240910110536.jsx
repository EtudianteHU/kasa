/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import aboutData from '../data/aproposData'
import UpArrow from '../../assets/arrow-up.png'
import DownArrow from '../../assets/down-arrow.png'

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
}

return (
  <Section>
    <Collapse title="Fiable" index={0} />
    <Collapse title="Respect" index={1} />
    <Collapse title="Service" index={2} />
    <Collapse title="Securité" index={3} />
  </Section>
)

export default AboutCollapse
