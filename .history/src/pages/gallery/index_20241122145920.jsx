import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import data from '../data/logements.json'

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (width<=768px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`

const CollapseWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  @media screen and (width<=768px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
`

const ListEquipement = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const TextContent = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: black;
`

const ListEquipementItem = styled.li`
  margin-bottom: 10px;
`

const ToggleCollapse = styled.div`
  margin: 20px;
`

const Gallery = () => {
  const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)

  // Vérification si le logement existe avant de tenter d'accéder à ses données
  if (!logement) {
    return <div>Erreur: Logement non trouvé</div>
  }

  const { description, equipments } = logement

  return (
    <Section>
      <CollapseWrapper>
        {/* Remplacement de Collapse par ToggleCollapse */}
        <ToggleCollapse>
          <TextContent>{description}</TextContent>
        </ToggleCollapse>
      </CollapseWrapper>

      <CollapseWrapper>
        {/* Remplacement de Collapse par ToggleCollapse */}
        <ToggleCollapse>
          <ListEquipement>
            {equipments.map((equipment, index) => (
              <ListEquipementItem key={index}>
                <TextContent>{equipment}</TextContent>
              </ListEquipementItem>
            ))}
          </ListEquipement>
        </ToggleCollapse>
      </CollapseWrapper>
    </Section>
  )
}

export default Gallery
