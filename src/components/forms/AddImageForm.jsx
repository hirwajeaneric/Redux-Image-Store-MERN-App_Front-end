import React from 'react';
import { FormContainer } from '../styledComponents/BodyStyles';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '../../redux/features/images/imageSlice';

export default function AddImageForm() {
  const dispatch = useDispatch();
  const { isProcessing } = useSelector(state => state.image);
  const [label, setLabel] = useState('');
  const [file, setFile] = useState('');

  const handleLabel = (event) => {
    setLabel(event.target.value);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const saveImage = (e) => {
    e.preventDefault();
    var image = { name: file, label: label }
    dispatch(addImage(image));
    setLabel("");
    setFile("");
  }

  return (
    <FormContainer onSubmit={saveImage}>
      <TextField type='file' id="file" size='small' name='file' onChange={handleFile} variant="outlined" />
      <TextField id="label" label="Image label" size='small' name='label' onChange={handleLabel} variant="outlined" />
      {
        isProcessing ?
        <Button disabled size='small' color='primary' variant='contained'>Processing</Button> :
        <Button size='small' color='primary' variant='contained' type='submit'>ADD</Button>
      }
    </FormContainer>
  )
}
