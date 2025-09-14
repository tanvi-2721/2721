import React, { useState } from 'react';
import { Save, Plus, Trash2, Edit, Users, Building, Bell, CreditCard, Shield, Globe } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('organization');

  const tabs = [
    { id: 'organization', label: 'Organization', icon: Building },
    { id: 'users', label: 'Users & Roles', icon: Users },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'integrations', label: 'API Keys', icon: Globe }
  ];

  const users = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@agency.com',
      role: 'Account Manager',
      status: 'Active',
      lastLogin: '2024-06-16T10:30:00Z'
    },
    {
      id: 2,
      name: 'Emma Davis',
      email: 'emma@agency.com',
      role: 'Account Manager',
      status: 'Active',
      lastLogin: '2024-06-16T09:15:00Z'
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'michael@agency.com',
      role: 'Campaign Manager',
      status: 'Active',
      lastLogin: '2024-06-15T16:45:00Z'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah@agency.com',
      role: 'Finance',
      status: 'Active',
      lastLogin: '2024-06-16T08:30:00Z'
    }
  ];

  const renderOrganizationSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Organization Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
            <input
              type="text"
              defaultValue="Digital Marketing Pro"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
            <input
              type="url"
              defaultValue="https://www.digitalmarketingpro.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="marketing">Digital Marketing</option>
              <option value="advertising">Advertising</option>
              <option value="consulting">Consulting</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="UTC-8">Pacific Time (UTC-8)</option>
              <option value="UTC-5">Eastern Time (UTC-5)</option>
              <option value="UTC+0">GMT (UTC+0)</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Address</label>
          <textarea
            rows={3}
            defaultValue="123 Business Ave, Suite 100, San Francisco, CA 94105"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mt-6 flex justify-end">
          <Button variant="primary">
            <Save size={16} />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );

  const renderUsersSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Team Members</h3>
          <p className="text-sm text-gray-500">Manage user access and permissions</p>
        </div>
        <Button variant="primary">
          <Plus size={16} />
          Invite User
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge color="blue" variant="soft">{user.role}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Badge color="green" variant="soft">{user.status}</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(user.lastLogin).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-500 hover:text-blue-600 rounded">
                        <Edit size={16} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-red-600 rounded">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Role Permissions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">Account Manager</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>• Manage clients and campaigns</li>
                <li>• Generate and view reports</li>
                <li>• Create and send invoices</li>
                <li>• View all performance data</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Campaign Manager</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>• Create and manage campaigns</li>
                <li>• View performance metrics</li>
                <li>• Manage campaign tasks</li>
                <li>• Limited client access</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">Finance</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>• Create and manage invoices</li>
                <li>• View financial reports</li>
                <li>• Process payments</li>
                <li>• Access billing information</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Org Admin</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>• Full system access</li>
                <li>• Manage users and permissions</li>
                <li>• Configure integrations</li>
                <li>• Billing and subscription</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Notifications</h3>
        <div className="space-y-4">
          {[
            { id: 'campaign-approval', label: 'Campaign approval requests', defaultValue: true },
            { id: 'report-ready', label: 'Reports are ready for download', defaultValue: true },
            { id: 'sync-failures', label: 'Data sync failures', defaultValue: true },
            { id: 'invoice-updates', label: 'Invoice status updates', defaultValue: true },
            { id: 'budget-alerts', label: 'Campaign budget alerts', defaultValue: true },
            { id: 'performance-alerts', label: 'Performance threshold alerts', defaultValue: false },
            { id: 'weekly-summary', label: 'Weekly performance summary', defaultValue: true },
            { id: 'client-updates', label: 'Client portal activity', defaultValue: false }
          ].map((notification) => (
            <div key={notification.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div>
                <div className="font-medium text-gray-900">{notification.label}</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={notification.defaultValue}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Button variant="primary">
            <Save size={16} />
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'organization':
        return renderOrganizationSettings();
      case 'users':
        return renderUsersSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'billing':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing & Subscription</h3>
            <p className="text-gray-600">Billing settings and subscription management will be implemented here.</p>
          </div>
        );
      case 'security':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
            <p className="text-gray-600">Security and authentication settings will be implemented here.</p>
          </div>
        );
      case 'integrations':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">API Keys & Webhooks</h3>
            <p className="text-gray-600">API key management and webhook configuration will be implemented here.</p>
          </div>
        );
      default:
        return renderOrganizationSettings();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your organization settings and preferences.</p>
      </div>

      <div className="flex space-x-6">
        <div className="w-64 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <nav className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;