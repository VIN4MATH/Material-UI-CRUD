import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Typography, IconButton } from '@material-ui/core'

import React from 'react'
import ButtonsCnt from './Buttons'
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';

const useStyles = makeStyles(theme => ({
    Dialog: {
        position: 'absolute',
        padding: theme.spacing(2),
        top: theme.spacing(5)
    },
    DialogTitle: {
        textAlign: 'center'

    },
    DialogContent: {
        textAlign: 'center'

    },
    DialogActions: {
        justifyContent: 'center'
    },
    titleIcon: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            cursor: 'default'

        },

    }
}))

export default function ConfirmDailog(props) {
    const { confirmDialog, setConfirmDialog } = props;
    const classes = useStyles();
    return (
        <Dialog open={confirmDialog.isOpen}
            classes={{ paper: classes.Dialog }}
        >
            <DialogTitle className={classes.DialogTitle}>

                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocationIcon />

                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.DialogContent}>
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography >
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.DialogActions}>
                <ButtonsCnt
                    text="No"
                    color="primary" 
                    onClick={() => setConfirmDialog({...confirmDialog,isOpen:false})}/>
                <ButtonsCnt
                    text="Yes"
                    color="Secondary" 
                    onClick={confirmDialog.onConfirm}/>
                    

            </DialogActions>

        </Dialog>
    )
}
