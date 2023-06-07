import React, { useEffect, useState } from 'react'
import { BodyContainer, ImageDetailsContainer } from '../components/styledComponents/BodyStyles';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function ImageDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type:'image/findById', payload: params.id });
  },[dispatch, params.id]);

  const image = useSelector(state => state.image.selectedImage);
  console.log(image);

  return (
    <BodyContainer>
      <div className='inner-container'>
        <ImageDetailsContainer>
          {image ? 
            <p>Loading...</p>:
            <>
              <div 
                className='image-container' 
                style={{ 
                  backgroundImage: "url('/pexels-jill-wellington-40815.jpg')",
                }}>
              </div>
              <div className='image-descriptions'>
                <p>Label:<br/><strong>{image.label}</strong></p>
                <p>Added on:<br/><strong>{''}</strong></p>
                <p>Likes:<br/><strong>2</strong></p>
                <div className='buttons'>
                  <Button size='small' color='primary' variant='contained' type='button' onClick={() => navigate('/edit/asdfsadfsdf')}>Go to Edit</Button>
                  <div>
                    <Button size='small' color='secondary' variant='contained' type='submit'><ArrowBackIcon /> Previous</Button>
                    <Button size='small' color='secondary' variant='contained' type='submit'>Next <ArrowForwardIcon /></Button>
                  </div>
                </div>
              </div>
            </>
          }
        </ImageDetailsContainer>
      </div>
    </BodyContainer>
  )
}
