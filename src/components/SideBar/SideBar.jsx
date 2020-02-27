import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import HistoryIcon from "@material-ui/icons/History";
import InfoIcon from "@material-ui/icons/Info";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { useStyles } from "./style";
import * as actions from "./../../reducers/orefActions";

export default function SideBar(props) {
  const viewName = useSelector(state => state.viewName);
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const open = props.open;
  const handleDrawerClose = props.handleDrawerClose;

  const setViewName = viewName => {
    dispatch(actions.setViewName(viewName));
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
              <ChevronRightIcon />
            )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem
          button
          key="Live"
          selected={viewName === "Live"}
          onClick={() => setViewName("Live")}
        >
          <ListItemIcon>
            <LiveTvIcon />
          </ListItemIcon>
          <ListItemText primary="Live" />
        </ListItem>
        <Divider />
        <ListItem
          button
          key="History"
          selected={viewName === "History"}
          onClick={() => setViewName("History")}
        >
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
        <Divider />
        <ListItem
          button
          key="About"
          selected={viewName === "About"}
          onClick={() => setViewName("About")}
        >
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
}
