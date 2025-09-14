import React, { useState } from 'react';
import { Download, CheckCircle, Clock, FileText, BarChart3, DollarSign, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const ClientPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock client data
  const clientData = {
    name: 'TechCorp Inc',
    accountManager: 'John Smith',
    email: 'john@agency.com'
  };

  const kpis = [
    { label: 'Total Spend', value: '$24,500', change: '+18%', trend: 'up' },
    { label: 'Conversions', value: '324', change: '+25%', trend: 'up' },
    { label: 'Return on Ad Spend', value: '5.2x', change: '+12%', trend: 'up' },
    { label: 'Cost per Conversion', value: '$75.62', change: '-8%', trend: 'down' }
  ];

  const reports = [
    {
      id: 1,
      name: 'Q2 Performance Report',
      type: 'Performance',
      status: 'Ready',
      createdDate: '2024-06-15',
      dateRange: 'Apr 1 - Jun 30, 2024'
    },
    {
      id: 2,
      name: 'May Campaign Analysis',
      type: 'Campaign',
      status: 'Ready',
      createdDate: '2024-06-01',
      dateRange: 'May 1 - May 31, 2024'
    },
    {
      id: 3,
      name: 'Brand Awareness Study',
      type: 'Analysis',
      status: 'Ready',
      createdDate: '2024-05-15',
      dateRange: 'Apr 1 - Apr 30, 2024'
    }
  ];

  const approvals = [
    {
      id: 1,
      title: 'Q3 Campaign Creative Assets',
      description: 'New banner ads and video creatives for the upcoming quarter',
      type: 'Creative',
      status: 'Pending',
      dueDate: '2024-06-20'
    },
    {
      id: 2,
      title: 'Landing Page Updates',
      description: 'Proposed changes to improve conversion rates',
      type: 'Website',
      status: 'Pending',
      dueDate: '2024-06-18'
    }
  ];

  const invoices = [
    {
      id: 'INV-2024-001',
      description: 'Q2 Digital Marketing Services',
      amount: 27500,
      status: 'Paid',
      dueDate: '2024-06-30',
      paidDate: '2024-06-15'
    },
    {
      id: 'INV-2024-002',
      description: 'May Campaign Management',
      amount: 16500,
      status: 'Sent',
      dueDate: '2024-07-10',
      paidDate: null
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500">{kpi.label}</div>
                <div className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</div>
              </div>
              <div className={`flex items-center text-sm ${
                kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp size={16} className={kpi.trend === 'down' ? 'rotate-180' : ''} />
                <span className="ml-1">{kpi.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Performance</h3>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <BarChart3 size={48} className="mx-auto mb-2" />
              <p>Performance chart will be displayed here</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">Brand Awareness Campaign</div>
                <div className="text-sm text-gray-500">Google Ads • Active</div>
              </div>
              <Badge color="green" variant="soft">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">Lead Generation Campaign</div>
                <div className="text-sm text-gray-500">Facebook Ads • Active</div>
              </div>
              <Badge color="blue" variant="soft">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">Retargeting Campaign</div>
                <div className="text-sm text-gray-500">Google Ads • Paused</div>
              </div>
              <Badge color="yellow" variant="soft">Paused</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Available Reports</h3>
          <p className="text-sm text-gray-500 mt-1">Download your performance reports and analytics</p>
        </div>
        <div className="divide-y divide-gray-200">
          {reports.map((report) => (
            <div key={report.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-3">
                  <FileText className="text-blue-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900">{report.name}</h4>
                    <div className="text-sm text-gray-500 mt-1">
                      {report.type} • {report.dateRange}
                    </div>
                    <div className="text-sm text-gray-500">
                      Generated on {new Date(report.createdDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge color="green" variant="soft" size="sm">
                    {report.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Download size={14} />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderApprovals = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Pending Approvals</h3>
          <p className="text-sm text-gray-500 mt-1">Review and approve campaign deliverables</p>
        </div>
        <div className="divide-y divide-gray-200">
          {approvals.map((approval) => (
            <div key={approval.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-medium text-gray-900">{approval.title}</h4>
                    <Badge color="yellow" variant="soft" size="sm">
                      {approval.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mt-2">{approval.description}</p>
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      Due: {new Date(approval.dueDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {approval.type}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-6">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200">
                    Reject
                  </Button>
                  <Button variant="primary" size="sm">
                    <CheckCircle size={14} />
                    Approve
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {approvals.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
          <h3 className="text-lg font-medium text-gray-900 mb-2">All Caught Up!</h3>
          <p className="text-gray-500">No pending approvals at the moment.</p>
        </div>
      )}
    </div>
  );

  const renderInvoices = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Invoices</h3>
          <p className="text-sm text-gray-500 mt-1">View and download your invoices</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{invoice.id}</div>
                      <div className="text-sm text-gray-500">{invoice.description}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    ${invoice.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <Badge 
                      color={invoice.status === 'Paid' ? 'green' : 'blue'} 
                      variant="soft"
                    >
                      {invoice.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {new Date(invoice.dueDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <Button variant="outline" size="sm">
                      <Download size={14} />
                      Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'approvals', label: 'Approvals', icon: CheckCircle },
    { id: 'invoices', label: 'Invoices', icon: DollarSign }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'reports':
        return renderReports();
      case 'approvals':
        return renderApprovals();
      case 'invoices':
        return renderInvoices();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Client Portal Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Client Portal</h1>
                <p className="text-sm text-gray-500">Welcome back, {clientData.name}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">Account Manager</div>
              <div className="text-sm text-gray-500">{clientData.accountManager}</div>
              <div className="text-sm text-gray-500">{clientData.email}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default ClientPortal;