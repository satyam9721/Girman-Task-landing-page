'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Navbar } from '../components/ui/Navbar';
import { UserCard } from '../components/client/UserCard';
import { dummyUsers } from '../data/users';
import SearchBox from '../components/client/SearchBox';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [filteredUsers, setFilteredUsers] = useState(dummyUsers);

  useEffect(() => {
    const filtered = dummyUsers.filter(user => 
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="mb-6">
          <SearchBox />
        </div>
        <h1 className="text-2xl font-semibold mb-8 text-black">Search Results for "{query}"</h1>
        
        {filteredUsers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="relative w-96 h-96 mb-4">
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M200 250 L350 150 L350 300 C350 311 341 320 330 320 L70 320 C59 320 50 311 50 300 L50 150 L200 250Z" fill="#E5E7EB"/>
                <path d="M330 80 L70 80 C59 80 50 89 50 100 L50 150 L200 250 L350 150 L350 100 C350 89 341 80 330 80Z" fill="#E5E7EB"/>
                <circle cx="300" cy="300" r="60" stroke="#E5E7EB" strokeWidth="20" fill="none"/>
                <line x1="340" y1="340" x2="380" y2="380" stroke="#E5E7EB" strokeWidth="20" strokeLinecap="round"/>
                <path d="M150 150 L100 150 M250 150 L300 150" stroke="#F3F4F6" strokeWidth="20" strokeLinecap="round"/>
                <path d="M200 180 C180 180 170 160 200 160 C230 160 220 180 200 180Z" fill="#F3F4F6"/>
                <circle cx="350" cy="50" r="10" fill="#E5E7EB"/>
                <circle cx="50" cy="350" r="10" fill="#E5E7EB"/>
                <circle cx="350" cy="350" r="10" fill="#E5E7EB"/>
              </svg>
            </div>
            <p className="text-gray-400 text-xl font-light">No results found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}