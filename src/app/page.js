  'use client'
  //1. Import area
  import { Box, FormControl } from '@mui/material';
  import MenuItem from '@mui/material/MenuItem';
  import Select from '@mui/material/Select';
  import React, { useEffect, useState } from 'react'; 
  //2. Defenation area
   export default function Home(props) { //Ye yaha pe event kya kr raha hai/ Eske andar props ataa hai

      //2.1 Hook area 
      const [selectedOption, setSelectedOption] = useState('');     //Hooks
      const [stockPrice, setstockPrice] = useState('');     //Hooks
      const [stockName,setStockName]=useState('') //Hooks // No white space in initialString
              // setFunctionShouldAlwaysBeWritternInPascalCase 
      
      //After PageLoad Event
      useEffect(()=>{
        setInterval(()=>{ // Try to use maxium ES6 FAT ARROW
        getStockPriceByName(stockName);   //Api called here using DRY method
        }, 5000);
      },[stockName])
      //2.2 Function defenation area
      const handleSelectChange = (e) =>{                
        setStockName(e.target.value); 
        getStockPriceByName(e.target.value);        
      }
      //DRY Principle
      const getStockPriceByName = (stockName)=>{        
         //ES6 FAT Arrow sn will work as formalArg
          fetch(`/api/getstockprice?stockName=${stockName}`)
          .then(res =>res.json()) // This is shortcut way of writing same logic
          .then(data => {
            console.log(data.Price);
           setstockPrice(data.Price);
          })
          .catch((err) => {

          })
          .finally(() => {

          })
      } 
            //2.3 Return area
    return (
      <main>
        <h1>The current price of {stockName} : {stockPrice} </h1>
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
        </Box>
  
  
      </main>

    )
  }
  //Export area