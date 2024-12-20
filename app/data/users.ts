import type { UserData } from '@/types/user';
import Image from 'next/image';

export const dummyUsers: UserData[] = [
  {
    id: 1,
    firstName: 'Anjali',
    lastName: 'Kejriwal',
    address: 'Mumbai, India',
    phone: '90909 80888',
    email: 'anjali.k@example.com',
    image: '/anjali.png'
    
  },
  {
    id: 2,
    firstName: 'Anjali',
    lastName: 'Mehta',
    address: 'Mumbai, India',
    phone: '90909 80889',
    email: 'anjali.m@example.com'
  },
  {
    id: 3,
    firstName: 'Anjali',
    lastName: 'Sharma',
    address: 'Mumbai, India',
    phone: '90909 80890',
    email: 'anjali.s@example.com'
  },
  {
    id: 4,
    firstName: 'Anjali',
    lastName: 'Verma',
    address: 'Mumbai, India',
    phone: '90909 80891',
    email: 'anjali.v@example.com'
  }
];