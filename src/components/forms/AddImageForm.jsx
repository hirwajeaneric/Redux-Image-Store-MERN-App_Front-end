import React from 'react'
import { FormContainer } from '../styledComponents/BodyStyles'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'

export default function AddImageForm() {
  const [name, setName] = useState('');
  const [file, setFile] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
    console.log(name);
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
      <TextField id="name" label="Image name" size='small' name='name' onChange={handleName} variant="outlined" />
      <Button size='small' color='primary' variant='contained' type='submit'>ADD</Button>
    </FormContainer>
  )
}
