import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import logements from '../../components/data/logements.json'
import Carousel from '../../components/carousel/index'
import GalleryInformation from '../../components/galleryInformation'
import Collapse from '../../components/collapse/index' // Assurez-vous que l'import est correct

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
const Collapse = styled.div`
  display:f;
`
const Gallery = () => {
  const { galleryId } = useParams()

  // Trouver le logement en utilisant l'ID dans l'URL
  const logement = logements.find((logement) => logement.id === galleryId)

  // Si aucun logement correspondant n'est trouvé, afficher la page d'erreur
  if (!logement) {
    return <div>Erreur: Logement non trouvé</div>
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

      <Collapse title="Description">
        <p>{logement.description}</p>
      </Collapse>

      <Collapse title="Equipments">
        <p>{logement.equipments.join(', ')}</p>
      </Collapse>
    </Section>
  )
}

export default Gallery
