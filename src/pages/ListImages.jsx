import React from 'react'
import { BodyContainer } from '../components/styledComponents/BodyStyles'
import ImageList from '../components/sections/ImageList'

export default function ListImages() {
  return (
    <BodyContainer>
      <div>
        <h2>My images</h2>
        <ImageList />
      </div>
    </BodyContainer>
  )
}
