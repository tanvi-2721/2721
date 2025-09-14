import React, { useState } from 'react';
import { Download, Calendar, Filter, FileText, BarChart3, PieChart, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Modal from '../ui/Modal';
import ReportForm from '../forms/ReportForm';

const Reports: React.FC = () => {
  const [showCreateReport, setShowCreateReport] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState('last-30-days');

  const reports = [
    {
      id: 1,
      name: 'TechCorp Q2 Performance Report',
      client: 'TechCorp Inc',
      type: 'Performance',
      status: 'Ready',
      createdDate: '2024-06-15',
      dateRange: 'Apr 1 - Jun 30, 2024',
      metrics: ['Impressions', 'Clicks', 'Conversions', 'ROAS'],
      downloadUrl: '#'
    },
    {
      id: 2,
      name: 'HealthPlus Lead Generation Analysis',
      client: 'HealthPlus Medical',
      type: 'Lead Analysis',
      status: 'Ready',
      createdDate: '2024-06-14',
      dateRange: 'May 1 - May 31, 2024',
      metrics: ['Lead Volume', 'Cost per Lead', 'Conversion Rate'],
      downloadUrl: '#'
    },
    {
      id: 3,
      name: 'RetailMax Monthly Summary',
      client: 'RetailMax Solutions',
      type: 'Summary',
      status: 'Processing',
      createdDate: '2024-06-16',
      dateRange: 'May 1 - May 31, 2024',
      metrics: ['Sales', 'Revenue', 'ROI'],
      downloadUrl: null
    },
    {
      id: 4,
      name: 'All Clients Overview - May 2024',
      client: 'All Clients',
      type: 'Overview',
      status: 'Ready',
      createdDate: '2024-06-01',
      dateRange: 'May 1 - May 31, 2024',
      metrics: ['Total Spend', 'Total Revenue', 'Client Performance'],
      downloadUrl: '#'
    }
  ];

  const reportTemplates = [
    {
      name: 'Performance Report',
      description: 'Comprehensive campaign performance analysis',
      icon: BarChart3,
      metrics: ['Impressions', 'Clicks', 'CTR', 'Conversions', 'ROAS']
    },
    {
      name: 'Lead Generation Report',
      description: 'Lead quality and conversion analysis',
      icon: TrendingUp,
      metrics: ['Lead Volume', 'Cost per Lead', 'Lead Quality Score']
    },
    {
      name: 'Client Summary',
      description: 'High-level client performance overview',
      icon: PieChart,
      metrics: ['Total Spend', 'Revenue', 'ROI', 'Key Achievements']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'ready': return 'green';
      case 'processing': return 'blue';
      case 'failed': return 'red';
      default: return 'gray';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600 mt-1">Generate and manage client reports and analytics.</p>
        </div>
        <Button
          variant="primary"
          onClick={() => setShowCreateReport(true)}
        >
          <FileText size={16} />
          Create Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Reports</h3>
          <div className="text-3xl font-bold text-blue-600">{reports.length}</div>
          <div className="text-sm text-gray-500 mt-1">+3 this month</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready for Download</h3>
          <div className="text-3xl font-bold text-green-600">
            {reports.filter(r => r.status === 'Ready').length}
          </div>
          <div className="text-sm text-gray-500 mt-1">Available now</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing</h3>
          <div className="text-3xl font-bold text-orange-600">
            {reports.filter(r => r.status === 'Processing').length}
          </div>
          <div className="text-sm text-gray-500 mt-1">In progress</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Reports</h3>
              <div className="flex items-center space-x-2">
                <select
                  value={selectedDateRange}
                  onChange={(e) => setSelectedDateRange(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="last-7-days">Last 7 days</option>
                  <option value="last-30-days">Last 30 days</option>
                  <option value="last-90-days">Last 90 days</option>
                  <option value="custom">Custom Range</option>
                </select>
                <Button variant="outline" size="sm">
                  <Filter size={16} />
                  Filter
                </Button>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {reports.map((report) => (
              <div key={report.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h4 className="text-lg font-medium text-gray-900">{report.name}</h4>
                      <Badge color={getStatusColor(report.status)} variant="soft" size="sm">
                        {report.status}
                      </Badge>
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      {report.client} • {report.dateRange}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {report.metrics.map((metric, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    {report.status === 'Ready' && (
                      <>
                        <Button variant="outline" size="sm">
                          <Download size={14} />
                          PDF
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download size={14} />
                          CSV
                        </Button>
                      </>
                    )}
                    {report.status === 'Processing' && (
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent mr-2"></div>
                        Processing...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Templates</h3>
          <div className="space-y-4">
            {reportTemplates.map((template, index) => {
              const Icon = template.icon;
              return (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <Icon className="text-blue-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-900">{template.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {template.metrics.map((metric, idx) => (
                          <span key={idx} className="px-2 py-0.5 text-xs bg-blue-50 text-blue-600 rounded">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowCreateReport(true)}
            >
              <FileText size={16} />
              Create Custom Report
            </Button>
          </div>
        </div>
      </div>

      <Modal isOpen={showCreateReport} onClose={() => setShowCreateReport(false)} title="Create New Report">
        <ReportForm onSubmit={() => setShowCreateReport(false)} />
      </Modal>
    </div>
  );
};

export default Reports;