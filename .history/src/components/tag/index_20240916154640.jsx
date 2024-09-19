import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`

const Tag = styled.span`
  background-color: ${colors.primary};
  color: ${colors.colorTertiary};
  font-weight: 500;
  font-size: 12px;
  line-weight: 10px;
  margin-right: 10px;
  border-radius: 15px;
  width: 115px;
  height: 25px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const TagInformation = ({ tag }) => 
  
  {  >
  return (
    <Tags>
      {tag.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </Tags>
  )
}

export default TagInformation
