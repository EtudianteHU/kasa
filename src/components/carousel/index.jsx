import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import arrowLeft from '../../assets/leftarrow.png'
import arrowRight from '../../assets/rightarrow.png'
import data from '../data/logements.json'
import { useParams } from 'react-router-dom'

const ContainerCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`

const ContentCarousel = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth; // Corrected typo here
  scroll-snap-type: x mandatory;
`

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  scroll-snap-align: start;
  border-radius: 25px;
`

const Arrows = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
`

const ArrowLeft = styled(Arrows)`
  left: 20px;
`

const ArrowRight = styled(Arrows)`
  right: 20px;
`

const PictureLength = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%); // Corrected typo here
  color: ${colors.colorTertiary};
  font-size: 18px;
  font-weight: 500;
`

const Carousel = () => {
  const [current, setCurrent] = useState(0)
  const [setScrollPosition] = useState(0) // Removed square brackets

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft)
  }

  const handleLeftArrowClick = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const handleRightArrowClick = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)
  const length = logement?.pictures?.length || 0

  return (
    <ContainerCarousel>
      {length > 1 && (
        <ArrowLeft
          src={arrowLeft}
          alt="Flèche de gauche"
          onClick={handleLeftArrowClick}
        />
      )}
      <ContentCarousel id="carousel" onScroll={handleScroll}>
        {logement.pictures.map(
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
      <PictureLength>
        {current + 1}/{length}
      </PictureLength>
    </ContainerCarousel>
  )
}

export default Carousel
