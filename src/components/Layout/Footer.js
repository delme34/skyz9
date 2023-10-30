import React from 'react'
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <>
            <Box sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}>
                <Box sx={{
                    my: 3, "& svg": {
                        fontSize: "60px",
                        cursor: "pointer",
                        mr: 2
                    },
                    "& svg:hover": {
                        color: 'goldenrod',
                        transform: 'translateX(5px)',
                        transition: 'all 400ms',
                    }
                }}>
                    {/* icons */}
                    <InstagramIcon />
                    <FacebookIcon />
                    <WhatsAppIcon />
                    <EmailIcon />
                </Box>
                <Typography variant="h6" sx={{
                    "@media (max-width:600px)": {
                        fontSize: '1rem'
                    }
                }}>All Rights Reserved &copy; delTech.DT</Typography>
            </Box>
        </>
    )
}

export default Footer