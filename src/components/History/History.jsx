import React, { useState, useEffect } from "react";
import { useStyles } from "./style";
import { useDispatch } from 'react-redux'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import CustomMap from "./../Map";
import AlertList from './../AlertList';
import { setDataAlerts, setSelectedAlert, setBusyStatus } from './../../reducers/orefActions';


export default function History() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [data, setData] = useState(0);
  const [count, setCount] = useState(0);
  const [fromDate, setFromDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [toDate, setToDate] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleFromDateChange = date => {
    setFromDate(date);
  };

  const handleDateChange = date => {
    setToDate(date);
  };


  useEffect(() => {
    dispatch(setSelectedAlert({}));
    dispatch(setDataAlerts([]));
    dispatch(setBusyStatus(true));
    getData("http://localhost:9090/api/history?fromDate=01.01.2020");

    return () => {
      dispatch(setDataAlerts([]));
    };
  }, []);

  const getData = async (path) => {
    fetch(path, { headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        if (!response.ok) {
          dispatch(setBusyStatus(false));
          throw new Error('Network response was not ok');
        }
        console.log(response);
        return response.json();
      })
      .then((jsonData) => {
        dispatch(setDataAlerts(jsonData));
        setData(jsonData);
        setCount(jsonData.length);
        dispatch(setBusyStatus(false));
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        dispatch(setBusyStatus(false));
      })
  }


  return (
    <div className={classes.root}>
      <Paper className={classes.page}>
        <Typography variant="h5" component="h1">
          History Alert
        </Typography>
        <Typography variant="subtitle1">
          TODO: Add search bar here
        </Typography>

        <Paper>
          <Typography component={'span'}>
            Found total {count} alerts
          </Typography>
          <Typography component={'span'}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <AlertList />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomMap />
              </Grid>
            </Grid>
          </Typography>
        </Paper>


        <Typography component={'span'}>
          <br />
          Written by &nbsp;
          <a
            href="https://www.linkedin.com/in/vadim-tanel-13088062"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vadim Tanel
          </a>
        </Typography>
        <Typography component={'span'}>
          <GitHubIcon />
          <a
            className={classes.avatarRoot}
            href="https://www.github.com/vadimtanel"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Typography>
      </Paper>
    </div>

  );
}
