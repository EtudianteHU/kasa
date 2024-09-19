import React from 'react'
import styled from 'styled-components'
import data from '../../components/data/logements.json'
import { useParams } from 'react-router-dom'

const HostName = styled.h2`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  align-items: center;
  gap: 16px;
  @media screen and (width<=768px) {
    order: 1;
    flex-direction: row-reverse;
    justify-content: flex-start;
    width: 30%;
  }
`

const Image = styled.img`
  flex-grow: 1;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`
const Host = ({ host }) => {
 
  const { host } = logement
  const { name, picture } = host

  return (
    <HostName>
      {name}
      <Image src={picture} alt={name} />
    </HostName>
  )
}

export default Host
