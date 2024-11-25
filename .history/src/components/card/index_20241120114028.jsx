import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logements from '../data/logements.json'
import colors from '../../colors'

const ImageCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`

const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  filter: brightness(80%);
`
const TitleCard = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  font-weight: 500;
  font-size: 18px;
  color: ${colors.colorTertiary};
  margin: 0;
`

const WrapperCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  background: ${colors.backgroundDark};
  border-radius: 25px;
  gap: 50px;
  @media screen and (width<=768px) {
    background: ${colors.colorTertiary};
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    background: ${colors.backgroundDark};
    padding: 20px;
  }
`
const CardContainer = styled.div`
  flex: 0 0 340px;
  margin: 56px 20px;
  min-width: 250px;

  &:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
    margin: 0px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    flex: 1 1 45%;
    min-width: auto;
    margin: 20px;
  }
`

const CardLogement = ({ logement }) => {
  return (
    <Link to={`/gallery/${logement.id}`} style={{ textDecoration: 'none' }}>
      <ImageCardWrapper>
        <ImageCard src={logement.cover} alt="Photo vitrine des logements" />
        <TitleCard>{logement.title}</TitleCard>
      </ImageCardWrapper>
    </Link>
  )
}

const Card = () => {
  return (
    <WrapperCard>
      {logements.map((logement) => (
        <CardContainer key={logement.id}>
          <CardLogement logement={logement} />
        </CardContainer>
      ))}
    </WrapperCard>
  )
}

export default Card
