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
  @media screen and (max-width: 768px) {
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
  justify-content: flex-end; display: flex;
  flex-direction: row; /* Ensures both Host and RatingInformation are on the same line */
  justify-content: space-between; /* Space out the components */
  align-items: center; /* Vertically align them in the center */

  @media (max-width: 768px) {
    padding: 0 2rem;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`

const Location = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: ${colors.primary};
  margin-bottom: 0.2em;
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