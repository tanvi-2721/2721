import React, { useState } from 'react';
import { Plus, Search, Filter, Eye, Edit, Trash2, MoreVertical } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Modal from '../ui/Modal';
import ClientForm from '../forms/ClientForm';

const Clients: React.FC = () => {
  const [showAddClient, setShowAddClient] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'detail'

  const clients = [
    {
      id: 1,
      name: 'TechCorp Inc',
      contactName: 'Sarah Johnson',
      email: 'sarah@techcorp.com',
      phone: '+1 (555) 123-4567',
      status: 'Active',
      monthlySpend: 24500,
      roi: 5.2,
      accountManager: 'John Smith',
      joinDate: '2024-01-15',
      campaigns: 8,
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      name: 'HealthPlus Medical',
      contactName: 'Dr. Michael Chen',
      email: 'mchen@healthplus.com',
      phone: '+1 (555) 234-5678',
      status: 'Active',
      monthlySpend: 18200,
      roi: 4.8,
      accountManager: 'Emma Davis',
      joinDate: '2024-02-01',
      campaigns: 5,
      lastActivity: '1 day ago'
    },
    {
      id: 3,
      name: 'RetailMax Solutions',
      contactName: 'Lisa Rodriguez',
      email: 'lisa@retailmax.com',
      phone: '+1 (555) 345-6789',
      status: 'Active',
      monthlySpend: 15800,
      roi: 3.9,
      accountManager: 'John Smith',
      joinDate: '2024-01-30',
      campaigns: 6,
      lastActivity: '5 hours ago'
    },
    {
      id: 4,
      name: 'EcoGreen Energy',
      contactName: 'David Wilson',
      email: 'david@ecogreen.com',
      phone: '+1 (555) 456-7890',
      status: 'Paused',
      monthlySpend: 12300,
      roi: 4.1,
      accountManager: 'Emma Davis',
      joinDate: '2024-03-10',
      campaigns: 3,
      lastActivity: '1 week ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'green';
      case 'paused': return 'yellow';
      case 'inactive': return 'red';
      default: return 'gray';
    }
  };

  const renderClientsList = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">All Clients</h3>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search clients..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter size={16} />
              Filter
            </Button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Spend</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Account Manager</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Campaigns</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-900">{client.name}</div>
                    <div className="text-sm text-gray-500">{client.contactName}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge color={getStatusColor(client.status)} variant="soft">
                    {client.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  ${client.monthlySpend.toLocaleString()}
                </td>
                <td className="px-6 py-4 font-medium text-green-600">
                  {client.roi}x
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {client.accountManager}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {client.campaigns}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setSelectedClient(client);
                        setViewMode('detail');
                      }}
                      className="p-1 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    >
                      <Eye size={16} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors">
                      <Edit size={16} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderClientDetail = () => (
    selectedClient && (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                setViewMode('list');
                setSelectedClient(null);
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Clients
            </button>
            <h2 className="text-2xl font-bold text-gray-900">{selectedClient.name}</h2>
            <Badge color={getStatusColor(selectedClient.status)} variant="soft">
              {selectedClient.status}
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Edit size={16} />
              Edit
            </Button>
            <Button variant="primary" size="sm">
              View Portal
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Information</h3>
            <div className="space-y-3">
              <div>
                <div className="text-sm font-medium text-gray-500">Contact Person</div>
                <div className="text-gray-900">{selectedClient.contactName}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Email</div>
                <div className="text-gray-900">{selectedClient.email}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Phone</div>
                <div className="text-gray-900">{selectedClient.phone}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Account Manager</div>
                <div className="text-gray-900">{selectedClient.accountManager}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Join Date</div>
                <div className="text-gray-900">{new Date(selectedClient.joinDate).toLocaleDateString()}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-gray-500">Monthly Spend</div>
                <div className="text-2xl font-bold text-gray-900">${selectedClient.monthlySpend.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Return on Investment</div>
                <div className="text-2xl font-bold text-green-600">{selectedClient.roi}x</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Active Campaigns</div>
                <div className="text-2xl font-bold text-gray-900">{selectedClient.campaigns}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-900">Report Generated</div>
                <div className="text-xs text-gray-500">2 hours ago</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-900">Campaign Updated</div>
                <div className="text-xs text-gray-500">1 day ago</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-900">Invoice Paid</div>
                <div className="text-xs text-gray-500">3 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );

  return (
    <div className="space-y-6">
      {viewMode === 'list' && (
        <>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
              <p className="text-gray-600 mt-1">Manage your client relationships and performance.</p>
            </div>
            <Button
              variant="primary"
              onClick={() => setShowAddClient(true)}
            >
              <Plus size={16} />
              Add Client
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Clients</h3>
              <div className="text-3xl font-bold text-blue-600">{clients.length}</div>
              <div className="text-sm text-gray-500 mt-1">+2 this month</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Clients</h3>
              <div className="text-3xl font-bold text-green-600">
                {clients.filter(c => c.status === 'Active').length}
              </div>
              <div className="text-sm text-gray-500 mt-1">87.5% active rate</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Avg. Monthly Spend</h3>
              <div className="text-3xl font-bold text-purple-600">
                ${Math.round(clients.reduce((acc, c) => acc + c.monthlySpend, 0) / clients.length).toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 mt-1">per client</div>
            </div>
          </div>

          {renderClientsList()}
        </>
      )}

      {viewMode === 'detail' && renderClientDetail()}

      <Modal isOpen={showAddClient} onClose={() => setShowAddClient(false)} title="Add New Client">
        <ClientForm onSubmit={() => setShowAddClient(false)} />
      </Modal>
    </div>
  );
};

export default Clients;