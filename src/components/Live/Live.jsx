import React, { useState } from "react";
import { useStyles } from "./style";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Live() {
  const [count, setCount] = useState(0);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.page}>
        <Typography variant="h5" component="h1">
          Live Alert
        </Typography>
        <Typography variant="subtitle1">
          Display alerts for the last 5 minuts
        </Typography>
        <Typography>
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
        <Typography>
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
