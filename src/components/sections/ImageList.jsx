import React from 'react'
import { CardListContainer } from '../styledComponents/BodyStyles';
import ImageCard from './ImageCard';

export default function ImageList({ images }) {
  return (
    <CardListContainer>
      {images.map(image => {
        return <ImageCard key={image}/> 
      })}
    </CardListContainer>
  )
}
