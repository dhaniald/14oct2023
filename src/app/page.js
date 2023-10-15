 'use client'
import { Box, Button, FormControl, TextField } from '@mui/material';
//1. Import area

 import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';

//2. Defenation area
export default function Home(event) {
   //2.1 Hook area 
   const [selectedOption, setSelectedOption] = useState('');     //Hooks
   const [stockprice, setstockprice] = useState(' ');     //Hooks
   const [showSuccessMessage, setShowSuccessMessage] = useState(false); //Hooks
   //2.2 Function defenation area
   const handleButtonClick = () => {
    if (selectedOption) {
      setShowSuccessMessage(true);
    }
  };

   const handleSelectChange=(event)=>{
     console.log(event.target.value);
     fetch('/api/getstockprice').then((res)=>{
      return res.json()
      }).then((data)=>{ 
        console.log(data.Price)  
        setstockprice(data.Price)
        {showSuccessMessage && <Alert severity="success">Success! You selected: {selectedOption}</Alert>}     
      }).catch((err)=>{
      }).finally(()=>{
        
      })
   };
   
  return (   
   
     <main>
      <h1>Select the stock name to check current price: {stockprice}</h1>
      <Box sm={{ minWidth: 120 }}>
      <FormControl variant="outlined" fullWidth> 
        
          <Select value={selectedOption} 
          label='Stock'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleSelectChange}>           
           <MenuItem value={"hdfc"}>HDFC Bank Limited</MenuItem>
          <MenuItem value={"icici"}>ICICI Bank Limited</MenuItem>
          <MenuItem value={"axis"}>Axis Bank Limited</MenuItem>
          <MenuItem value={"cipla"}>Cipla Limited</MenuItem>
          <MenuItem value={"tatamotors"}>Tata Motors Ltd</MenuItem>
          <MenuItem value={"hcl"}>HCL Technologies Ltd</MenuItem>
          <MenuItem value={"nestle"}>Nestle India Ltd</MenuItem>
          <MenuItem value={"hero"}>Hero MotoCorp Ltd</MenuItem>
          <MenuItem value={"coalindia"}>Coal India Ltd</MenuItem>       
        </Select>
         
        </FormControl>
    </Box>
      </main>
 
  )
}
//Export area