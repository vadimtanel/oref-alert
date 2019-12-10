import React, { useState } from 'react';
import { useStyles } from './style';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Info() {
  const classes = useStyles();

  const [count, setCount] = useState(0);

  return (
    <div className={classes.root}>
      <Paper className={classes.page}>
        <Typography variant="h5" component="h1">Oref Alert</Typography>
        <Typography variant="subtitle1">
          This app was create as part of demo for using react-redux with use of hook.
          The app shows live missle alert (last 5 minuts) and history allerts - between dates.
        </Typography>
        <Typography>
          <br/>
          Written by &nbsp;
          <a href="https://www.linkedin.com/in/vadim-tanel-13088062" target="_blank" rel="noopener noreferrer">Vadim Tanel</a>
        </Typography>
        <Typography>
          <GitHubIcon/>
          <a className={classes.avatarRoot} href="" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Typography>

      </Paper>
    </div>
  );
}