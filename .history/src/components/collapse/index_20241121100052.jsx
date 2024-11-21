import styled from 'styled-components'
import Collapse from '../../components/collapse' // Réutilisation du composant Collapse
import aboutData from '../data/aproposData'

const Section = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`

const AboutPage = () => {
  return (
    <Section>
      {/* Remplacer AboutCollapse par Collapse */}
      <Collapse title="Fiable">
        <p>{aboutData.fiable}</p>
      </Collapse>

      <Collapse title="Respect">
        <p>{aboutData.respect}</p>
      </Collapse>

      <Collapse title="Service">
        <p>{aboutData.service}</p>
      </Collapse>

      <Collapse title="Sécurité">
        <p>{aboutData.securite}</p>
      </Collapse>
    </Section>
  )
}

export default AboutPage
