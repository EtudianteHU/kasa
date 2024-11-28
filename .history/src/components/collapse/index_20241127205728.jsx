import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../colors'
import UpArrow from '../../assets/uparrow.png'
import DownArrow from '../../assets/downarrow.png'

const Container = styled.div`
  margin: 10px 0;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 11px;
  background-color: ${colors.primary};
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  margin: 0px;
  color: ${colors.colorTertiary};
  justify-content: space-between;
  &:hover {
    background-color: ${colors.primary};
  }
  @media screen and (width<=768px) {
    font-size: 14px;
  }
  padding: 7px;
`

const ArrowIcon = styled.img`
  width: 25px;
  height: 25px;
  object-fit: contain;
  margin-left: 10px;
  filter: brightness(0) invert(1);
  @media screen and (width<=768px) {
    width: 15px;
    height: 15px;
  }
`

const Content = styled.div`
  padding: 25px;
  background-color: #fafafa;
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;
  color: ${colors.primary};
  font-size: 24px;
  @media screen and (width<=768px) {
    font-size: 14px;
  }
`

const EquipmentList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const EquipmentItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${colors.primary};
`

const Collapse = ({ title, description, equipments }) => {
  const [isOpen, setIsOpen] = useState(false)

  // Toggle function to change the open/close state
  const toggle = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <Container>
      <Header onClick={toggle}>
        {title}
        <ArrowIcon src={isOpen ? UpArrow : DownArrow} alt="Arrow Icon" />
      </Header>
      {isOpen && (
        <Content>
          {/* Affichage de la description */}
          {description && <p>{description}</p>}

          {/* Liste des équipements */}
          {equipments && (
            <EquipmentList>
              {equipments.map((equipment, index) => (
                <EquipmentItem key={index}>{equipment}</EquipmentItem>
              ))}
            </EquipmentList>
          )}
        </Content>
      )}
    </Container>
  )
}

export default Collapse
