import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, position, taxcode, posttax_pay) {
  return { id, date, name, position, taxcode, posttax_pay };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Tran Thuy Tien', 'Translator', 12345678, 312.44),
  createData(1, '16 Mar, 2019', 'Nhu Hoa', 'Marketer', 12345678, 866.99),
  createData(2, '16 Mar, 2019', 'Nguyen Quoc Viet', 'Editor', 12345678, 100.81),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Last Payroll</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Tax code</TableCell>
            <TableCell align="right">Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.position}</TableCell>
              <TableCell>{row.taxcode}</TableCell>
              <TableCell align="right">{row.posttax_pay}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}