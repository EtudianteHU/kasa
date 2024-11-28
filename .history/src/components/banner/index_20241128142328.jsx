import React from 'react'
import styled from 'styled-components'
import colors from '../../colors'
import bannerImg from '../../assets/bannerimg.png'

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const BannerImage = styled.div`
  width: 100%;
  height: 220px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.5)
    ),
    url(${bannerImg});
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    height: 115px;
    border-radius: 13px;
  }
`

const BannerText = styled.h1`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  color: ${colors.colorTertiary};
  position: absolute;
  @media (max-width: 768px) {
    font-size: 24px;
    width: 40%;
  }
`

function Banner() {
  return (
    <BannerWrapper>
      <BannerImage alt="Image de la bannière" />
      <BannerText>Chez vous, partout et ailleurs</BannerText>
    </BannerWrapper>
  )
}

export default Banner
