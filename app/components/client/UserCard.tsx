'use client';

import Image from 'next/image';
import { useState } from 'react';
import { UserDialog } from '../ui/UserDialog';
import type { UserData } from '@/types/user';

export function UserCard({ user }: { user: UserData }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-3xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition-shadow duration-200">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 relative mb-4 sm:mb-6">
            <Image
              src="/Ellipse.png"
              alt={`${user.firstName} ${user.lastName}`}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="text-2xl sm:text-4xl font-bold text-black mb-4">{user.firstName} {user.lastName}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <p className="text-sm sm:text-base">{user.address}</p>
          </div>
          <div className="flex items-center text-gray-600 mb-4 sm:mb-6">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <p className="text-sm sm:text-base">{user.phone}</p>
          </div>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="w-full bg-black text-white py-3 sm:py-4 px-4 sm:px-6 rounded-full text-sm sm:text-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            Fetch Details
          </button>
        </div>
      </div>
      
      <UserDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        user={user}
      />
    </>
  );
}