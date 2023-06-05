import React from 'react'
import { TopBarContainer } from '../styledComponents/TopBarStyles'
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function TopBar() {
  return (
    <TopBarContainer>
      <div>
        <Link to={'/'}>RTK Gallery</Link>
        <div className='other-specs'>
          <p>
            <span>Total Images: </span>
            <strong>34</strong>
          </p>
          <p>
            {/* <FavoriteIcon />  */}
            <span>Favorite: </span>
            <strong>4</strong>
          </p>
        </div>
      </div>
    </TopBarContainer>
  )
}
