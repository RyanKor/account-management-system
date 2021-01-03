import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Copyright from './Copyright';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import useStyles from './DashboardStyle'

const Main = ({fixedHeightPaper}) => {
const classes = useStyles();
 return (
    <Container maxWidth="lg" className={classes.container}>
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Deposits />
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Orders />
        </Paper>
      </Grid>
    </Grid>
    <Box pt={4}>
      <Copyright />
    </Box>
  </Container>
 )
}


export default Main