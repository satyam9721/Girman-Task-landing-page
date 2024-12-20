import Image from 'next/image';
import { useState } from 'react';
import UserDialog from './UserDialog';

interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
}

export default function UserCard({ user }: { user: UserData }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4">
          <Image
            src="/anjali.png"
            alt={`${user.firstName} ${user.lastName}`}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{user.firstName} {user.lastName}</h3>
            <p className="text-gray-600">{user.address}</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
        </div>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="mt-4 w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          Fetch Details
        </button>
      </div>
      
      <UserDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        user={user}
      />
    </>
  );
}