import React from 'react'
import styled from 'styled-components'
import colors from '../../colors'
import { Link } from 'react-router-dom'

const ErrorWrapper = styled.div`
  margin: 0 5vw 5vw 5vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  bottom: -2rem;
  font-family: 'Montserrat', sans-serif;
  @media screen and (width<=768px) {
    bottom: -4rem;
    margin-bottom: 200px;
  }
`
const ErrorText = styled.h1`
  margin: 5vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  bottom: 2rem;
  font-size: 250px;
  width: 597px;
  height: 267px;
  color: ${colors.primary};
  @media screen and (width<=768px) {
    margin: 2vw;
    bottom: -1rem;
    font-size: 7rem;
  }
`
const ErrorSubtitle = styled.h2`
  margin: 5vw;
  color: ${colors.primary};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  bottom: 30px;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  @media screen and (width<=768px) {
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
    margin-left: 35px;
    bottom: 0;
  }
`

const ErrorBackToHome = styled(Link)`
  margin: 5vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-weight: 600;
  justify-content: center;
  position: relative;
  bottom: 3rem;
  color: black;
  font-size: 18px;
  @media screen and (width<=768px) {
    bottom: -1rem;
    font-size: 15px;
    color: ${colors.primary};
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    color: black;
  }
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorText>404</ErrorText>
      <ErrorSubtitle>
        Oups ! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <ErrorBackToHome NavLink to="/">
        Retourner sur la page d'accueil
      </ErrorBackToHome>
    </ErrorWrapper>
  )
}

export default Error
