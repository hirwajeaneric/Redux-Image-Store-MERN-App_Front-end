import React, { useEffect } from 'react'
import { BodyContainer, ImageDetailsContainer } from '../components/styledComponents/BodyStyles';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImageDetails } from '../redux/features/images/imageSlice';
import { links } from '../utils/Apis';
// Down
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Up
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
                    <Button size='small' color='secondary' variant='contained' type='submit'><ThumbUpOffAltIcon />&nbsp;Like</Button>
                    <Button size='small' color='secondary' variant='contained' type='submit'><FavoriteBorderIcon />&nbsp;Add to Favorites</Button>
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
