import React from 'react'
import { CardListContainer } from '../styledComponents/BodyStyles';
import ImageCard from './ImageCard';

export default function ImageList() {
  const cards = [1, 2, 3];
  return (
    <CardListContainer>
      {cards.map(card => {
        return <ImageCard key={card}/> 
      })}
    </CardListContainer>
  )
}
