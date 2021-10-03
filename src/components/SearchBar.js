import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#90ee90',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: '#000',
'& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
    width: '12ch',
    '&:focus': {
        width: '20ch',
    },
    },
},
}));

const SearchBar = () => {
    return(
        <div class ='search-bar'>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: 'green '}}>
                <Toolbar>
                <Search>
                    <StyledInputBase
                    placeholder="Search for GitHub user..."
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                </Toolbar>
            </AppBar>
            </Box>
        </div>
    )
}

export default SearchBar;