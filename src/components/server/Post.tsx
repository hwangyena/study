import ClientOnly from '../ClientOnly';
import PostCard from '../PostCard';

const Post = async () => {
  const posts = await fetch('http://localhost:3000/api/post', {
    method: 'GET',
    cache: 'no-store',
  }).then(async (res) => (await res.json()) as Post[]);

  return (
    <ClientOnly>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </ClientOnly>
  );
};

export default Post;
