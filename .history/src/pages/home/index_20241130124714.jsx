// src/pages/home/index.js
import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/banner'
import CardLogement from '../../components/card' // Importing CardLogement
import logements from '../../components/data/logements.json' // Assuming you have a JSON file with the logement data
import colors from '../../colors'

const Body = styled.div`
  background-color: ${colors.colorTertiary};
  padding: 0 6rem;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

const WrapperCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;  // Space between cards
  margin-top: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  background: ${colors.backgroundDark};
  border-radius: 25px;
  gap: 20px;  // Space between cards
  @media screen and (max-width: 768px) {
    background: ${colors.colorTertiary};
    margin-top: 0px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    background: ${colors.backgroundDark};
    padding: 20px;
  }
`

const CardContainer = styled.div`
  flex: 0 0 calc(33.33% - 20px);  // Each card takes up 33.33% width minus the gap
  margin: 56px 10px; // Margin for spacing between the cards
  min-width: 220px;  // Minimum width slightly reduced
  box-sizing: border-box;  // Ensures padding and margin are considered in the width
  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
    margin: 20px 0; // Vertical margin for mobile
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    flex: 1 1 45%; // Two cards on tablet, each 45% width
    min-width: auto;
    margin: 20px;
  }
`

function Home() {
  return (
    <Body>
      <Banner />
      <WrapperCard>
        {logements.map((logement) => (
          <CardContainer key={logement.id}>
            <CardLogement logement={logement} />
          </CardContainer>
        ))}
      </WrapperCard>
    </Body>
  )
}

export default Home
