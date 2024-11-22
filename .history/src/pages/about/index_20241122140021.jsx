import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'

import bannerabout from '../../assets/img/bannerabout.png'

 return (
      <Section>
        <Collapse
          title="Fiable"
          isOpen={activeIndexes.includes(0)}
          toggle={() => toggleCollapse(0)}
        >
          <TextContent>{content('Fiable')}</TextContent>
        </Collapse>
        <Collapse
          title="Respect"
          isOpen={activeIndexes.includes(1)}
          toggle={() => toggleCollapse(1)}
        >
          <TextContent>{content('Respect')}</TextContent>
        </Collapse>
        <Collapse
          title="Service"
          isOpen={activeIndexes.includes(2)}
          toggle={() => toggleCollapse(2)}
        >
          <TextContent>{content('Service')}</TextContent>
        </Collapse>
        <Collapse
          title="Securité"
          isOpen={activeIndexes.includes(3)}
          toggle={() => toggleCollapse(3)}
        >
          <TextContent>{content('Securité')}</TextContent>
        </Collapse>
      </Section>
    )
  }
  
  export default AboutCollapse
}
