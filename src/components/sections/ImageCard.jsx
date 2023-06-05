import React from 'react'
import { ImageCardContainer } from '../styledComponents/BodyStyles';
import { useNavigate } from 'react-router-dom';

import PreviewIcon from '@mui/icons-material/Preview';
import Edit from '@mui/icons-material/Edit';

// Down
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Up
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ImageCard() {
  const navigate = useNavigate(); 
  return (
    <ImageCardContainer style={{ backgroundImage: "url('pexels-jill-wellington-40815.jpg')" }}>
      <div className='image-name-container'>
        <p>Levels achieved</p>
      </div>
      <div className='button-group'>
        <PreviewIcon className='preview' onClick={()=> navigate('/details/122332323')}/>
        <ThumbUpOffAltIcon className='like' onClick={()=> navigate('/details/122332323')}/>
        <FavoriteBorderIcon className='favorite' onClick={()=> navigate('/details/122332323')}/>
        <Edit className='edit' onClick={()=> navigate('/edit/122332323')} />
      </div>
    </ImageCardContainer>
  )
}
