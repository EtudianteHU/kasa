import React from 'react'
import Collapse from './Collapse'
import data from '../data/logements.json'
import { useParams } from 'react-router-dom'

const LogementPage = () => {
  const { logementId } = useParams()
  const logement = data.find((item) => item.id === logementId)

  if (!logement) return <div>Logement not found</div>

  return (
    <div>
      <h1>{logement.title}</h1>
      <Collapse title="Description">
        <p>{logement.description}</p>
      </Collapse>
      <Collapse title="Equipments">
        <ul>
          {logement.equipments.map((equip, index) => (
            <li key={index}>{equip}</li>
          ))}
        </ul>
      </Collapse>
    </div>
  )
}

export default LogementPage
