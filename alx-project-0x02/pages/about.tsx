import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About = () => {
  const handleClick = (label: string) => {
    alert(`${label} Button Clicked!`);
  };

  return (
    <div>
      <Header />
      <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">About Page</h1>
      <div className="space-y-4">
        <Button
          size="small"
          shape="rounded-sm"
          label="Small Button"
          onClick={() => handleClick("Small")}
        />
        <Button
          size="medium"
          shape="rounded-md"
          label="Medium Button"
          onClick={() => handleClick("Medium")}
        />
        <Button
          size="large"
          shape="rounded-full"
          label="Large Button"
          onClick={() => handleClick("Large")}
        />
      </div>
    </div>
    </div>
  );
};

export default About;
