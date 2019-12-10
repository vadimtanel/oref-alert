import React from 'react';
import './App.css';
import clsx from "clsx";
import { useStyles } from "./appStyle";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navigation from './components/Navigation'
import SideBar from "./components/SideBar";
import Info from "./components/Info";

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
        <Info/>
      </main>

    </div>
  );
}

export default App;
