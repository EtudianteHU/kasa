import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import './About.scss'
import bannerabout from '../../assets/img/bannerabout.png'

export function About() {
  const fiab =
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
  const respect =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  const service =
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  const securite =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  return (
    <>
      <Banner
        className="banner__about__mobile"
        bannerimg={bannerabout}
        bgtext={{ display: 'none' }}
      />
      <div className="about__div">
        <Collapse title="Fiabilité" text={fiab} id="fiab" iddiv="fiab-open" />
        <Collapse
          title="Respect"
          text={respect}
          id="respect"
          iddiv="respect-open"
        />
        <Collapse
          title="Service"
          text={service}
          id="service"
          iddiv="service-open"
        />
        <Collapse
          title="Sécurité"
          text={securite}
          id="securite"
          iddiv="securite-open"
        />
      </div>
    </>
  )
}
