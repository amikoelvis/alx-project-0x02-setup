export interface CardProps {
    title: string;
    content: string;
} 

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, content: string) => void;
}

export interface ButtonProps {
    size: "small" | "medium" | "large";
    shape: "rounded-sm" | "rounded-md" | "rounded-full";
    label: string; // Text that will be displayed on the button
    onClick: () => void; // Function to handle click event
}

export interface PostProps {
    userId: number;
    title: string;
    content: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;  // the API provides the body, not content
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
