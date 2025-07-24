import Card from "@/components/common/Card";

const Home: React.FC = () => (
  <div>
    <h1 className="text-3xl font-bold">Welcome to the Home Page!</h1>
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
  </div>
)

export default Home;
