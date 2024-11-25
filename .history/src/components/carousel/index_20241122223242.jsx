import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../colors'
import arrowLeft from '../../assets/leftarrow.png'
import arrowRight from '../../assets/rightarrow.png'

const ContainerCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  @media screen and (max-width: 768px) {
    height: 350px;
    padding: 0 2rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 0 2rem;
  }
`

const ContentCarousel = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  scroll-snap-align: start;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    height: 335px;
    width: 100%;
  }
`

const Arrows = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    top: 45%;
  }
`

const ArrowLeft = styled(Arrows)`
  left: 20px;
  @media screen and (max-width: 768px) {
    width: 25px;
    height: 30px;
    left: auto;
  }
       @media screen and (min-width: 768px) and (max-width: 1024px) {
    left:35px;
`

const ArrowRight = styled(Arrows)`
  right: 20px;
  @media screen and (max-width: 768px) {
    width: 25px;
    height: 30px;
    right: 30px;
  }
     @media screen and (min-width: 768px) and (max-width: 1024px) {
    right:35px;
`

const PictureLength = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: ${colors.colorTertiary};
  font-size: 18px;
  font-weight: 500;
`
const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  text-align: center;
  color: white;
  background: ${colors.primary};
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
`


