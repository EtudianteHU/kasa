import React from 'react'
import styled from 'styled-components'
import colors from '../../colors'

const HostName = styled.h2`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  align-items: center;
  gap: 16px;
  color: ${colors.primary};

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse; /* Met l'image avant le nom sur mobile */
    font-size: 14px;
    gap: 8px; /* Réduit l'écart entre l'image et le nom */
    align-items: flex-start; /* Aligne les éléments à gauche sur mobile */
    width: 100%; /* Laisse l'élément prendre toute la largeur */
  }
`

const Image = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px; /* Ajoute un peu d'espace entre l'image et le nom sur mobile */
  }
`

const Host = ({ host }) => {
  const { name, picture } = host

  return (
    <HostName>
      {name}
      <Image src={picture} alt={name} />
    </HostName>
  )
}

export default Host
