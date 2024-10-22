import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

export default function SimpleNavbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Contact</Button>
        <Avatar
          alt="Random Image"
          src="https://via.placeholder.com/40"
          sx={{ marginLeft: 2 }}
        />
      </Toolbar>
    </AppBar>
  );
}
