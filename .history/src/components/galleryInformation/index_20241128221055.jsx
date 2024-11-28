import React from 'react'
import styled from 'styled-components'
import TagInformation from '../tag/index'
import Host from '../host/index'
import RatingInformation from '../rating/index'
import data from '../../components/data/logements.json'
import { useParams } from 'react-router-dom'
import colors from '../../colors'

const WrapperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
  width: 100%;
  @media screen and (width<=768px) {
    flex-direction: column;
    gap: 0;
  }
`

const Title = styled.div`
  display: flex;
  font-size: 36px;
  color: ${colors.primary};
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
  }
`

const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
const SectionRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 768px) {
    padding: 0 2rem;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
  }

   {
    flex-wrap: wrap-reverse;
  }
`
const Location = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: ${colors.primary};
  margin-bottom: 0.2em;
  @media screen and (width<=768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
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
  font-size: 24px;
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
  font-size: 25px;
  @media screen and (width<=768px) {
    font-size: 14px;
  }
`

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false) // Track the collapse state

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
      {isOpen && <Content>{children}</Content>}
    </Container>
  )
}

export default Collapse

  }
`

const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
`

const Gallery = () => {
  const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)

  const { title, location, tags, host } = logement

  return (
    <WrapperContainer>
      <SectionLeft>
        <WrapperTitle>
          <Title>{title}</Title>
          <Location>{location}</Location>
        </WrapperTitle>
        <TagInformation tag={tags} />
      </SectionLeft>
      <SectionRight>
        <Host host={host} />
        <RatingInformation />
      </SectionRight>
    </WrapperContainer>
  )
}

export default Gallery
