import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Carousel from '../../components/carousel/index'
import GalleryInformation from '../../components/galleryInformation'
import ToggleCollapse from '../../components/toggleCollapse/index'  // Ensure this import is correct
import logements from '../../components/data/logements.json'
import Error from '../error/index'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 6rem;
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`

const Gallery = () => {
  const { galleryId } = useParams()
  // Find the logement (property) based on the galleryId from the URL
  const logement = logements.find((logement) => logement.id === galleryId)

  // If no matching logement is found, display the Error page
  if (!logement) {
    return <Error />
  }

  return (
    <Section>
      {/* Carousel to show the pictures */}
      <Carousel images={logement.pictures} />

      {/* GalleryInformation to display title, location, etc. */}
      <GalleryInformation
        title={logement.title}
        location={logement.location}
        host={logement.host}
        rating={logement.rating}
        tags={logement.tags}
      />

      {/* Use ToggleCollapse to display Description */}
      <ToggleCollapse
        title="Description"
        content={logement.description}  // Passing description here
      />

      {/* Use ToggleCollapse to display Equipments */}
      <ToggleCollapse
        title="Equipments"
        content={logement.equipments.join(', ')}  // Equipments passed as comma-separated text
      />
    </Section>
  )
}

export default Gallery