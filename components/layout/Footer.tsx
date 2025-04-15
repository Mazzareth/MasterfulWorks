"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Masterwork</h3>
            <p className="text-gray-400 max-w-xs">Connecting artists and clients for custom art commissions.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Platform</h4>
              <ul className="space-y-2">
                <li><Link href="/discover" className="text-gray-400 hover:text-white">Browse Artists</Link></li>
                <li><Link href="/auth/login" className="text-gray-400 hover:text-white">Login</Link></li>
                <li><Link href="/auth/signup" className="text-gray-400 hover:text-white">Sign Up</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">support@masterwork.com</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Feedback</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Masterwork. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
