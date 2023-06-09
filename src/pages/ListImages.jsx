import React from 'react'
import { BodyContainer } from '../components/styledComponents/BodyStyles'
import ImageList from '../components/sections/ImageList'
import AddImageForm from '../components/forms/AddImageForm'
import { useSelector } from 'react-redux';

export default function ListImages() {
  const { listOfImages, isLoading } = useSelector((state) => state.image)

  return (
    <BodyContainer>
      <div className='inner-container'>
        <h2>Add Image</h2>
        <AddImageForm />
          {isLoading ? <p>Loading...</p> :
            <>
              <h2>My images</h2>
              <ImageList listOfImages={listOfImages.images} />
              <h2>Favorites</h2>
              <ImageList />
            </>
          }
      </div>
    </BodyContainer>
  )
}
