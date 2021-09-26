import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Avatar from '@mui/material/Avatar'

import {useHistory} from 'react-router-dom';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
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
  color: 'black',
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
  const history = useHistory()
  const handleOnClick = () => history.push('/about');
  return (
    <Box sx={{flexGrow: 1, borderStyle: 'solid', borderWidth: 'thin', borderColor: '#D7D7D7', borderTop: "none"}}>
      <AppBar position="static" sx={{backgroundColor: "white", boxShadow: 0}}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{display: {xs: 'none', sm: 'block'}, color: "black"}}>
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
          <Box sx={{backgroundColor: "#EC6661", mr: 3, borderRadius: '5px', display: {xs: 'none', sm: 'block'}}}>
            <Button sx={{color: "white"}}>Get $20 Off</Button>
          </Box>
          <Box sx={{display: {xs: 'none', md: 'flex'}}}>
            <IconButton size="large" sx={{color: "7777777"}} onClick={handleOnClick}>
              <StorefrontOutlinedIcon />
            </IconButton>
            <IconButton size="large" sx={{color: "777777"}} onClick={handleOnClick}>
              <ImportContactsIcon />
            </IconButton>
            <IconButton size="large" sx={{color: "777777"}} onClick={handleOnClick}>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton size="large" color="inherit" onClick={handleOnClick}>
              <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}