// src/components/card/index.js
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../colors'

const ImageCardWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 340px;
  display:flex;
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    height: 260px;
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

export default CardLogement
