
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  const calendar = new Date()
  const month = calendar.getMonth() + 1 < 10 ? '0'+`${calendar.getMonth()+1}` : calendar.getMonth() +1
  const day = calendar.getDate() < 10 ? '0' + `${calendar.getDate()}` : `${calendar.getDate()}`
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {`${day}, ` + `${month}, ` + `${calendar.getFullYear()}`}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}