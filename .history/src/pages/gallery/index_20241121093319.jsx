import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Carousel from '../../components/carousel/index'
import GalleryInformation from '../../components/galleryInformation'
import Collapse from '../../components/collapse/index'
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
  //trouver le logement avec l'identifiant donné
  const logement = logements.find((logement) => logement.id === galleryId)

  // Si le logement n'existe pas, rediriger vers la page d'erreur
  if (!logement) {
    return <Error />
  }

  return (
    <>
      <Carousel images={logement.pictures} />
      <GalleryInformation
        title={logement.title}
        location={logement.location}
        host={logement.host}
        rating={logement.rating}
        tags={logement.tags}
      />
      <ToggleCollapse
        title="Description"
        content={logement.description}  // Passing description here
      />

      {/* Use ToggleCollapse to display Equipments */}
      <ToggleCollapse
        title="Equipments"
        content={logement.equipments.join(', ')}  // Equipments passed as comma-separated text
      />

  
  )
}

export default Gallery
