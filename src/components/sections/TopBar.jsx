import React from 'react'
import { TopBarContainer } from '../styledComponents/TopBarStyles'
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';

export default function TopBar() {
  const { total } = useSelector((state) => state.image);

  return (
    <TopBarContainer>
      <div>
        <Link to={'/'}>RTK Gallery</Link>
        <div className='other-specs'>
          <p>
            <span>Total Images: </span>
            <strong>{total}</strong>
          </p>
          <p>
            {/* <FavoriteIcon />  */}
            <span>Favorite: </span>
            <strong>0</strong>
          </p>
        </div>
      </div>
    </TopBarContainer>
  )
}
