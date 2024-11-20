import React, { useState } from 'react'
import styled from 'styled-components'
import DownArrow from '../../assets/DownArrow.png'
import UpArrow from '../../assets/UpArrow.png'
import colors from '../../colors'

// Style de la flèche
const ArrowIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  object-fit: cover;
  filter: brightness(0) invert(1);
`

// Wrapper du titre (cliquable) et de la flèche
const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.colorTertiary};
  background: ${colors.primary};
  cursor: pointer;
  border-radius: 10px;
  padding: 15px;
  margin-top: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
`

// Wrapper du contenu qui se déploie
const CollapseContentWrapper = styled.div`
  position: relative;
  margin-top: -10px;
  padding: 15px;
  z-index: -1;
  background-color: ${colors.backgroundLight};
  border-radius: 10px;
  flex: 1;
  min-height: 200px;
`

// Composant Collapse réutilisable
const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <TextWrapper onClick={() => setIsOpen(!isOpen)}>
        {title}
        <ArrowIcon src={isOpen ? UpArrow : DownArrow} alt="Icone de collapse" />
      </TextWrapper>
      {isOpen && <CollapseContentWrapper>{children}</CollapseContentWrapper>}
    </div>
  )
}

export default Collapse
