import React, { useState } from 'react';
import Button from '../ui/Button';

interface CampaignFormProps {
  onSubmit: () => void;
}

const CampaignForm: React.FC<CampaignFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    client: '',
    objective: 'Brand Awareness',
    platform: 'Google Ads',
    budget: '',
    startDate: '',
    endDate: '',
    brief: '',
    targetAudience: '',
    kpis: [],
    assignedTo: 'John Smith'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Campaign form submitted:', formData);
    onSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleKpiChange = (kpi: string) => {
    setFormData(prev => ({
      ...prev,
      kpis: prev.kpis.includes(kpi) 
        ? prev.kpis.filter(k => k !== kpi)
        : [...prev.kpis, kpi]
    }));
  };

  const availableKpis = [
    'Impressions', 'Clicks', 'CTR', 'Conversions', 'ROAS', 'CPC', 'CPM', 'Reach'
  ];

  const clients = [
    'TechCorp Inc', 'HealthPlus Medical', 'RetailMax Solutions', 'EcoGreen Energy'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Campaign Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter campaign name"
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
          <label htmlFor="objective" className="block text-sm font-medium text-gray-700 mb-2">
            Campaign Objective
          </label>
          <select
            id="objective"
            name="objective"
            value={formData.objective}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Brand Awareness">Brand Awareness</option>
            <option value="Lead Generation">Lead Generation</option>
            <option value="Sales">Sales</option>
            <option value="Traffic">Traffic</option>
            <option value="Engagement">Engagement</option>
          </select>
        </div>

        <div>
          <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mb-2">
            Platform
          </label>
          <select
            id="platform"
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Google Ads">Google Ads</option>
            <option value="Facebook Ads">Facebook Ads</option>
            <option value="Instagram Ads">Instagram Ads</option>
            <option value="LinkedIn Ads">LinkedIn Ads</option>
            <option value="Twitter Ads">Twitter Ads</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
            Budget ($) *
          </label>
          <input
            type="number"
            id="budget"
            name="budget"
            required
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter budget amount"
          />
        </div>

        <div>
          <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700 mb-2">
            Assigned To
          </label>
          <select
            id="assignedTo"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="John Smith">John Smith</option>
            <option value="Emma Davis">Emma Davis</option>
            <option value="Michael Chen">Michael Chen</option>
            <option value="Sarah Wilson">Sarah Wilson</option>
          </select>
        </div>

        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
            Start Date *
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            required
            value={formData.startDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
            End Date *
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            required
            value={formData.endDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="brief" className="block text-sm font-medium text-gray-700 mb-2">
          Campaign Brief
        </label>
        <textarea
          id="brief"
          name="brief"
          rows={4}
          value={formData.brief}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Describe the campaign objectives, target audience, and key messaging"
        />
      </div>

      <div>
        <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 mb-2">
          Target Audience
        </label>
        <textarea
          id="targetAudience"
          name="targetAudience"
          rows={3}
          value={formData.targetAudience}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Describe the target audience demographics, interests, and behaviors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Key Performance Indicators (KPIs)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {availableKpis.map((kpi) => (
            <label key={kpi} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.kpis.includes(kpi)}
                onChange={() => handleKpiChange(kpi)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{kpi}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
        <Button type="button" variant="outline" onClick={onSubmit}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Create Campaign
        </Button>
      </div>
    </form>
  );
};

export default CampaignForm;