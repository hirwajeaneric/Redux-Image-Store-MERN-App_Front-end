import React, { useEffect } from 'react'
import { BodyContainer, ImageDetailsContainer } from '../components/styledComponents/BodyStyles';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImageDetails } from '../redux/features/images/imageSlice';
import { links } from '../utils/Apis';

export default function ImageDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getImageDetails(params.id));
  },[dispatch, params.id]);

  const { selectedImage, isLoading } = useSelector((state) => state.image);

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
              <div className='image-descriptions'>
                <p>Label:<br/><strong>{selectedImage.label}</strong></p>
                <p>Added on:<br/><strong>{new Date(selectedImage.uploadDate).toUTCString()}</strong></p>
                <p>Likes:<br/><strong>{selectedImage.likes}</strong></p>
                <div className='buttons'>
                  <Button size='small' color='primary' variant='contained' type='button' onClick={() => navigate(`/edit/${selectedImage._id}`)}>Go to Edit</Button>
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
