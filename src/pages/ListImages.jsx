import React from 'react'
import { BodyContainer } from '../components/styledComponents/BodyStyles'
import ImageList from '../components/sections/ImageList'
import AddImageForm from '../components/forms/AddImageForm'

export default function ListImages() {
  return (
    <BodyContainer>
      <div className='inner-container'>
        <h2>Add Image</h2>
        <AddImageForm />
        <h2>My images</h2>
        <ImageList />
      </div>
    </BodyContainer>
  )
}
