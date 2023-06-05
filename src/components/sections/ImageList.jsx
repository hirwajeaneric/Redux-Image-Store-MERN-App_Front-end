import React from 'react'
import ImageCard from '../sections/ImageCard';
import { CardListContainer } from '../styledComponents/BodyStyles';

export default function ImageList() {
  
  return (
    <CardListContainer>
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </CardListContainer>
  )
}
