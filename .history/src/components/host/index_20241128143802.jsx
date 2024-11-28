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
    order: 1;
    flex-direction: row-reverse; /* Reverses the order on mobile */
    justify-content: flex-start;
    width: 100%; /* Ensures it takes full width */
    font-size: 14px;
  }
`

const Image = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;

  @media screen and (max-width: 768px) {
    margin-left: 10px; /* Adds space between the name and image on mobile */
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
