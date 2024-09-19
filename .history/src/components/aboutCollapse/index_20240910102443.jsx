import React from 'react'
import Collapse from '../collapse'
import aboutData from '../'

const AboutCollapse = () => {
  return (
    <div>
      <Collapse title="Fiable">
        <p>{aboutData.fiable}</p>
      </Collapse>
      <Collapse title="Respect">
        <p>{aboutData.respect}</p>
      </Collapse>
      <Collapse title="Service">
        <p>{aboutData.service}</p>
      </Collapse>
      <Collapse title="Securité">
        <p>{aboutData.securite}</p>
      </Collapse>
    </div>
  )
}

export default AboutCollapse
