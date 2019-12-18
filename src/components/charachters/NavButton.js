import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const NavButton = ({actionPage, text, offset}) =>{
  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      position: 'fixed',
      top: '40vh',
      [offset]: '25vw'
    }
  }));


  const classes = useStyles()
  return(

    <div className={classes.root}>

      <Button onClick = {()=>actionPage()} className={classes.button} variant="outlined" color="primary">
        {text}
      </Button>

    </div>
  )
}

export default NavButton