import Profile from '@/components/Profile';
import Post from '@/components/server/Post';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { Suspense } from 'react';

export default async function Home() {
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
          <Post />
        </Suspense>
      </Grid>
    </Grid>
  );
}
