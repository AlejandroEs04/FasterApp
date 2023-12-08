'use client'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box'
import useFaster from '../hooks/useFaster';
import useAdmin from '../hooks/useAdmin'

export default function FreeSoloCreateOption() {
  
  const { productos } = useFaster()
  const { handleAddItemTicket, setValue } = useAdmin()

  return (
    <div className='flex flex-col md:flex-row gap-5'>
      {productos && (
        <Autocomplete
          autoComplete
          id="combo-box-demo"
          options={productos}
          getOptionLabel={(option) => option.nombre}
          renderOption={(props, option) => (
            <Box key={option.id} component={'li'} sx={{}} {...props}>
              <p className='text-3xl'>{option.nombre}</p>
            </Box>
          )}
          sx={{ width: 300, bgcolor: 'white' }}
          renderInput={(params) => <TextField {...params} size='medium' label="Seleccione Los Productos"/>}
          className='md:w-5/6 w-full'
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        />
      )}

      <button onClick={e => {
          e.preventDefault()
          handleAddItemTicket()
        }} 
        className=' w-full md:w-1/6 bg-amber-500 font-bold rounded-lg hover:bg-amber-600 text-white' type='submit'
      >
        Agregar
      </button>
    </div>
  );
}

