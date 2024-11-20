const CollapseToggle = () => {
    const { galleryId } = useParams()
    const logement = data.find((product) => product.id === galleryId)
  
    const { description, equipments } = logement
  
    return (
      <Section>
        <CollapseWrapper>
          <Collapse title="Description">
            <TextContent>{description}</TextContent>
          </Collapse>
        </CollapseWrapper>
  
        <CollapseWrapper>
          <Collapse title="Equipements">
            <ListEquipement>
              {equipments.map((equipment, index) => (
                <ListEquipementItem key={index}>
                  <TextContent>{equipment}</TextContent>
                </ListEquipementItem>
              ))}
            </ListEquipement>
          </Collapse>
        </CollapseWrapper>
      </Section>
    )
  }
  
  export default CollapseToggle
  