import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
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
  bottom: -2rem;
  font-size: 10rem;
  width: 597px;
  height: 267px;
  color: ${colors.primary};
  @media screen and (width<=768px) {
    margin: 2vw; /* Margin'i küçült */
    bottom: -1rem; /* Yukarı kaydır */
    font-size: 6rem; /* Font boyutunu küçült */
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
  font-weight: 500;
  text-align: center;
 @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-top: 10px; /* Üstten boşluk */
    margin-left: 35px; /* Soldan boşluk */
    bottom: 0;
    margin-bottom: 20px; /* Alt boşluk ekle */
  }
    margin-top: 10px; /* Üstten boşluk */
    margin-left: 35px; /* Soldan boşluk */
    bottom: 0;
    margin-bottom: 20px; /* Alt boşluk ekle */
  }
`

const ErrorBackToHome = styled.a`
  margin: 5vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-weight: 600;
  justify-content: center;
  position: relative;
  bottom: -2rem;
  color: ${colors.primary};
  font-size: 18px;
  @media screen and (width<=768px) {
    bottom: -4rem;
    font-size: 14px;
    color: black;
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
      <ErrorBackToHome href="/">
        Retourner sur la page d'accueil
      </ErrorBackToHome>
    </ErrorWrapper>
  )
}

export default Error
