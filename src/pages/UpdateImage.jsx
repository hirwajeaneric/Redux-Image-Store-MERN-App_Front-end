import React from 'react'
import { BodyContainer, ImageDetailsContainer } from '../components/styledComponents/BodyStyles';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function UpdateImage() {
  return (
    <BodyContainer>
      <div className='inner-container'>
        <ImageDetailsContainer>
          <div 
            className='image-container' 
            style={{ 
              backgroundImage: "url('/pexels-jill-wellington-40815.jpg')",
            }}>
          </div>
          <div className='image-descriptions'>
            <p>Name:<br/><strong>Hakerefsdsdf  sd</strong></p>
            <p>Added on:<br/><strong>March 12, 2023</strong></p>
            <div className='buttons'>
              <Button size='small' color='primary' variant='contained' type='submit'>CONFIRM EDIT</Button>
              <div>
                <Button size='small' color='secondary' variant='contained' type='submit'><ArrowBackIcon /> Previous</Button>
                <Button size='small' color='secondary' variant='contained' type='submit'>Next <ArrowForwardIcon /></Button>
              </div>
            </div>
          </div>
        </ImageDetailsContainer>
      </div>
    </BodyContainer>
  )
}
