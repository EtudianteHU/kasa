import React, { useState } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import icons8-chevron-dow
import data from '../../components/data/logements.json'
import { useParams } from 'react-router-dom'

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (width<=768px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`

const ArrowIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  object-fit: cover;
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

const TextContent = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-heigt: 26px;
  color: black;
`

const CollapseWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  @media screen and (width<=768px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
`

const ListEquipement = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const ListEquipementItem = styled.li`
  margin-bottom: 10px;
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
}

const CollapseToggle = () => {
  const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)

  const { description, equipments } = logement

  return (
    <Section>
      <CollapseWrapper>
        <Collapse title="Description">
          <TextContent>{description}</TextContent>
        </Collapse>
      </CollapseWrapper>

      <CollapseWrapper>
        <Collapse title="Equipements">
          <ListEquipement>
            {equipments.map((equipment, index) => (
              <ListEquipementItem key={index}>
                <TextContent>{equipment}</TextContent>
              </ListEquipementItem>
            ))}
          </ListEquipement>
        </Collapse>
      </CollapseWrapper>
    </Section>
  )
}

export default CollapseToggle
