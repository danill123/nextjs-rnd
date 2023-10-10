import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Router from 'next/router';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CardProduct(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
            <Image width={10000} alt="product image" height={200} style={{ maxWidth: '100%', objectFit: 'contain' }} src={props?.imageSrc} />
        </div>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props?.title}
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => Router.push(`/product/${props?.id}`)}>Detail</Button>
      </CardActions>
    </Card>
  );
}