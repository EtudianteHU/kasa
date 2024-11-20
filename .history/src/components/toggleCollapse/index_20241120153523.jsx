const AboutCollapse = () => {
    const [activeIndexes, setActiveIndexes] = useState([])
  
    const toggleCollapse = (index) => {
      setActiveIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      )
    }
  
    const content = (title) => {
      switch (title) {
        case 'Fiable':
          return aboutData.fiable
        case 'Respect':
          return aboutData.respect
        case 'Service':
          return aboutData.service
        case 'Securité':
          return aboutData.securite
        default:
          return ''
      } }