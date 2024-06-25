import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/banner'
import colors from '../../utils/style/colors'
import Card from '../../components/card'

const Body = styled.div`
  background-color: ${colors.colorTertiary};
  padding: 0 6rem;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
    @media
`

function Home() {
  return (
    <Body>
      <Banner />
      <Card />
    </Body>
  )
}

export default Home
