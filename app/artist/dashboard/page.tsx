import Link from 'next/link';

export default function ArtistDashboard() {
  // Mock data for demonstration
  const pendingCommissions = 3;
  const activeCommissions = 2;
  const completedCommissions = 15;
  const portfolioItems = 8;
  const commissionTypes = 4;
  const recentActivity = [
    { id: 1, type: 'commission_request', client: 'John Doe', date: '2 hours ago', status: 'pending' },
    { id: 2, type: 'commission_completed', client: 'Jane Smith', date: '1 day ago', status: 'completed' },
    { id: 3, type: 'commission_started', client: 'Mike Johnson', date: '3 days ago', status: 'in_progress' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Artist Dashboard</h1>
            <p className="text-gray-600">Welcome back, Artist Name</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="inline-flex items-center">
              <span className="mr-2 text-sm font-medium text-gray-700">Commission Status:</span>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
                Open for Commissions
              </span>
            </div>
            <button className="ml-4 px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700">
              Toggle Status
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Pending Requests</h3>
            <p className="text-3xl font-bold text-gray-900">{pendingCommissions}</p>
            <Link href="/artist/commissions" className="text-primary-600 text-sm font-medium mt-2 inline-block">
              View all requests →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Active Commissions</h3>
            <p className="text-3xl font-bold text-gray-900">{activeCommissions}</p>
            <Link href="/artist/commissions" className="text-primary-600 text-sm font-medium mt-2 inline-block">
              View active work →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Portfolio Items</h3>
            <p className="text-3xl font-bold text-gray-900">{portfolioItems}</p>
            <Link href="/artist/portfolio" className="text-primary-600 text-sm font-medium mt-2 inline-block">
              Manage portfolio →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Commission Types</h3>
            <p className="text-3xl font-bold text-gray-900">{commissionTypes}</p>
            <Link href="/artist/commissions" className="text-primary-600 text-sm font-medium mt-2 inline-block">
              Manage offerings →
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
                          {activity.type === 'commission_request' && 'New commission request from '}
                          {activity.type === 'commission_completed' && 'Commission completed for '}
                          {activity.type === 'commission_started' && 'Commission started for '}
                          <span className="font-semibold">{activity.client}</span>
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
                <Link href="/artist/commissions" className="text-primary-600 text-sm font-medium">
                  View all activity →
                </Link>
              </div>
            </div>

            {/* Commission Queue */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Commission Queue</h2>
              </div>
              <div className="px-6 py-4">
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">Character Portrait - Full Color</h3>
                        <p className="text-sm text-gray-600 mt-1">Client: John Doe</p>
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
                        <span>Due: Apr 20</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">Environment Concept</h3>
                        <p className="text-sm text-gray-600 mt-1">Client: Jane Smith</p>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        In Progress
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Started: Apr 12</span>
                        <span>Due: Apr 25</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <Link href="/artist/commissions" className="text-primary-600 text-sm font-medium">
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
                    <h3 className="font-medium text-gray-900">Artist Name</h3>
                    <p className="text-sm text-gray-600">Digital Artist</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Profile Completion</span>
                    <span className="text-gray-900">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/artist/profile" className="text-primary-600 text-sm font-medium">
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
                    href="/artist/portfolio/new" 
                    className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                  >
                    Add Portfolio Item
                  </Link>
                  <Link 
                    href="/artist/commissions/new" 
                    className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Create Commission Type
                  </Link>
                  <Link 
                    href="/artist/profile/edit" 
                    className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Edit Profile
                  </Link>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Statistics</h2>
              </div>
              <div className="px-6 py-4">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Total Commissions</span>
                    <span className="text-sm font-medium text-gray-900">{completedCommissions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Portfolio Views</span>
                    <span className="text-sm font-medium text-gray-900">324</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Favorited By</span>
                    <span className="text-sm font-medium text-gray-900">42 clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
