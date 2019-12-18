import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link:{
textDecoration: 'none',
color: 'white'
  }
}));

const Nav = () => {
   const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            StarWarsApi
          </Typography>
          <Button color='inherit'>
            <Link className={classes.link}  to='/characters'>
              Characters
            </Link>
          </Button>
          <Button color='inherit'>
            <Link className={classes.link}  to='/'>
              Home
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
