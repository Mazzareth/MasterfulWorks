import Link from 'next/link';

export default function DiscoverArtists() {
  // Mock data for demonstration
  const artists = [
    {
      id: 1,
      name: 'Jane Cooper',
      specialty: 'Furry Art, Character Design',
      status: 'Open for Commissions',
      rating: 4.9,
      reviews: 56,
      tags: ['Furry Art', 'Character Design', 'Reference Sheets'],
    },
    {
      id: 2,
      name: 'Alex Morgan',
      specialty: 'Anime Portraits, Chibi Art',
      status: 'Open for Commissions',
      rating: 4.7,
      reviews: 42,
      tags: ['Anime Style', 'Chibi Art', 'Cute'],
    },
    {
      id: 3,
      name: 'Sarah Wilson',
      specialty: 'Anthro Characters, Reference Sheets',
      status: 'Limited Availability',
      rating: 4.8,
      reviews: 38,
      tags: ['Anthro', 'Reference Sheets', 'Detailed'],
    },
    {
      id: 4,
      name: 'Michael Brown',
      specialty: 'Manga Style, Kemonomimi',
      status: 'Open for Commissions',
      rating: 4.6,
      reviews: 29,
      tags: ['Manga', 'Kemonomimi', 'Anime'],
    },
    {
      id: 5,
      name: 'Emily Davis',
      specialty: 'Furry Comics, YCH Commissions',
      status: 'Open for Commissions',
      rating: 4.9,
      reviews: 64,
      tags: ['Furry Comics', 'YCH', 'Colorful'],
    },
    {
      id: 6,
      name: 'David Wilson',
      specialty: 'Pixel Art, Anime Emotes',
      status: 'Limited Availability',
      rating: 4.7,
      reviews: 31,
      tags: ['Pixel Art', 'Anime Emotes', 'Cute'],
    },
    {
      id: 7,
      name: 'Lisa Johnson',
      specialty: 'Furry Badges, Character Icons',
      status: 'Open for Commissions',
      rating: 4.8,
      reviews: 47,
      tags: ['Furry Badges', 'Icons', 'Clean Style'],
    },
    {
      id: 8,
      name: 'Robert Martinez',
      specialty: 'Fantasy Furry, Anthro Creatures',
      status: 'Open for Commissions',
      rating: 4.9,
      reviews: 52,
      tags: ['Fantasy Furry', 'Anthro Creatures', 'Detailed'],
    },
  ];

  const categories = [
    'All Categories',
    'Furry Art',
    'Anime Style',
    'Character Design',
    'Reference Sheets',
    'Chibi Art',
    'Anthro Characters',
    'Kemonomimi',
    'Manga Style',
    'YCH (Your Character Here)',
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Discover Furry & Anime Artists</h1>
            <p className="text-gray-600">Find the perfect artist for your character commission</p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for furry artists, anime styles, or character types..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-48">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option>Sort by: Relevance</option>
                <option>Sort by: Rating</option>
                <option>Sort by: Recently Added</option>
              </select>
            </div>
            <div className="w-full md:w-48">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option>Status: Any</option>
                <option>Open for Commissions</option>
                <option>Limited Availability</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  index === 0
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <div key={artist.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className={`h-48 bg-gradient-to-r ${
                artist.id % 4 === 0 ? 'from-accent-500 to-primary-500' :
                artist.id % 3 === 0 ? 'from-primary-600 to-accent-500' :
                artist.id % 2 === 0 ? 'from-accent-400 to-accent-600' :
                'from-primary-400 to-primary-600'
              } relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-16 h-16 opacity-75">
                    {artist.id % 4 === 0 ? (
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    ) : artist.id % 3 === 0 ? (
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
                    ) : artist.id % 2 === 0 ? (
                      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm-1-11h2v6h-2zm0 8h2v2h-2z" />
                    ) : (
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    )}
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${
                      artist.id % 2 === 0 ? 'bg-accent-600' : 'bg-primary-600'
                    }`}>
                      {artist.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{artist.name}</h3>
                    <p className="text-gray-600 text-sm">{artist.specialty}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      artist.status === 'Open for Commissions'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {artist.status}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-900">{artist.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({artist.reviews} reviews)</span>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {artist.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        index % 3 === 0 ? 'bg-primary-100 text-primary-800' :
                        index % 2 === 0 ? 'bg-accent-100 text-accent-800' :
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-between">
                  <Link
                    href={`/artist/profile/${artist.id}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    View Profile
                  </Link>
                  <Link
                    href={`/artist/commission/${artist.id}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Commission
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center">
            <button className="px-3 py-1 rounded-md text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
              Previous
            </button>
            <div className="mx-2 flex">
              <button className="px-3 py-1 rounded-md text-white bg-primary-600">1</button>
              <button className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-50">2</button>
              <button className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-50">3</button>
              <span className="px-3 py-1">...</span>
              <button className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-50">10</button>
            </div>
            <button className="px-3 py-1 rounded-md text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
