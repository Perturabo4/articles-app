import * as React from 'react'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { Divider, Typography } from '@mui/material'

const SearchInput = () => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <TextField
        id="input-with-icon-textfield"
        label="Filter by keywords"
        style={{ marginBottom: '20px' }}
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Typography
        component={'div'}
        className="search-result-count"
        style={{ fontWeight: 'bold' }}
      >
        Results:{' '}
        <span style={{ display: 'inline-block', marginLeft: '10px' }}>0</span>
      </Typography>
      <Divider />
    </Box>
  )
}

export default SearchInput
