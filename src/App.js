import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import clsx from "clsx";
import { useStyles } from "./appStyle";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import Info from "./components/Info";
import History from "./components/History";
import Live from "./components/Live";
import LoadingBackdrop from "./components/LoadingBackdrop";

function App() {
  const viewName = useSelector(state => state.viewName);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getViewNameObject = () => {
    var viewPanel;
    switch (viewName) {
      case "Live":
        viewPanel = <Live />;
        break;
      case "History":
        viewPanel = <History />;
        break;
      case "About":
        viewPanel = <Info />;
        break;
      default:
        break;
    }
    return viewPanel;
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation isOpen={open} handleDrawerOpen={handleDrawerOpen} />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {getViewNameObject()}
        <LoadingBackdrop />
      </main>
    </div>
  );
}

export default App;
