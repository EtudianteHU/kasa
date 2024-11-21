import React, { useState } from 'react'
import colors from '../../colors'
import styled from 'styled-components'
import DownArrow from '../../assets/DownArrow.png'
import UpArrow from '../../assets/UpArrow.png'
import CollapseToggle from '../toggleCollapse'

const ArrowIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  object-fit: cover;
  filter: brightness(0) invert(1);
`

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

const Collapse = ({ title, children }) => {
  const [activeIndexes, setActiveIndexes] = useState(false)

  return (
    <div>
      <TextWrapper onClick={() => setActiveIndexes(!activeIndexes)}>
        {title}
        <ArrowIcon
          src={activeIndexes ? UpArrow : DownArrow}
          alt="Icone du collapse"
        />
      </TextWrapper>
      {activeIndexes ? (
        <CollapseContentWrapper>{children}</CollapseContentWrapper>
      ) : null}
    </div>
  )
<ollapseToggle/>
}

export default Collapse
