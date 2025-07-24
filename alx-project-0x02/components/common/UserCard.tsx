// components/common/UserCard.tsx
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">Username: {username}</p>
      <p className="text-gray-700 mb-2">Email: {email}</p>
      <p className="text-gray-700 mb-2">
        Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
      <p className="text-gray-700 mb-2">Phone: {phone}</p>
      <p className="text-gray-700 mb-2">Website: {website}</p>
      <p className="text-gray-700">Company: {company.name}</p>
      <p className="text-gray-500">{company.catchPhrase}</p>
      
      <p className="text-gray-500">ID: {id}</p>
    </div>
  );
};

export default UserCard;
