import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function SimpleCardWithImage() {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
      <CardMedia
        component="img"
        height="140"
        image="https://m.media-amazon.com/images/I/71u3F2NZ9gL._AC_UF1000,1000_QL80_.jpg"
        alt="Card Image"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Simple Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a very basic description inside a card. It includes an image at the top.
        </Typography>
      </CardContent>
    </Card>
  );
}
