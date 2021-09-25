import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Avatar from '@mui/material/Avatar'
import { Label } from '@mui/icons-material';




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));

export default function MainAppBar() {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{display: {xs: 'none', sm: 'block'}}}>
            Groceries
          </Typography>
          <Search>
          <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Groceries"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{flexGrow: 1}} />
          <Box sx={{display: {xs: 'none', md: 'flex'}}}>
            <IconButton size="large" color="inherit">
              <StorefrontOutlinedIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <ImportContactsOutlinedIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}