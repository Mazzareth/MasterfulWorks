import Link from 'next/link';

export default function ClientCommissions() {
  // Mock data for demonstration
  const pendingRequests = [
    {
      id: 1,
      artist: 'Jane Cooper',
      type: 'Character Portrait - Full Color',
      description: 'Portrait of my D&D character, a half-elf ranger with green eyes and silver hair.',
      budget: '$80-120',
      requestedDate: '2025-04-12',
      status: 'pending',
    },
    {
      id: 2,
      artist: 'Alex Morgan',
      type: 'Environment Concept',
      description: 'Sci-fi cityscape concept for my indie game project.',
      budget: '$150-200',
      requestedDate: '2025-04-10',
      status: 'pending',
    },
  ];

  const activeCommissions = [
    {
      id: 3,
      artist: 'Sarah Wilson',
      type: 'Book Cover Illustration',
      description: 'Fantasy book cover featuring a dragon and a castle.',
      startDate: '2025-04-05',
      dueDate: '2025-04-20',
      progress: 60,
      status: 'in_progress',
    },
    {
      id: 4,
      artist: 'Michael Brown',
      type: 'Character Portrait - Sketch',
      description: 'Sketch portrait of my OC character.',
      startDate: '2025-04-08',
      dueDate: '2025-04-15',
      progress: 80,
      status: 'revision_requested',
      revisionNote: 'Could you make the hair a bit longer and add more detail to the eyes?',
    },
  ];

  const completedCommissions = [
    {
      id: 5,
      artist: 'Emily Davis',
      type: 'Logo Design',
      description: 'Logo for a pet grooming business.',
      completedDate: '2025-04-01',
      status: 'completed',
    },
    {
      id: 6,
      artist: 'David Wilson',
      type: 'Character Design - Full Body',
      description: 'Full body design of a fantasy warrior character.',
      completedDate: '2025-03-25',
      status: 'completed',
    },
    {
      id: 7,
      artist: 'Lisa Johnson',
      type: 'Environment Concept',
      description: 'Fantasy forest environment concept.',
      completedDate: '2025-03-20',
      status: 'completed',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Commissions</h1>
            <p className="text-gray-600">Track and manage your commission requests</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/discover"
              className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
            >
              Find Artists
            </Link>
          </div>
        </div>

        {/* Pending Requests */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Pending Requests</h2>
          </div>
          {pendingRequests.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {pendingRequests.map((request) => (
                <div key={request.id} className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-medium text-gray-900">{request.type}</h3>
                      <p className="text-sm text-gray-600 mt-1">Artist: {request.artist}</p>
                      <p className="text-sm text-gray-600 mt-1">Budget: {request.budget}</p>
                      <p className="text-sm text-gray-600 mt-1">Requested: {request.requestedDate}</p>
                      <p className="text-sm text-gray-700 mt-2">{request.description}</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Link
                        href={`/client/commissions/${request.id}`}
                        className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 text-center"
                      >
                        View Details
                      </Link>
                      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                        Cancel Request
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-gray-500">No pending commission requests</p>
            </div>
          )}
        </div>

        {/* Active Commissions */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Active Commissions</h2>
          </div>
          {activeCommissions.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {activeCommissions.map((commission) => (
                <div key={commission.id} className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium text-gray-900">{commission.type}</h3>
                        {commission.status === 'revision_requested' && (
                          <span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                            Revision Requested
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Artist: {commission.artist}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Timeline: {commission.startDate} to {commission.dueDate}
                      </p>
                      <p className="text-sm text-gray-700 mt-2">{commission.description}</p>
                      {commission.revisionNote && (
                        <div className="mt-2 p-2 bg-yellow-50 border border-yellow-100 rounded-md">
                          <p className="text-xs font-medium text-yellow-800">Revision Note:</p>
                          <p className="text-sm text-gray-700">{commission.revisionNote}</p>
                        </div>
                      )}
                      <div className="mt-4">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-700">Progress:</span>
                          <span className="ml-2 text-sm text-gray-600">{commission.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-primary-600 h-2 rounded-full"
                            style={{ width: `${commission.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Link
                        href={`/client/commissions/${commission.id}`}
                        className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 text-center"
                      >
                        View Details
                      </Link>
                      <button className="px-4 py-2 text-sm font-medium text-primary-600 bg-white border border-primary-600 rounded-md hover:bg-primary-50">
                        Contact Artist
                      </button>
                      {commission.status !== 'revision_requested' && (
                        <button className="px-4 py-2 text-sm font-medium text-yellow-600 bg-white border border-yellow-600 rounded-md hover:bg-yellow-50">
                          Request Revision
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-gray-500">No active commissions</p>
            </div>
          )}
        </div>

        {/* Completed Commissions */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Completed Commissions</h2>
            <Link
              href="/client/commissions/completed"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              View All
            </Link>
          </div>
          {completedCommissions.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {completedCommissions.slice(0, 3).map((commission) => (
                <div key={commission.id} className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-medium text-gray-900">{commission.type}</h3>
                      <p className="text-sm text-gray-600 mt-1">Artist: {commission.artist}</p>
                      <p className="text-sm text-gray-600 mt-1">Completed: {commission.completedDate}</p>
                      <p className="text-sm text-gray-700 mt-2">{commission.description}</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Link
                        href={`/client/commissions/${commission.id}`}
                        className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 text-center"
                      >
                        View Details
                      </Link>
                      <Link
                        href={`/artist/profile/${commission.id}`}
                        className="px-4 py-2 text-sm font-medium text-primary-600 bg-white border border-primary-600 rounded-md hover:bg-primary-50 text-center"
                      >
                        View Artist
                      </Link>
                      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                        Leave Review
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-gray-500">No completed commissions</p>
            </div>
          )}
        </div>

        {/* Find Artists CTA */}
        <div className="mt-8 bg-primary-50 border border-primary-100 rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-medium text-primary-900">Looking for more artwork?</h3>
              <p className="text-primary-700 mt-1">
                Browse our talented artists and find the perfect match for your next commission.
              </p>
            </div>
            <Link
              href="/discover"
              className="px-6 py-3 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 whitespace-nowrap"
            >
              Find Artists
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
