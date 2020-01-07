import React, { useState, useEffect } from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function AlertMessage(props) {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
    });

    const handleListItemClick = (event, location) => {
        setSelected(true);
        console.log(location);
    };

    return (
        <ListItem button selected={selected} onClick={event => handleListItemClick(event, props.name)} >
            <ListItemText primary={props.name} secondary={props.date + " " + props.time} />
        </ListItem>
    );
}
