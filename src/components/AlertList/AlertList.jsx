import React from "react";
import { useSelector } from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AlertMessage from './../AlertMessage';

export default function AlertList() {
    const data = useSelector(state => state.data)

    const renderAlertList = () => {
        return data.map((x, index) => {
            return (
                <AlertMessage key={index} location={x.location} date={x.date} time={x.time} geoPosition={x.geoPosition} keyValue={index} />
            );
        });
    }

    const renderNoAlerts = () => {
        return (
            <ListItem>
                <ListItemText primary="No alerts" />
            </ListItem>
        );
    }

    const renderByData = () => {
        if (data.length === 0) {
            return renderNoAlerts();
        } else {
            return renderAlertList();
        }
    }

    return (
        <List>
            {renderByData()}
        </List>

    );
}
