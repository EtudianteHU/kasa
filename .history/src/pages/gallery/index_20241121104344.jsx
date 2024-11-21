import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Carousel from '../../components/carousel/index'
import GalleryInformation from '../../components/galleryInformation'
import ToggleCollapse from '../../components/toggleCollapse/index'
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
  // Vérifier que l'ID est bien une chaîne de caractères
  const logement = logements.find((logement) => logement.id === galleryId)

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
        content={logement.description || 'Aucune description disponible'}
      />

      {/* Utiliser ToggleCollapse pour afficher les équipements */}
      <ToggleCollapse
        title="Equipments"
        content={
          logement.equipments?.join(', ') || 'Aucun équipement disponible'
        }
      />
    </Section>
  )
}

export default Gallery
