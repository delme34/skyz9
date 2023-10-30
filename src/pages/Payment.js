import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const Payment = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15, textAlign: "center", p: 3, "& h4": {
          fontWeight: 'bold',
          my: 3,
          fontSize: "1.3rem",
        },
        "& p": {
          textAlign: "justify"
        },
        "@media (max-width:600px)": {
          mt: 0,
          "& h4": {
            fontSize: "1.5rem",
          }
        }
      }}>
      
        <Typography variant='h4'>
          PAYMENT via M-pesa
        </Typography>
        <Typography variant='h4' color={'green'}>
          Go to the M-pesa.
        </Typography>
        <Typography variant='h4' color={'green'}>
        Select Lipa na M-pesa.
        </Typography>
        <Typography variant='h4' color={'green'}>
          Then select Pay Bill.
        </Typography>
        <Typography variant='h4' color={'green'}>
          Enter Business No. 220220.
        </Typography>
        <Typography variant='h4' color={'green'}>
          Enter Account No. (Where Table Number is Your Account No.)
        </Typography>
        <Typography variant='h4' color={'green'}>
          Enter the Amount.
        </Typography>
        <Typography variant='h4' color={'green'}>
          Enter your M-Pesa PIN then send.
        </Typography>

        <Typography variant='h4' color={'goldenrod'}>
          Thank You For Coming to SKYZ9
        </Typography>

        <p></p>
      </Box>
    </Layout>
  )
}

export default Payment