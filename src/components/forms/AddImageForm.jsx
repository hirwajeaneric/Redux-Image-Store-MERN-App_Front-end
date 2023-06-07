import React from 'react'
import { FormContainer } from '../styledComponents/BodyStyles'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'

export default function AddImageForm() {
  const [label, setLabel] = useState('');
  const [file, setFile] = useState('');

  const handleLabel = (event) => {
    setLabel(event.target.value);
    console.log(label);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
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
    <FormContainer onSubmit={submitForm}>
      <TextField type='file' id="file" size='small' name='file' onChange={handleFile} variant="outlined" />
      <TextField id="label" label="Image label" size='small' name='label' onChange={handleLabel} variant="outlined" />
      <Button size='small' color='primary' variant='contained' type='submit'>ADD</Button>
    </FormContainer>
  )
}
