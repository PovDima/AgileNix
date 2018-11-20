import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Style for row
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

// Style for table
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  }
});

function Item({ arr, item, classes }) {
  return (
    // Material-UI for display table
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Coin Name</CustomTableCell>
            <CustomTableCell>Icon</CustomTableCell>
            <CustomTableCell>Order Number</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(arr).map((item, index) => {
            // Only 20 items
            if (index < 20) {
              // Src for image
              let src = `https://www.cryptocompare.com${arr[item].ImageUrl}`;
              return (
                <TableRow key={index}>
                  <CustomTableCell >{arr[item].CoinName}</CustomTableCell>
                  <CustomTableCell ><img src={src} style={{ width: '45px', height: '45px' }} /></CustomTableCell>
                  <CustomTableCell >{arr[item].SortOrder}</CustomTableCell>
                </TableRow>
              )
            }
          })
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(Item);