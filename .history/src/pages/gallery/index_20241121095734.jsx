import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Carousel from '../../components/carousel/index'
import GalleryInformation from '../../components/galleryInformation'
import ToggleCollapse from '../../components/toggleCollapse/index' // Assurez-vous que l'import est correct
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
  // Trouver le logement en utilisant l'ID dans l'URL
  const logement = logements.find((logement) => logement.id === galleryId)

  // Si aucun logement correspondant n'est trouvé, afficher la page d'erreur
  if (!logement) {
    return <Error />
  }

  return (
    <Section>
      {/* Carousel pour afficher les images */}
      <Carousel images={logement.pictures} />

      {/* GalleryInformation pour afficher le titre, la localisation, etc. */}
      <GalleryInformation
        title={logement.title}
        location={logement.location}
        host={logement.host}
        rating={logement.rating}
        tags={logement.tags}
      />

      {/* Utiliser ToggleCollapse pour afficher la description */}
      <ToggleCollapse
        title="Description"
        content={logement.description} // Passer la description ici
      />

      {/* Utiliser ToggleCollapse pour afficher les équipements */}
      <ToggleCollapse
        title="Equipments"
        content={logement.equipments.join(', ')} // Passer les équipements sous forme de texte séparé par des virgules
      />
    </Section>
  )
}

export default Gallery
