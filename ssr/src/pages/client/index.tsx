import PostCard from '@/components/PostCard';
import Profile from '@/components/Profile';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { Suspense } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

export default function Home() {
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
          {/* {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))} */}
        </Suspense>
      </Grid>
    </Grid>
  );
}
