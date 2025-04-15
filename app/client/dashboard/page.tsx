import Link from 'next/link';

export default function ClientDashboard() {
  // Mock data for demonstration
  const pendingCommissions = 2;
  const activeCommissions = 1;
  const completedCommissions = 5;
  const favoriteArtists = 8;
  const recentActivity = [
    { id: 1, type: 'commission_request_sent', artist: 'Jane Cooper', date: '2 hours ago', status: 'pending' },
    { id: 2, type: 'commission_completed', artist: 'Alex Morgan', date: '1 day ago', status: 'completed' },
    { id: 3, type: 'commission_started', artist: 'Sarah Wilson', date: '3 days ago', status: 'in_progress' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Client Dashboard</h1>
            <p className="text-gray-600">Welcome back, Client Name</p>
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

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Pending Requests</h3>
            <p className="text-3xl font-bold text-gray-900">{pendingCommissions}</p>
            <Link href="/client/commissions" className="text-primary-600 text-sm font-medium mt-2 inline-block">
              View pending requests →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Active Commissions</h3>
            <p className="text-3xl font-bold text-gray-900">{activeCommissions}</p>
            <Link href="/client/commissions" className="text-primary-600 text-sm font-medium mt-2 inline-block">
              View active commissions →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Completed Commissions</h3>
            <p className="text-3xl font-bold text-gray-900">{completedCommissions}</p>
            <Link href="/client/commissions" className="text-primary-600 text-sm font-medium mt-2 inline-block">
              View commission history →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Favorite Artists</h3>
            <p className="text-3xl font-bold text-gray-900">{favoriteArtists}</p>
            <Link href="/client/favorites" className="text-primary-600 text-sm font-medium mt-2 inline-block">
              View favorites →
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {activity.type === 'commission_request_sent' && 'Commission request sent to '}
                          {activity.type === 'commission_completed' && 'Commission completed by '}
                          {activity.type === 'commission_started' && 'Commission started by '}
                          <span className="font-semibold">{activity.artist}</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                      </div>
                      <div>
                        {activity.status === 'pending' && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                            Pending
                          </span>
                        )}
                        {activity.status === 'in_progress' && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                            In Progress
                          </span>
                        )}
                        {activity.status === 'completed' && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <Link href="/client/commissions" className="text-primary-600 text-sm font-medium">
                  View all activity →
                </Link>
              </div>
            </div>

            {/* Active Commissions */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Active Commissions</h2>
              </div>
              <div className="px-6 py-4">
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">Character Portrait - Full Color</h3>
                        <p className="text-sm text-gray-600 mt-1">Artist: Jane Cooper</p>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        In Progress
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Started: Apr 10</span>
                        <span>Expected: Apr 20</span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Link
                        href="/client/commissions/1"
                        className="text-primary-600 text-sm font-medium"
                      >
                        View details →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <Link href="/client/commissions" className="text-primary-600 text-sm font-medium">
                  View all commissions →
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile Summary */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Profile Summary</h2>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Client Name</h3>
                    <p className="text-sm text-gray-600">Art Enthusiast</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Profile Completion</span>
                    <span className="text-gray-900">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/client/profile" className="text-primary-600 text-sm font-medium">
                    Complete your profile →
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
              </div>
              <div className="px-6 py-4">
                <div className="space-y-3">
                  <Link 
                    href="/discover" 
                    className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                  >
                    Find Artists
                  </Link>
                  <Link 
                    href="/client/references/new" 
                    className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Upload Reference
                  </Link>
                  <Link 
                    href="/client/profile/edit" 
                    className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Edit Profile
                  </Link>
                </div>
              </div>
            </div>

            {/* Favorite Artists */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Favorite Artists</h2>
              </div>
              <div className="px-6 py-4">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Jane Cooper</p>
                      <p className="text-xs text-gray-500">Digital Artist</p>
                    </div>
                    <Link href="/artist/profile/1" className="ml-auto text-primary-600 text-xs font-medium">
                      View
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Alex Morgan</p>
                      <p className="text-xs text-gray-500">Illustrator</p>
                    </div>
                    <Link href="/artist/profile/2" className="ml-auto text-primary-600 text-xs font-medium">
                      View
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Sarah Wilson</p>
                      <p className="text-xs text-gray-500">Character Artist</p>
                    </div>
                    <Link href="/artist/profile/3" className="ml-auto text-primary-600 text-xs font-medium">
                      View
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <Link href="/client/favorites" className="text-primary-600 text-sm font-medium">
                  View all favorites →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
