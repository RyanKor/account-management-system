import React, {useState} from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';


import {Route} from 'react-router-dom'
import Main from './Main';
import Payroll from '../employee/Payroll'
import useStyles from './DashboardStyle'
import Header from './Header'



const Dashboard = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header open={open} classes={classes} handleDrawerOpen={handleDrawerOpen}  />
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Route exact path="/" render={() => <Main fixedHeightPaper={fixedHeightPaper} />} />
          <Route exact path="/payroll" component={Payroll} />
        </main>
      </div>
    );
  }

export default Dashboard;