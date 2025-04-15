import Link from 'next/link';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-center pt-6">
        <Link href="/" className="text-primary-600 font-bold text-2xl">
          Masterwork
        </Link>
      </div>
      {children}
    </div>
  );
}
