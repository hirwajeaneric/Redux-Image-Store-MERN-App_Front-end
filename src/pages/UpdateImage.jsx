import React from 'react'
import { BodyContainer, ImageDetailsContainer } from '../components/styledComponents/BodyStyles';
import { Button, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

export default function UpdateImage() {
  const [name, setName] = useState('');
  
  const handleName = (event) => {
    setName(event.target.value);
    console.log(name);
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
          <div 
            className='image-container' 
            style={{ 
              backgroundImage: "url('/pexels-jill-wellington-40815.jpg')",
            }}>
          </div>
          <form className='image-descriptions'>
            <TextField id="name" label="Image name" size='small' name='name' onChange={handleName} variant="outlined" />
            <div className='buttons'>
              <Button size='small' color='primary' variant='contained' type='submit'>CONFIRM EDIT</Button>
              <div>
                <Button size='small' color='secondary' variant='contained' type='submit'><ArrowBackIcon /> Previous</Button>
                <Button size='small' color='secondary' variant='contained' type='submit'>Next <ArrowForwardIcon /></Button>
              </div>
            </div>
          </form>
        </ImageDetailsContainer>
      </div>
    </BodyContainer>
  )
}
