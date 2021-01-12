import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
// import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom'
import '../../scss/listitem.scss'



// JSX 형태로 단순 변수이다. return으로 값을 반환하지 않는다.
export const mainListItems = (
  <div>
    <ListItem button>
    <Link className="nav-btn" color="inherit" to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      Dashboard
    </Link>
    </ListItem>
    <ListItem button>
    <Link className="nav-btn" color="inherit" to="/employee" >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      Payroll
    </Link>
    </ListItem>
    <ListItem button>
      <Link className="nav-btn" color="inherit" to="/income">
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        Income
      </Link>
    </ListItem>
    <ListItem button>
    <Link className="nav-btn" color="inherit" to="/expenditure">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      Expenditure
    </Link>
    </ListItem>
  </div>
);


// JSX 형태로 단순 변수이다. return으로 값을 반환하지 않는다.
export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);