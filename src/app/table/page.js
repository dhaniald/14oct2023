//Import area
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
 
 

//Defenation area


function createData(name, minstockprice, maxstockprice, c_price) {
  return { name, minstockprice, maxstockprice, c_price };
}

const rows = [
  createData('ICICI BANK LTD', 950.60, 1250, 24),
  createData('HDFC BANK LTD', 1532.44, 1650, 37),
  createData('TATAMOTORS', 666.50, 750, 24),
  createData('JIOLTD', 223.96, 400, 67 ),
  createData('BHEL LTD', 130.70, 260, 49),
];

export default function DenseTable() {
  return ( <> 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Stock Name :</TableCell>
            <TableCell align="right">MIN STOCK PRICE</TableCell>
            <TableCell align="right">MAX STOCK PRICE</TableCell>
            <TableCell align="right">CURRENT PRICE</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell >
              <TableCell align="right">{row.minstockprice}</TableCell>
              <TableCell align="right">{row.maxstockprice}</TableCell>
              <TableCell align="right">{row.c_price}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     
    </> );
}