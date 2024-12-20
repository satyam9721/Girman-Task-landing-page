import type { UserData } from '@/types/user';
import Image from 'next/image';

interface UserDialogProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserData;
}

export function UserDialog({ isOpen, onClose, user }: UserDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-black mb-2">Fetch Details</h1>
        <p className="text-black mb-6">Here are the details of following employee.</p>
        
        <div className="space-y-2 mb-6 text-black">
          <p>
            <span className="font-bold">Name:</span> {user.firstName} {user.lastName}
          </p>
          <p>
            <span className="font-bold">Location:</span> {user.address}
          </p>
          <p>
            <span className="font-bold">Contact Number:</span> {user.phone}
          </p>
        </div>

        <div className="mb-6">
          <p className="font-bold text-black mb-2">Profile Image:</p>
          <div className="w-full h-64 relative">
            <Image
              src="/anjali.png"
              alt={`${user.firstName} ${user.lastName}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-white text-black px-6 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}