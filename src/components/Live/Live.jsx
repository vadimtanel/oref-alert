import React, { useState, useEffect } from "react";
import { useStyles } from "./style";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import CustomMap from "./../Map";

export default function Live() {
  const [count, setCount] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    //https://www.oref.org.il/WarningMessages/History/AlertsHistory.json
    /*
    [{"alertDate":"2019-12-25 21:02:10","title":"התרעות פיקוד העורף","data":"אשקלון"},{"alertDate":"2019-12-25 21:02:10","title":"התרעות פיקוד העורף","data":"באר גנים"},{"alertDate":"2019-12-25 21:02:10","title":"התרעות פיקוד העורף","data":"ברכיה"},{"alertDate":"2019-12-25 21:02:10","title":"התרעות פיקוד העורף","data":"הודיה"},{"alertDate":"2019-12-25 21:02:10","title":"התרעות פיקוד העורף","data":"ניצנים"},{"alertDate":"2019-12-25 21:02:10","title":"התרעות פיקוד העורף","data":"ניר ישראל"},{"alertDate":"2019-12-25 21:02:00","title":"התרעות פיקוד העורף","data":"אמונים"},{"alertDate":"2019-12-25 21:02:00","title":"התרעות פיקוד העורף","data":"עזריקם"},{"alertDate":"2019-12-25 21:02:00","title":"התרעות פיקוד העורף","data":"שדה עוזיהו"}]
    */
    //First log from 24.07.14
    let pathl = "https://www.oref.org.il//Shared/Ajax/GetAlarms.aspx?fromDate=01.12.2019%2012:04:04";
    fetch("")
  });

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
      <div>
        <CustomMap/>
      </div>
    </div>
  );
}
