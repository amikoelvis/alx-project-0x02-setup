import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { useState } from "react";

const Home: React.FC = () => {
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([])

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, {title, content}])
  };

  return (
    <div>
      <Header />
      <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page!</h1>
      <Card 
      title="Card 1: Next.js Basics" 
      content="Learn how to set up a Next.js project with TypeScript and Tailwind CSS. Understand the core concepts of Next.js and its features."
      />
      <Card 
      title="Card 2: React Components" 
      content="Discover how to build reusable React components. We'll use props to make components dynamic and flexible."
      />

      <Card 
        title="Card 3: Tailwind CSS" 
        content="Learn how to use Tailwind CSS for styling your React components. Tailwind provides utility-first CSS classes for rapid development."
      />

      <div className="space-y-6 mt-6">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      <button
      onClick={() => setIsModelOpen(true)}
      className="bg-green-500 text-white p-2 rounded"
      >Add New Post
      </button>

      {/* Post Modal */}
      <PostModal
      isOpen={isModelOpen}
      onClose={() => setIsModelOpen(false)}
      onSubmit={handleAddPost}
      />
    </div>
    </div>
  )
}

export default Home;