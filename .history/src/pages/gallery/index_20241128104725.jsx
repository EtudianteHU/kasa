import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import logements from '../../components/data/logements.json'
import Carousel from '../../components/carousel/index'
import GalleryInformation from '../../components/galleryInformation/index'
import Collapse from '../../components/collapse/index'
import ErrorPage from '../error/index'

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

// Créer un composant pour la div avec flex
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

// Créer un composant pour le Collapse avec largeur 50%
const CollapseWrapper = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Gallery = () => {
  const { galleryId } = useParams()

  // Trouver le logement en utilisant l'ID dans l'URL
  const logement = logements.find((logement) => logement.id === galleryId)

  // Si aucun logement correspondant n'est trouvé, afficher la page d'erreur
  if (!logement) {
    return <ErrorPage></ErrorPage>
  }           content.map((element, index) => {
    return (<p className='equipement-content' key={"equip-"+index.toString()}>{element}</p>)
  })

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

      {/* FlexContainer pour utiliser display: flex */}
      <FlexContainer>
        {/* Appliquer la largeur 50% à chaque Collapse */}
        <CollapseWrapper>
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
        </CollapseWrapper>

        <CollapseWrapper>
          <Collapse title="Equipments">
            <p>{logement.equipments.join(', ')}</p>
          </Collapse>
        </CollapseWrapper>
      </FlexContainer>
    </Section>
  )
}

export default Gallery

