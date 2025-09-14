import React, { useState } from 'react';
import Button from '../ui/Button';

interface ReportFormProps {
  onSubmit: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    client: '',
    type: 'Performance',
    dateRange: 'custom',
    startDate: '',
    endDate: '',
    metrics: [],
    format: 'PDF',
    frequency: 'one-time',
    emailRecipients: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Report form submitted:', formData);
    onSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleMetricChange = (metric: string) => {
    setFormData(prev => ({
      ...prev,
      metrics: prev.metrics.includes(metric) 
        ? prev.metrics.filter(m => m !== metric)
        : [...prev.metrics, metric]
    }));
  };

  const availableMetrics = [
    'Impressions', 'Clicks', 'CTR', 'Conversions', 'ROAS', 'CPC', 'CPM', 
    'Reach', 'Cost per Conversion', 'Revenue', 'ROI', 'Quality Score'
  ];

  const clients = [
    'All Clients', 'TechCorp Inc', 'HealthPlus Medical', 'RetailMax Solutions', 'EcoGreen Energy'
  ];

  const reportTypes = [
    { value: 'Performance', label: 'Performance Report' },
    { value: 'Lead Analysis', label: 'Lead Generation Analysis' },
    { value: 'Summary', label: 'Client Summary' },
    { value: 'Overview', label: 'Multi-Client Overview' },
    { value: 'Campaign', label: 'Campaign Analysis' },
    { value: 'Custom', label: 'Custom Report' }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Report Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter report name"
          />
        </div>

        <div>
          <label htmlFor="client" className="block text-sm font-medium text-gray-700 mb-2">
            Client *
          </label>
          <select
            id="client"
            name="client"
            required
            value={formData.client}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select client</option>
            {clients.map(client => (
              <option key={client} value={client}>{client}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
            Report Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {reportTypes.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="format" className="block text-sm font-medium text-gray-700 mb-2">
            Format
          </label>
          <select
            id="format"
            name="format"
            value={formData.format}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="PDF">PDF</option>
            <option value="CSV">CSV</option>
            <option value="Both">Both PDF & CSV</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Date Range
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {[
            { value: 'last-7-days', label: 'Last 7 days' },
            { value: 'last-30-days', label: 'Last 30 days' },
            { value: 'last-90-days', label: 'Last 90 days' },
            { value: 'custom', label: 'Custom range' }
          ].map((range) => (
            <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="dateRange"
                value={range.value}
                checked={formData.dateRange === range.value}
                onChange={handleChange}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>

        {formData.dateRange === 'custom' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Metrics to Include
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {availableMetrics.map((metric) => (
            <label key={metric} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.metrics.includes(metric)}
                onChange={() => handleMetricChange(metric)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{metric}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Report Frequency
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { value: 'one-time', label: 'One-time report' },
            { value: 'weekly', label: 'Weekly (every Monday)' },
            { value: 'monthly', label: 'Monthly (1st of month)' }
          ].map((freq) => (
            <label key={freq.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="frequency"
                value={freq.value}
                checked={formData.frequency === freq.value}
                onChange={handleChange}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{freq.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="emailRecipients" className="block text-sm font-medium text-gray-700 mb-2">
          Email Recipients (optional)
        </label>
        <input
          type="text"
          id="emailRecipients"
          name="emailRecipients"
          value={formData.emailRecipients}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter email addresses separated by commas"
        />
        <p className="text-xs text-gray-500 mt-1">
          Recipients will receive the report automatically when it's ready
        </p>
      </div>

      <div className="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
        <Button type="button" variant="outline" onClick={onSubmit}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Generate Report
        </Button>
      </div>
    </form>
  );
};

export default ReportForm;