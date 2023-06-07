import React, { useEffect } from 'react'
import { BodyContainer, ImageDetailsContainer } from '../components/styledComponents/BodyStyles';
import { Button, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImageDetails } from '../redux/features/images/imageSlice';
import { links } from '../utils/Apis';

export default function UpdateImage() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [label, setLabel] = useState('');

  useEffect(() => {
    dispatch(getImageDetails(params.id));
  },[dispatch, params.id]);

  const { selectedImage, isLoading } = useSelector((state) => state.image);

  useEffect(() => {
    setLabel(selectedImage.label);
  },[selectedImage.label]);

  const handleLabel = (event) => {
    setLabel(event.target.value);
    console.log(label);
  };

  const submitForm = (e) => {
    e.preventDefault();
    
    const config = {
      headers: {
        "Content-Type":"multipart/form-data"
      }
    }


  }

  return (
    <BodyContainer>
      <div className='inner-container'>
        <ImageDetailsContainer>
          {isLoading ?
            <p>Loading...</p> :
            <>
              <div 
                className='image-container' 
                style={{ 
                  backgroundImage: "url('"+links.image+"/"+selectedImage.name+"')",
                }}>
              </div>
              <form className='image-descriptions'>
                <TextField id="name" label="Image name" size='small' name='label' onChange={handleLabel} variant="outlined" />
                <div className='buttons'>
                  <Button size='small' color='primary' variant='contained' type='submit'>CONFIRM EDIT</Button>
                  <div>
                    <Button size='small' color='secondary' variant='contained' type='submit'><ArrowBackIcon /> Previous</Button>
                    <Button size='small' color='secondary' variant='contained' type='submit'>Next <ArrowForwardIcon /></Button>
                  </div>
                </div>
              </form>
            </>
          }
        </ImageDetailsContainer>
      </div>
    </BodyContainer>
  )
}
