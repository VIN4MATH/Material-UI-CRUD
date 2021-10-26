import React from 'react'
import { makeStyles, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyles =makeStyles(theme => ({
   root:{
       top:theme.spacing(9)
    } 
}))

export default function Notification(props) {

    const { notify, setNotify } = props;
    const classess =useStyles();

    const handleClose = (event,reason) => {
        if(reason === 'clickaway'){
            return;
        } 
        setNotify({
            ...notify,
            isOpen:false
        })
    } 
    return (
        <Snackbar
        className={classess.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{vertical:'top',horizontal:'right'}}
            onClose ={handleClose}>
            <Alert severity ={notify.type}
            onClose={handleClose}>
                {notify.message}

            </Alert>

        </Snackbar>
    )
}
