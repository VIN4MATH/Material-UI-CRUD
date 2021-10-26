import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';


const useStyles =makeStyles( theme => ({
    sideMenu:{
        display:'flex',
        flexDirection:'column',
        position:'fixed',
        left:'0px',
        width:'300px',
        height:'100%',
        backgroundColor:'#f5af09',    
    },
    typograpy:{
        fontSize:'36px',
        color: theme.palette.secondary.main,
        fontStyle:'oblique',
        fontFamily:'Monospace',
        position:'absolute',
        top:theme.spacing(30),
        left:theme.spacing(3)
    
    }
}))


export default function SideMenu() {

    const classes = useStyles();
    console.log(classes);
    return(
        <div className={classes.sideMenu}>
            <Typography variant="h2" component="div" className={classes.typograpy}>
                 Emp Log Form
            </Typography>
            
        </div>
    );
}