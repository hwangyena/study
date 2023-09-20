import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

const PostCard = ({
  author,
  content,
  title,
}: {
  id: string;
  title: string;
  content: string;
  author: string;
}) => {
  return (
    <Card sx={{ minWidth: 275, marginBottom: '20px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {author}
        </Typography>
        <Typography variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2'>{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default memo(PostCard);
