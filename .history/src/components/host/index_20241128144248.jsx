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
    order: 2; /* Place le nom après l'image */
    font-size: 14px;
    gap: 8px; /* Réduit l'écart entre l'image et le nom sur mobile */
  }
`

const Image = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;

  @media screen and (max-width: 768px) {
    order: 1; /* Place l'image avant le nom */
    margin-right: 10px; /* Ajoute un petit espace entre l'image et le nom */
  }
`

const Host = ({ host }) => {
  const { name, picture } = host

  return (
    <HostName>
      <Image src={picture} alt={name} />
      {name}
    </HostName>
  )
}

export default Host
