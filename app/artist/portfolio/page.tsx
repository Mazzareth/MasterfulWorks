import Link from 'next/link';

export default function ArtistPortfolio() {
  // Mock data for demonstration
  const portfolioItems = [
    {
      id: 1,
      title: 'Fantasy Character Design',
      description: 'Character design for a fantasy RPG game',
      category: 'Character Design',
      tags: ['Fantasy', 'Character Design', 'Digital Art'],
      isPublic: true,
    },
    {
      id: 2,
      title: 'Sci-Fi Environment Concept',
      description: 'Environment concept for a sci-fi film',
      category: 'Environment Design',
      tags: ['Sci-Fi', 'Environment', 'Concept Art'],
      isPublic: true,
    },
    {
      id: 3,
      title: 'Character Portrait',
      description: 'Portrait commission for a client',
      category: 'Portrait',
      tags: ['Portrait', 'Character', 'Commission'],
      isPublic: true,
    },
    {
      id: 4,
      title: 'Book Cover Illustration',
      description: 'Cover art for a fantasy novel',
      category: 'Illustration',
      tags: ['Book Cover', 'Fantasy', 'Illustration'],
      isPublic: true,
    },
    {
      id: 5,
      title: 'Creature Design',
      description: 'Creature concept for a game project',
      category: 'Creature Design',
      tags: ['Creature', 'Monster', 'Concept Art'],
      isPublic: false,
    },
    {
      id: 6,
      title: 'Character Turnaround',
      description: 'Character turnaround for animation',
      category: 'Character Design',
      tags: ['Character', 'Animation', 'Turnaround'],
      isPublic: true,
    },
    {
      id: 7,
      title: 'UI Design for Game',
      description: 'User interface design for a mobile game',
      category: 'UI Design',
      tags: ['UI', 'Game', 'Interface'],
      isPublic: true,
    },
    {
      id: 8,
      title: 'Comic Page',
      description: 'Page from a personal comic project',
      category: 'Comics',
      tags: ['Comic', 'Sequential Art', 'Storytelling'],
      isPublic: true,
    },
  ];

  const categories = [
    'All',
    'Character Design',
    'Environment Design',
    'Concept Art',
    'Illustration',
    'Comics',
    'UI Design',
    'Portrait',
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Portfolio</h1>
            <p className="text-gray-600">Manage and showcase your artwork</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/artist/portfolio/new"
              className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
            >
              Add New Item
            </Link>
          </div>
        </div>

        {/* Filter and Search */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search portfolio items..."
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
                <option>Sort by: Newest</option>
                <option>Sort by: Oldest</option>
                <option>Sort by: Title A-Z</option>
                <option>Sort by: Title Z-A</option>
              </select>
            </div>
            <div className="w-full md:w-48">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option>Visibility: All</option>
                <option>Public Only</option>
                <option>Private Only</option>
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                {!item.isPublic && (
                  <div className="absolute top-2 right-2 px-2 py-1 bg-gray-800 text-white text-xs font-medium rounded">
                    Private
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-between">
                  <Link
                    href={`/artist/portfolio/${item.id}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/artist/portfolio/${item.id}/edit`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Item Card */}
        <div className="mt-6">
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Add new portfolio item</h3>
            <p className="mt-1 text-sm text-gray-500">
              Showcase your best work to attract potential clients
            </p>
            <div className="mt-6">
              <Link
                href="/artist/portfolio/new"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Add New Item
              </Link>
            </div>
          </div>
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
