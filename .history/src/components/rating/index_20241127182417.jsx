import React from 'react'
import styled from 'styled-components'
import redStar from '../../assets/redStar.png'
import grayStar from '../../assets/grayStar.png'

const Rating = styled.div`
  align-self: flex-end;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
  }
`

const Rate = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    flex-grow: 1;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
: 7px;
  }
`

const StarImage = styled.img`
  margin-right: 5px;
`

const RatingInformation = ({ rating }) => {
  //Création d'un tableau d'étoile de 5 élements, initialisé avec des grises
  //Puis, remplissage des premieres élements avec des étoiles rouges en fonction de la note
  const stars = new Array(5).fill(grayStar).fill(redStar, 0, rating)

  return (
    <Rating>
      <Rate>
        {/*Affichage de chaque etoile avec un alt différent selon la couleur */}
        {stars.map((star, index) => (
          <StarImage
            src={star}
            alt={index < rating ? 'Etoile rouge' : 'Etoile grise'}
            key={index}
          />
        ))}
      </Rate>
    </Rating>
  )
}

export default RatingInformation
