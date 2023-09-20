import PostCard from '@/components/PostCard';
import Profile from '@/components/Profile';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { Suspense, useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/post')
      .then(async (res) => (await res.json()) as Post[])
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading || !posts) {
    return (
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid
      container
      spacing={0}
      justifyContent='center'
      sx={{ padding: '70px 20px 20px' }}
    >
      <Grid item xs={2}>
        <Profile />
      </Grid>
      <Grid item xs={10}>
        <Suspense
          fallback={<Skeleton variant='rectangular' width={275} height={90} />}
        >
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </Suspense>
      </Grid>
    </Grid>
  );
}
