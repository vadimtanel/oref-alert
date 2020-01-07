import React from "react";
import { useSelector } from 'react-redux'
import List from '@material-ui/core/List';
import AlertMessage from './../AlertMessage';

export default function AlertList() {
    const data = useSelector(state => state.data)

    const renderAlertList = () => {
        return data.map(x => {
            return (
                <AlertMessage name={x.city} date={x.date} time={x.time} />
            );
        });
    }

    return (
        <List>
            {renderAlertList()}
        </List>
    );
}
