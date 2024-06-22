import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
const ErrorWrapper = styled.div`
  margin: 5vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  bottom: -2rem;

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
  bottom: -2rem;
  font-size: 10rem;
  color: ${colors.primary};
  @media screen and (width<=768px) {
    font-size: 96px;
    margin-bottom: 5px;
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
  bottom: -2rem;
  font-size: 28px;
  font-weight: 400;
  text-align: center;
  @media screen and (width<=768px) {
    font-size: 18px;
    margin-top: 10px;
    text-align: center;
    margin-left: 80px;
  }
`

const ErrorBackToHome = styled.a`
  margin: 5vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  bottom: -2rem;
  color: ${colors.primary};
  font-size: 18px;
  @media screen and (width<=768px) {
    bottom: -4rem;
    font-size: 14px;
  }
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorText>404</ErrorText>
      <ErrorSubtitle>
        Oups ! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <ErrorBackToHome href="/">
        Retourner sur la page d'accueil
      </ErrorBackToHome>
    </ErrorWrapper>
  )
}

export default Error
