import Navigation from '@/components/Navigation';
import PostCard from '@/components/PostCard';
import Profile from '@/components/Profile';
import { Grid } from '@mui/material';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Navigation />
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
          <Suspense>
            <PostCard />
          </Suspense>
        </Grid>
      </Grid>
    </>
  );
}
