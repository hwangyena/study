import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navigation = () => {
  return (
    <AppBar position='fixed' color='inherit'>
      <Toolbar variant='regular'>
        <Typography variant='h6' color='inherit' component='div'>
          Blog
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
