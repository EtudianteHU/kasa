import React from 'react'
import styled from 'styled-components'
import TagInformation from '../tag/index'
import Host from '../host/index'
import RatingInformation from '../rating/index'
import data from '../../components/data/logements.json'
import { useParams } from 'react-router-dom'
import colors from '../../utils/style/colors'

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
  font-size: 25px;
  color: ${colors.primary};
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 0;
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
  color: black;
  margin-bottom: 0.2em;
`

const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
`

const Gallery = (title, location, tags, host) => {
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
