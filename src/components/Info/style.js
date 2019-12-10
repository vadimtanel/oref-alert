import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: "column",
    },
    page: {
      padding: theme.spacing(3, 2),
      margin: 10,
    },
  }));