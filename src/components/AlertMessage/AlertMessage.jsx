import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { setSelectedAlert } from './../../reducers/orefActions';

export default function AlertMessage(props) {
    const dispatch = useDispatch()
    const selectedAlert = useSelector(state => state.selectedAlert);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if ((Object.keys(selectedAlert).length !== 0 && selectedAlert.constructor === Object) && props.keyValue === selectedAlert.keyValue) {
            setSelected(true);
        } else {
            setSelected(false);
        }
    }, [props.keyValue, selectedAlert]);

    const handleListItemClick = (event, location) => {
        console.log("clicked on " + location);
        setSelected(true);
        dispatch(setSelectedAlert(props));
    };

    return (
        <ListItem button selected={selected} onClick={event => handleListItemClick(event, props.location)} >
            <ListItemText primary={props.location} secondary={props.date + " " + props.time} />
        </ListItem>
    );
}
