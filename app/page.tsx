import Image from 'next/image';
import { Navbar } from './components/ui/Navbar';
import SearchBox from './components/client/SearchBox';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 space-y-8">
        <div className="w-48 h-12 sm:w-64 sm:h-16 relative mb-8">
          <Image
            src="/Girma.svg"
            alt="Girman Technologies"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <SearchBox />
      </div>
    </main>
  );
}