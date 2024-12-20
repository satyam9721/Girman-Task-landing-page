import Link from 'next/link';

export default function Navbar() {
  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:contact@girmantech.com';
  };

  return (
    <nav className="flex justify-end items-center p-4 space-x-4">
      <Link href="https://girmantech.com" className="text-gray-700 hover:text-gray-900">
        Website
      </Link>
      <Link href="https://linkedin.com/company/girman-technologies" className="text-gray-700 hover:text-gray-900">
        LinkedIn
      </Link>
      <button onClick={handleContact} className="text-gray-700 hover:text-gray-900">
        Contact
      </button>
    </nav>
  );
}