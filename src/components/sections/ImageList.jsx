import React from 'react'
import { CardListContainer } from '../styledComponents/BodyStyles';
import ImageCard from './ImageCard';

export default function ImageList({ listOfImages }) {
  return (
    <CardListContainer>
      {listOfImages && listOfImages.map((image,index) =>( 
        <ImageCard data={image} key={index}/> 
      ))}
    </CardListContainer>
  )
}
