import React, { Suspense } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LoadingCard from './LoadingCard';

const PostCard = async () => {
  const posts = await fetch('http://localhost:3000/api/post', {
    method: 'GET',
    cache: 'no-store',
  }).then(async (res) => (await res.json()) as Post[]);

  return (
    <Suspense fallback={<LoadingCard />}>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Suspense>
  );
};

const Post = ({ author, content, title }: Post) => {
  return (
    <Card sx={{ minWidth: 275 }}>
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

export default PostCard;
