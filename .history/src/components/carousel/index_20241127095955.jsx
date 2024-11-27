import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../colors'
import arrowLeft from '../../assets/leftarrow.png'
import arrowRight from '../../assets/rightarrow.png'

const ContainerCarousel = styled.div`
  position: relative;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 250px;
    padding: 0 2rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 0 2rem;
    height: 400px;
  }
`

const ContentCarousel = styled.div`
  display: flex;
  width: 100%;
  height: 415px;
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
    height: 250px;
    width: 100%;
    border-radius: 10px;
  }
`

const Arrows = styled.img`
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    top: 50%;
  }
`

const ArrowLeft = styled(Arrows)`
  left: 20px;
  @media screen and (max-width: 768px) {
    width: 15px;
    height: 20px;
    left: auto;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    left: 35px;
    width: 35px;
    height: auto;
  }
`

const ArrowRight = styled(Arrows)`
  right: 20px;
  @media screen and (max-width: 768px) {
    width: 15px;
    height: 20px;
    right: 35px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    right: 35px;
    width: 35px;
    height: auto;
  }
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

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0)
  const length = images.length

  const handleLeftArrowClick = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const handleRightArrowClick = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  return (
    <ContainerCarousel>
      {length > 1 && (
        <ArrowLeft
          src={arrowLeft}
          alt="Flèche de gauche"
          onClick={handleLeftArrowClick}
        />
      )}
      <ContentCarousel>
        {images.map(
          (picture, index) =>
            index === current && (
              <CarouselImage
                key={picture}
                src={picture}
                alt="Photo du logement"
              />
            )
        )}
      </ContentCarousel>
      {length > 1 && (
        <ArrowRight
          src={arrowRight}
          alt="Flèche de droite"
          onClick={handleRightArrowClick}
        />
      )}
      {length > 1 && (
        <PictureLength>
          {current + 1}/{length}
        </PictureLength>
      )}
    </ContainerCarousel>
  )
}
export default Carousel
