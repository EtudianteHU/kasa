import React from 'react'
import styled from 'styled-components'
import colors from '../../colors'

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`

const Tag = styled.span`
  background-color: ${colors.primary};
  color: ${colors.colorTertiary};
  font-weight: 700;
  font-size: 14px;
  line-weight: 10px;
  margin-right: 10px;
  border-radius: 15px;
  width: 130px;
  height: 30px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (width<=768px) {
    font-size: 10px;
      font-weight: 700;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 140px;
  }
`
const TagInformation = ({ tag }) => {
  return (
    <Tags>
      {tag.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </Tags>
  )
}

export default TagInformation
