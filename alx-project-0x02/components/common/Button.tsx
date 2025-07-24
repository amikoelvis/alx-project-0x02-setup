import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape, label, onClick }) => {
    // Tailwind class names based on the size and shape props
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

    return (
        <button
        onClick={onClick}
        className={`bg-blue-500 text-white ${sizeClasses[size]} ${shapeClasses[shape]} hover:bg-blue-600`}
        >
            {label}
        </button>
    )
}

export default Button;