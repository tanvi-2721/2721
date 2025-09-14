import React, { useState } from 'react';
import { Plus, Download, Eye, Search, Filter, CreditCard, DollarSign, Clock, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Modal from '../ui/Modal';
import InvoiceForm from '../forms/InvoiceForm';

const Billing: React.FC = () => {
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [viewMode, setViewMode] = useState('list');

  const invoices = [
    {
      id: 'INV-2024-001',
      client: 'TechCorp Inc',
      amount: 25000,
      tax: 2500,
      total: 27500,
      status: 'Paid',
      issueDate: '2024-06-01',
      dueDate: '2024-06-30',
      paidDate: '2024-06-15',
      description: 'Q2 Digital Marketing Services',
      items: [
        { description: 'Google Ads Management', quantity: 1, rate: 15000, amount: 15000 },
        { description: 'Facebook Ads Management', quantity: 1, rate: 8000, amount: 8000 },
        { description: 'Strategy Consultation', quantity: 4, rate: 500, amount: 2000 }
      ]
    },
    {
      id: 'INV-2024-002',
      client: 'HealthPlus Medical',
      amount: 15000,
      tax: 1500,
      total: 16500,
      status: 'Sent',
      issueDate: '2024-06-10',
      dueDate: '2024-07-10',
      paidDate: null,
      description: 'Lead Generation Campaign - May 2024',
      items: [
        { description: 'Facebook Lead Ads Setup', quantity: 1, rate: 5000, amount: 5000 },
        { description: 'Campaign Management', quantity: 1, rate: 8000, amount: 8000 },
        { description: 'Landing Page Optimization', quantity: 1, rate: 2000, amount: 2000 }
      ]
    },
    {
      id: 'INV-2024-003',
      client: 'RetailMax Solutions',
      amount: 18500,
      tax: 1850,
      total: 20350,
      status: 'Overdue',
      issueDate: '2024-05-15',
      dueDate: '2024-06-15',
      paidDate: null,
      description: 'Summer Campaign Setup & Management',
      items: [
        { description: 'Campaign Strategy & Setup', quantity: 1, rate: 8500, amount: 8500 },
        { description: 'Ad Creative Development', quantity: 1, rate: 5000, amount: 5000 },
        { description: 'Campaign Management - May', quantity: 1, rate: 5000, amount: 5000 }
      ]
    },
    {
      id: 'INV-2024-004',
      client: 'EcoGreen Energy',
      amount: 12000,
      tax: 1200,
      total: 13200,
      status: 'Draft',
      issueDate: '2024-06-16',
      dueDate: '2024-07-16',
      paidDate: null,
      description: 'Brand Awareness Campaign - June 2024',
      items: [
        { description: 'Google Ads Campaign', quantity: 1, rate: 7000, amount: 7000 },
        { description: 'Social Media Management', quantity: 1, rate: 3000, amount: 3000 },
        { description: 'Performance Reporting', quantity: 1, rate: 2000, amount: 2000 }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid': return 'green';
      case 'sent': return 'blue';
      case 'overdue': return 'red';
      case 'draft': return 'gray';
      default: return 'gray';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid': return CheckCircle;
      case 'sent': return Clock;
      case 'overdue': return Clock;
      case 'draft': return Eye;
      default: return Eye;
    }
  };

  const renderInvoicesList = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">All Invoices</h3>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search invoices..."
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
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {invoices.map((invoice) => {
              const StatusIcon = getStatusIcon(invoice.status);
              return (
                <tr key={invoice.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{invoice.id}</div>
                      <div className="text-sm text-gray-500">{invoice.description}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {invoice.client}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    ${invoice.total.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <StatusIcon size={16} className={`text-${getStatusColor(invoice.status)}-500`} />
                      <Badge color={getStatusColor(invoice.status)} variant="soft">
                        {invoice.status}
                      </Badge>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {new Date(invoice.dueDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          setSelectedInvoice(invoice);
                          setViewMode('detail');
                        }}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        View
                      </button>
                      <Button variant="outline" size="sm">
                        <Download size={14} />
                        Download
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderInvoiceDetail = () => (
    selectedInvoice && (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                setViewMode('list');
                setSelectedInvoice(null);
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Invoices
            </button>
            <h2 className="text-2xl font-bold text-gray-900">{selectedInvoice.id}</h2>
            <Badge color={getStatusColor(selectedInvoice.status)} variant="soft">
              {selectedInvoice.status}
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Download size={16} />
              Download PDF
            </Button>
            {selectedInvoice.status === 'Draft' && (
              <Button variant="primary" size="sm">
                Send Invoice
              </Button>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Invoice Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Invoice Number:</span>
                  <span className="font-medium">{selectedInvoice.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Issue Date:</span>
                  <span className="font-medium">{new Date(selectedInvoice.issueDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Due Date:</span>
                  <span className="font-medium">{new Date(selectedInvoice.dueDate).toLocaleDateString()}</span>
                </div>
                {selectedInvoice.paidDate && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Paid Date:</span>
                    <span className="font-medium text-green-600">{new Date(selectedInvoice.paidDate).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Bill To</h3>
              <div className="text-gray-700">
                <div className="font-medium">{selectedInvoice.client}</div>
                <div className="text-sm text-gray-500 mt-2">
                  {selectedInvoice.description}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Invoice Items</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-medium text-gray-500">Description</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-500">Qty</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-500">Rate</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-500">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {selectedInvoice.items.map((item, index) => (
                  <tr key={index}>
                    <td className="py-3 text-gray-900">{item.description}</td>
                    <td className="py-3 text-right text-gray-700">{item.quantity}</td>
                    <td className="py-3 text-right text-gray-700">${item.rate.toLocaleString()}</td>
                    <td className="py-3 text-right font-medium text-gray-900">${item.amount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 flex justify-end">
              <div className="w-64 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">${selectedInvoice.amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (10%):</span>
                  <span className="font-medium">${selectedInvoice.tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold pt-2 border-t">
                  <span>Total:</span>
                  <span>${selectedInvoice.total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );

  const totalRevenue = invoices.reduce((acc, inv) => acc + (inv.status === 'Paid' ? inv.total : 0), 0);
  const pendingAmount = invoices.reduce((acc, inv) => acc + (inv.status !== 'Paid' && inv.status !== 'Draft' ? inv.total : 0), 0);
  const overdueAmount = invoices.reduce((acc, inv) => acc + (inv.status === 'Overdue' ? inv.total : 0), 0);

  return (
    <div className="space-y-6">
      {viewMode === 'list' && (
        <>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Billing</h1>
              <p className="text-gray-600 mt-1">Manage invoices and track payments.</p>
            </div>
            <Button
              variant="primary"
              onClick={() => setShowCreateInvoice(true)}
            >
              <Plus size={16} />
              Create Invoice
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <DollarSign className="text-green-500" size={24} />
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-500">Total Revenue</div>
                  <div className="text-2xl font-bold text-gray-900">${totalRevenue.toLocaleString()}</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <Clock className="text-blue-500" size={24} />
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-500">Pending</div>
                  <div className="text-2xl font-bold text-gray-900">${pendingAmount.toLocaleString()}</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <CreditCard className="text-red-500" size={24} />
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-500">Overdue</div>
                  <div className="text-2xl font-bold text-gray-900">${overdueAmount.toLocaleString()}</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <CheckCircle className="text-green-500" size={24} />
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-500">Total Invoices</div>
                  <div className="text-2xl font-bold text-gray-900">{invoices.length}</div>
                </div>
              </div>
            </div>
          </div>

          {renderInvoicesList()}
        </>
      )}

      {viewMode === 'detail' && renderInvoiceDetail()}

      <Modal isOpen={showCreateInvoice} onClose={() => setShowCreateInvoice(false)} title="Create New Invoice">
        <InvoiceForm onSubmit={() => setShowCreateInvoice(false)} />
      </Modal>
    </div>
  );
};

export default Billing;