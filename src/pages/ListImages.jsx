import React, { useEffect } from 'react'
import { BodyContainer } from '../components/styledComponents/BodyStyles'
import ImageList from '../components/sections/ImageList'
import AddImageForm from '../components/forms/AddImageForm'
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../redux/features/images/imageSlice';
import axios from 'axios';
import { links } from '../utils/Apis';

export default function ListImages() {
  // const { listOfImages, isLoading } = useSelector((state) => state.image)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getImages());
  //   console.log(listOfImages);
  // }, [listOfImages, dispatch])
  
  useEffect(() => {
    console.log(links.list);
    axios.get(links.list)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  },[])

  return (
    <BodyContainer>
      <div className='inner-container'>
        <h2>Add Image</h2>
        <AddImageForm />
        <h2>My images</h2>
        {/* {isLoading ? <h1>Loading...</h1> : */}
        {/* <ImageList images={listOfImages} /> */}
        {/* } */}
        <h2>Favorites</h2>
        {/* <ImageList /> */}
      </div>
    </BodyContainer>
  )
}
