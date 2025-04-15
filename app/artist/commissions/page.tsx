import Link from 'next/link';

export default function ArtistCommissions() {
  // Mock data for demonstration
  const commissionRequests = [
    {
      id: 1,
      client: 'John Doe',
      type: 'Character Portrait - Full Color',
      description: 'I need a portrait of my D&D character, a half-elf ranger with green eyes and silver hair.',
      budget: '$80-120',
      requestedDate: '2025-04-12',
      status: 'pending',
    },
    {
      id: 2,
      client: 'Sarah Miller',
      type: 'Environment Concept',
      description: 'Looking for a sci-fi cityscape concept for my indie game project.',
      budget: '$150-200',
      requestedDate: '2025-04-10',
      status: 'pending',
    },
    {
      id: 3,
      client: 'Mike Johnson',
      type: 'Character Design - Full Body',
      description: 'Need a full body design of an original superhero character.',
      budget: '$100-150',
      requestedDate: '2025-04-08',
      status: 'pending',
    },
  ];

  const activeCommissions = [
    {
      id: 4,
      client: 'Emily Davis',
      type: 'Book Cover Illustration',
      description: 'Fantasy book cover featuring a dragon and a castle.',
      startDate: '2025-04-05',
      dueDate: '2025-04-20',
      progress: 60,
      status: 'in_progress',
    },
    {
      id: 5,
      client: 'Alex Wilson',
      type: 'Character Portrait - Sketch',
      description: 'Sketch portrait of my OC character.',
      startDate: '2025-04-08',
      dueDate: '2025-04-15',
      progress: 80,
      status: 'revision_needed',
    },
  ];

  const completedCommissions = [
    {
      id: 6,
      client: 'Lisa Thompson',
      type: 'Logo Design',
      description: 'Logo for a pet grooming business.',
      completedDate: '2025-04-01',
      status: 'completed',
    },
    {
      id: 7,
      client: 'Robert Garcia',
      type: 'Character Design - Full Body',
      description: 'Full body design of a fantasy warrior character.',
      completedDate: '2025-03-25',
      status: 'completed',
    },
    {
      id: 8,
      client: 'Jennifer Lee',
      type: 'Environment Concept',
      description: 'Fantasy forest environment concept.',
      completedDate: '2025-03-20',
      status: 'completed',
    },
  ];

  const commissionTypes = [
    {
      id: 1,
      title: 'Character Portrait - Sketch',
      priceRange: '$40-60',
      turnaround: '3-5 days',
      active: true,
    },
    {
      id: 2,
      title: 'Character Portrait - Full Color',
      priceRange: '$80-120',
      turnaround: '5-7 days',
      active: true,
    },
    {
      id: 3,
      title: 'Character Design - Full Body',
      priceRange: '$100-150',
      turnaround: '7-10 days',
      active: true,
    },
    {
      id: 4,
      title: 'Environment Concept',
      priceRange: '$150-200',
      turnaround: '10-14 days',
      active: true,
    },
    {
      id: 5,
      title: 'Book Cover Illustration',
      priceRange: '$200-300',
      turnaround: '14-21 days',
      active: true,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Commission Management</h1>
            <p className="text-gray-600">Manage your commission requests and ongoing work</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/artist/commissions/types/new"
              className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
            >
              Create Commission Type
            </Link>
          </div>
        </div>

        {/* Commission Requests */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Pending Requests</h2>
          </div>
          {commissionRequests.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {commissionRequests.map((request) => (
                <div key={request.id} className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-medium text-gray-900">{request.type}</h3>
                      <p className="text-sm text-gray-600 mt-1">From: {request.client}</p>
                      <p className="text-sm text-gray-600 mt-1">Budget: {request.budget}</p>
                      <p className="text-sm text-gray-600 mt-1">Requested: {request.requestedDate}</p>
                      <p className="text-sm text-gray-700 mt-2">{request.description}</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Link
                        href={`/artist/commissions/requests/${request.id}`}
                        className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 text-center"
                      >
                        View Details
                      </Link>
                      <button className="px-4 py-2 text-sm font-medium text-primary-600 bg-white border border-primary-600 rounded-md hover:bg-primary-50">
                        Accept
                      </button>
                      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                        Decline
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
                        {commission.status === 'revision_needed' && (
                          <span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                            Revision Needed
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Client: {commission.client}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Timeline: {commission.startDate} to {commission.dueDate}
                      </p>
                      <p className="text-sm text-gray-700 mt-2">{commission.description}</p>
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
                        href={`/artist/commissions/${commission.id}`}
                        className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 text-center"
                      >
                        View Details
                      </Link>
                      <button className="px-4 py-2 text-sm font-medium text-primary-600 bg-white border border-primary-600 rounded-md hover:bg-primary-50">
                        Update Progress
                      </button>
                      <button className="px-4 py-2 text-sm font-medium text-green-600 bg-white border border-green-600 rounded-md hover:bg-green-50">
                        Mark Complete
                      </button>
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

        {/* Commission Types */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Your Commission Types</h2>
            <Link
              href="/artist/commissions/types"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              Manage All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price Range
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Turnaround
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {commissionTypes.map((type) => (
                  <tr key={type.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{type.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{type.priceRange}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{type.turnaround}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          type.active
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {type.active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href={`/artist/commissions/types/${type.id}/edit`}
                        className="text-primary-600 hover:text-primary-900 mr-4"
                      >
                        Edit
                      </Link>
                      <button className="text-gray-600 hover:text-gray-900">
                        {type.active ? 'Disable' : 'Enable'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Completed Commissions */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Completed Commissions</h2>
            <Link
              href="/artist/commissions/completed"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              View All
            </Link>
          </div>
          {completedCommissions.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {completedCommissions.slice(0, 3).map((commission) => (
                <div key={commission.id} className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{commission.type}</h3>
                      <p className="text-sm text-gray-600 mt-1">Client: {commission.client}</p>
                      <p className="text-sm text-gray-600 mt-1">Completed: {commission.completedDate}</p>
                      <p className="text-sm text-gray-700 mt-2">{commission.description}</p>
                    </div>
                    <Link
                      href={`/artist/commissions/${commission.id}`}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      View Details
                    </Link>
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
      </div>
    </div>
  );
}
