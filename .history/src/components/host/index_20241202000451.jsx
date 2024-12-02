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
  order: 2;
  width: 80%;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    gap: 8px;
  }
`

const Image = styled.img`
  border-radius: 50%;
  height: 64px;
  width: 64px;
  order: 1;
  @media screen and (max-width: 768px) {
    margin-right: 10px;
    height: 32px;
    width: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 52px;
    height: 52px;
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
