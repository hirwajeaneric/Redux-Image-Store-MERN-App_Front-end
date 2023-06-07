import React from 'react'
import { ImageCardContainer } from '../styledComponents/BodyStyles';
import { useNavigate } from 'react-router-dom';

import PreviewIcon from '@mui/icons-material/Preview';
import Edit from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Down
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Up
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { links } from '../../utils/Apis';
import { useDispatch } from 'react-redux';

export default function ImageCard({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  return (
    <ImageCardContainer style={{ backgroundImage: "url('"+links.image+"/"+data.name+"')" }}>
      <div className='image-name-container'>
        <p>{data.label}</p>
      </div>
      <div className='button-group'>
        <PreviewIcon 
          className='preview' 
          onClick={()=> { navigate(`/details/${data._id}`); }}
        />
        <ThumbUpOffAltIcon className='like' onClick={()=> navigate('/details/122332323')}/>
        <FavoriteBorderIcon className='favorite' onClick={()=> navigate('/details/122332323')}/>
        <Edit className='edit' onClick={()=> navigate(`/edit/${data._id}`)} />
        <DeleteIcon 
          className='delete' 
          onClick={()=> { navigate(`/edit/${data._id}`); }} />
      </div>
    </ImageCardContainer>
  )
}
