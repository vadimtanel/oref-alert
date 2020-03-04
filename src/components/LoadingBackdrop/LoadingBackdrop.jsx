import React from 'react';
import { useSelector } from 'react-redux'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from "./style";


export default function LoadingBackdrop() {
    const classes = useStyles();
    const isBusy = useSelector(state => state.isBusy);

    return (
        <div>
            <Backdrop className={classes.backdrop} open={isBusy}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}