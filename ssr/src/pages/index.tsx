import PostCard from '@/components/PostCard';
import Profile from '@/components/Profile';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { Suspense } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

export default function Home({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

export const getServerSideProps = (async (context) => {
  const res = await fetch('http://localhost:3000/api/post');
  const posts = (await res.json()) as Post[];

  return { props: { posts } };
}) satisfies GetServerSideProps<{
  posts: Post[];
}>;
