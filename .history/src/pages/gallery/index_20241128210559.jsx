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

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const CollapseWrapper = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

// Style pour les éléments de la liste sans puces et numéros
const List = styled.ul`
  list-style-type: none; /* Retirer les puces */
  margin: 0; /* Retirer la marge */
  padding: 0; /* Retirer le padding */
`

const Gallery = () => {
  const { galleryId } = useParams()

  // Trouver le logement en utilisant l'ID dans l'URL
  const logement = logements.find((logement) => logement.id === galleryId)

  // Si aucun logement correspondant n'est trouvé, afficher la page d'erreur
  if (!logement) {
    return <ErrorPage></ErrorPage>
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
            <List>
              {logement.equipments.map((equip, index) => (
                <li key={index}>{equip}</li>
              ))}
            </List>
          </Collapse>
        </CollapseWrapper>
      </FlexContainer>
    </Section>
  )
}

export default Gallery
