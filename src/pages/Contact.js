import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableContainer, TableHead, TableCell, TableRow, Typography, TableBody } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';



const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 3 }, }}>
        <Typography variant='h4'>Contact Us</Typography>
        <p>
          "A restaurant is a fantasy—a kind of living fantasy in which diners are the most important members of the cast." - Warner LeRoy.
          "A restaurant is a fantasy—a kind of living fantasy in which diners are the most important members of the cast." - Warner LeRoy.
        </p>
      </Box>
      <Box sx={{ m:3, width:"600px", ml:10, "@media (max-width:600px)":{
        width:"300px", 
      }}}>
      <TableContainer component={Paper}>
        <Table aria-aria-label="contact table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ bgcolor:'black', color:"White"}} align='center'>Contact Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <CallIcon sx={{ color: 'red', pt: 1 }} /> 13456789990(safaricom)
              </TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
                <EmailIcon sx={{ color: 'skyblue', pt: 1 }} /> sky9@gmail.com
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact