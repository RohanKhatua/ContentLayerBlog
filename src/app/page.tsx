import { compareDesc } from 'date-fns';
import { Post, allPosts } from 'contentlayer/generated';
import PostCard from 'components/postcard';

export default function Home() {
  const posts = allPosts.sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-center text-4xl font-extrabold text-gray-900 dark:text-white">ContentLayer Blog</h1>
        <div className="grid grid-cols-1 gap-8">
          {posts.map((post: Post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
