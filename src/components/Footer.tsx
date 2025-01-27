import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            // sx={{ position: 'fixed', bottom: 0, width: 1.0 }}
            component="footer"
            sx={{
                position: 'fixed',
                bottom: 0,
                width: 0.8,
                py: 3,
                px: 3,
                textAlign: 'center',
            }}
        >
            <Typography variant="body1">
                © {new Date().getFullYear()} Ad cash Test
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <Link href="#" color="inherit" underline="hover">
                    Privacy Policy
                </Link>{' '}
                |{' '}
                <Link href="#" color="inherit" underline="hover">
                    Terms of Service
                </Link>
            </Typography>
        </Box>
    );
};


export default Footer;

