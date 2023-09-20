import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

type Props = {};

const Profile = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ height: 170 }}
        image='/images/profile.jpeg'
        title='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          User
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          익명의 사용자
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Profile;
