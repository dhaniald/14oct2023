'use client'
//1. Import area
import { Box, FormControl } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


 
//2. Defenation area
function createData(name, minstockprice, maxstockprice, c_price) {
  return { name, minstockprice, maxstockprice, c_price };
}
const rows = [
  createData('ICICI BANK LTD', 950.60, 1250, 24),
  createData('HDFC BANK LTD', 1532.44, 1650, 37),
  createData('AXISBANK', 666.50, 750, 24),
  createData('CIPLA', 223.96, 400, 67 ),
  createData('BHEL LTD', 130.70, 260, 49),
];
 
 
export default function Home(event) {
  //2.1 Hook area 
  const [selectedOption, setSelectedOption] = useState('');     //Hooks
  const [stockprice, setstockprice] = useState(' ');     //Hooks
  
  
  
  
    //2.2 Function defenation area
    const handleSelectChange = (event) => {
    console.log(event.target.value);
    
    
    //API calling
    fetch(`/api/getstockprice?stockname=${event.target.value}`).then((res) => {
      return res.json()
    }).then((data) => {
       setstockprice(data.Price)     
    }).catch((err) => {
    }).finally(() => {})
  };
//2.3 Return area
  return (

    <main>
      <h1>Select the stock name to check current price : {stockprice}
         
 </h1>
      <Box sm={{ minWidth: 120 }}>
        <FormControl variant="outlined" fullWidth>

          <Select value={selectedOption} onChange={handleSelectChange}>
            <MenuItem value={"hdfc"}>HDFC Bank Limited</MenuItem>
            <MenuItem value={"icici"}>ICICI Bank Limited</MenuItem>
            <MenuItem value={"axis"}>Axis Bank Limited</MenuItem>
            <MenuItem value={"cipla"}>Cipla Limited</MenuItem>
            <MenuItem value={"bhelltd"}>Bhel Ltd</MenuItem>
            
          </Select>

        </FormControl>


        <h2> Below is the list of stocks:</h2>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Stock Name :</TableCell>
            <TableCell align="right">MIN STOCK PRICE</TableCell>
            <TableCell align="right">MAX STOCK PRICE</TableCell>
            <TableCell align="right">CURRENT PRICE(refresh in 60sec)</TableCell>            
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
      </Box>
 
 
    </main>

  )
}
//Export area