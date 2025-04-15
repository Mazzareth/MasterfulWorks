import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Where Furry & Anime Art Comes to Life
              </h1>
              <p className="text-xl mb-8">
                Connect with talented furry and anime artists for your dream commissions.
                Masterwork makes bringing your characters to life simple and fun!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/discover" 
                  className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-center"
                >
                  Browse Artists
                </Link>
                <Link 
                  href="/auth/signup" 
                  className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-medium text-center"
                >
                  Join Masterwork
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 w-full">
                <div className="absolute top-0 right-0 bg-white p-2 rounded-lg shadow-lg transform rotate-3 z-10">
                  <div className="h-64 w-64 bg-gradient-to-br from-primary-300 to-primary-600 rounded overflow-hidden flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-24 h-24 opacity-75">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c.83 0 1.5.67 1.5 1.5S12.83 8 12 8s-1.5-.67-1.5-1.5S11.17 5 12 5zm0 14.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5zM7.82 10c.4-.58 1.06-.97 1.81-1L9.38 12h1.23l-.25-3h1.27l-.25 3h1.23l-.24-3c.75.03 1.41.42 1.81 1H16c-.71-1.65-2.35-2.82-4.25-2.95L12 5l.25 2.05C10.35 7.18 8.71 8.35 8 10h-.18z" />
                  </svg>
                  </div>
                </div>
                <div className="absolute top-10 left-10 bg-white p-2 rounded-lg shadow-lg transform -rotate-6">
                  <div className="h-64 w-64 bg-gradient-to-br from-accent-300 to-accent-600 rounded overflow-hidden flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-24 h-24 opacity-75">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c3.31 0 6 2.69 6 6 0 1.66-.67 3.16-1.77 4.25l-.71-.71C16.44 12.63 17 11.38 17 10c0-2.76-2.24-5-5-5-1.38 0-2.63.56-3.54 1.47l-.71-.71C8.84 4.67 10.34 4 12 4zm-8 6c0-1.66.67-3.16 1.77-4.25l.71.71C5.56 7.37 5 8.62 5 10c0 2.76 2.24 5 5 5 1.38 0 2.63-.56 3.54-1.47l.71.71C13.16 15.33 11.66 16 10 16c-3.31 0-6-2.69-6-6zm6-3c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6.5-1.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zM12 19c-1.65 0-3-1.35-3-3h6c0 1.65-1.35 3-3 3z" />
                  </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Masterwork Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
              <p className="text-gray-600">Sign up as an artist to showcase your furry or anime art, or as a client to bring your characters to life.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Connect</h3>
              <p className="text-gray-600">Artists create commission tiers for character designs, clients submit their fursonas or OCs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Create & Collaborate</h3>
              <p className="text-gray-600">Work together on character designs, reference sheets, and illustrations with easy feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Furry & Anime Artists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-primary-400 to-primary-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-16 h-16 opacity-75">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Jane Cooper</h3>
                <p className="text-gray-600 text-sm mb-3">Furry Art, Character Design</p>
                <Link href="/discover" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View Profile →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-accent-400 to-accent-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-16 h-16 opacity-75">
                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm-1-11h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Alex Morgan</h3>
                <p className="text-gray-600 text-sm mb-3">Anime Portraits, Chibi Art</p>
                <Link href="/discover" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View Profile →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-primary-600 to-accent-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-16 h-16 opacity-75">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Sarah Wilson</h3>
                <p className="text-gray-600 text-sm mb-3">Anthro Characters, Reference Sheets</p>
                <Link href="/discover" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View Profile →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-accent-500 to-primary-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-16 h-16 opacity-75">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Michael Brown</h3>
                <p className="text-gray-600 text-sm mb-3">Manga Style, Kemonomimi</p>
                <Link href="/discover" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View Profile →
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/discover" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium">
              Discover More Artists
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                  JC
                </div>
                <div>
                  <h4 className="font-semibold">Jane Cooper</h4>
                  <p className="text-gray-600 text-sm">Digital Artist</p>
                </div>
              </div>
              <p className="text-gray-700">&ldquo;Masterwork has transformed how I manage my furry art commissions. The platform makes it easy to showcase my characters and handle client requests for reference sheets.&rdquo;</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                  AM
                </div>
                <div>
                  <h4 className="font-semibold">Alex Morgan</h4>
                  <p className="text-gray-600 text-sm">Client</p>
                </div>
              </div>
              <p className="text-gray-700">&ldquo;Finding the perfect artist for my fursona was so simple with Masterwork. The commission process was smooth, and my character design turned out amazing!&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Bring Your Characters to Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join our community of furry and anime artists and fans today and turn your character ideas into amazing artwork!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth/signup" 
              className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium"
            >
              Sign Up as Artist
            </Link>
            <Link 
              href="/auth/signup" 
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-medium"
            >
              Commission Your Character
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Masterwork</h3>
              <p className="text-gray-400 max-w-xs">Connecting furry and anime artists with fans for character commissions.</p>
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
    </div>
  );
}
