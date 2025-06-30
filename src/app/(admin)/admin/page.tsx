import React from "react";

const Page = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-dark-400">Dashboard</h1>
        <p className="text-light-500 mt-2">
          Overview of your library management system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stat">
          <div className="stat-info">
            <div>
              <p className="stat-label">Total Books</p>
              <p className="stat-count">1,234</p>
            </div>
            <div className="size-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-xl">📚</span>
            </div>
          </div>
        </div>

        <div className="stat">
          <div className="stat-info">
            <div>
              <p className="stat-label">Active Users</p>
              <p className="stat-count">856</p>
            </div>
            <div className="size-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xl">👥</span>
            </div>
          </div>
        </div>

        <div className="stat">
          <div className="stat-info">
            <div>
              <p className="stat-label">Books Borrowed</p>
              <p className="stat-count">342</p>
            </div>
            <div className="size-12 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-orange-600 text-xl">📖</span>
            </div>
          </div>
        </div>

        <div className="stat">
          <div className="stat-info">
            <div>
              <p className="stat-label">Pending Requests</p>
              <p className="stat-count">23</p>
            </div>
            <div className="size-12 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 text-xl">⏳</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6">
          <h3 className="text-lg font-semibold text-dark-400 mb-4">
            Recent Activities
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-light-300 rounded-lg">
              <div className="size-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">📚</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-dark-400">
                  New book added: &ldquo;The Great Gatsby&rdquo;
                </p>
                <p className="text-xs text-light-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-light-300 rounded-lg">
              <div className="size-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">👤</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-dark-400">
                  New user registered: John Doe
                </p>
                <p className="text-xs text-light-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-light-300 rounded-lg">
              <div className="size-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-sm">📖</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-dark-400">
                  Book borrowed: &ldquo;To Kill a Mockingbird&rdquo;
                </p>
                <p className="text-xs text-light-500">6 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h3 className="text-lg font-semibold text-dark-400 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="add-new-book_btn">
              <div>
                <span className="text-primary-admin text-xl">+</span>
              </div>
              <div>
                <p>Add New Book</p>
                <p className="text-sm text-light-500">Create a new book entry</p>
              </div>
            </button>
            <button className="add-new-book_btn">
              <div>
                <span className="text-primary-admin text-xl">👥</span>
              </div>
              <div>
                <p>Manage Users</p>
                <p className="text-sm text-light-500">View and edit users</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
