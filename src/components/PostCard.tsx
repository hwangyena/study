import React from "react";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Props = {};

const PostCard = (props: Props) => {
  return <Card sx={{ minWidth: 275 }}>
  <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Word of the Day
    </Typography>
    <Typography variant="h5" component="div">
      test
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
</Card>;
};

export default PostCard;
