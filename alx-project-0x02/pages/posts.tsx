import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { Post, PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.title}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

// Fetch data using getStaticProps
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: Post[] = await res.json();

  // Transform the fetched data to match PostProps interface
  const posts: PostProps[] = data.map((post) => ({
    title: post.title,
    content: post.body,  // Map 'body' to 'content'
    userId: post.userId,
  }));

  return {
    props: {
      posts, // Pass the posts as a prop to the page component
    },
    revalidate: 10, // Revalidate every 10 seconds (Incremental Static Regeneration)
  };
};

export default Posts;
