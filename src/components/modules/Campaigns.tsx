import React, { useState } from 'react';
import { Plus, Play, Pause, Calendar, Target, DollarSign, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Modal from '../ui/Modal';
import CampaignForm from '../forms/CampaignForm';

const Campaigns: React.FC = () => {
  const [showAddCampaign, setShowAddCampaign] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [viewMode, setViewMode] = useState('list');

  const campaigns = [
    {
      id: 1,
      name: 'TechCorp Q2 Brand Awareness',
      client: 'TechCorp Inc',
      status: 'Active',
      budget: 25000,
      spent: 18500,
      startDate: '2024-04-01',
      endDate: '2024-06-30',
      impressions: 1250000,
      clicks: 15600,
      conversions: 324,
      ctr: 1.25,
      cpc: 1.18,
      roas: 4.2,
      platform: 'Google Ads',
      objective: 'Brand Awareness',
      brief: 'Increase brand awareness among tech professionals in the 25-45 age group.',
      tasks: [
        { id: 1, title: 'Create ad creatives', status: 'Completed', assignee: 'Sarah' },
        { id: 2, title: 'Set up tracking', status: 'Completed', assignee: 'Mike' },
        { id: 3, title: 'Launch campaign', status: 'Completed', assignee: 'John' },
        { id: 4, title: 'Weekly optimization', status: 'In Progress', assignee: 'Sarah' }
      ]
    },
    {
      id: 2,
      name: 'HealthPlus Lead Generation',
      client: 'HealthPlus Medical',
      status: 'Active',
      budget: 15000,
      spent: 12200,
      startDate: '2024-05-15',
      endDate: '2024-07-15',
      impressions: 890000,
      clicks: 11200,
      conversions: 186,
      ctr: 1.26,
      cpc: 1.09,
      roas: 3.8,
      platform: 'Facebook Ads',
      objective: 'Lead Generation',
      brief: 'Generate qualified leads for new patient consultations.',
      tasks: [
        { id: 1, title: 'Audience research', status: 'Completed', assignee: 'Emma' },
        { id: 2, title: 'Landing page setup', status: 'Completed', assignee: 'Tom' },
        { id: 3, title: 'Campaign launch', status: 'Completed', assignee: 'Emma' },
        { id: 4, title: 'Lead qualification', status: 'In Progress', assignee: 'Tom' }
      ]
    },
    {
      id: 3,
      name: 'RetailMax Summer Sale',
      client: 'RetailMax Solutions',
      status: 'Paused',
      budget: 20000,
      spent: 8500,
      startDate: '2024-06-01',
      endDate: '2024-08-31',
      impressions: 650000,
      clicks: 8900,
      conversions: 142,
      ctr: 1.37,
      cpc: 0.95,
      roas: 3.2,
      platform: 'Google Ads',
      objective: 'Sales',
      brief: 'Drive summer sale conversions with promotional offers.',
      tasks: [
        { id: 1, title: 'Seasonal creative design', status: 'Completed', assignee: 'Lisa' },
        { id: 2, title: 'Promotional setup', status: 'In Progress', assignee: 'Mark' },
        { id: 3, title: 'Inventory sync', status: 'Pending', assignee: 'Lisa' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'green';
      case 'paused': return 'yellow';
      case 'completed': return 'blue';
      case 'draft': return 'gray';
      default: return 'gray';
    }
  };

  const getTaskStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'green';
      case 'in progress': return 'blue';
      case 'pending': return 'yellow';
      default: return 'gray';
    }
  };

  const renderCampaignsList = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">All Campaigns</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-900">{campaign.name}</div>
                    <div className="text-sm text-gray-500">{campaign.client}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge color={getStatusColor(campaign.status)} variant="soft">
                    {campaign.status}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-900">${campaign.budget.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Spent: ${campaign.spent.toLocaleString()}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <div className="text-gray-900">{campaign.conversions} conversions</div>
                    <div className="text-gray-500">{campaign.roas}x ROAS</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setSelectedCampaign(campaign);
                        setViewMode('detail');
                      }}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      View Details
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

  const renderCampaignDetail = () => (
    selectedCampaign && (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                setViewMode('list');
                setSelectedCampaign(null);
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Campaigns
            </button>
            <h2 className="text-2xl font-bold text-gray-900">{selectedCampaign.name}</h2>
            <Badge color={getStatusColor(selectedCampaign.status)} variant="soft">
              {selectedCampaign.status}
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            {selectedCampaign.status === 'Active' ? (
              <Button variant="outline" size="sm">
                <Pause size={16} />
                Pause
              </Button>
            ) : (
              <Button variant="outline" size="sm">
                <Play size={16} />
                Resume
              </Button>
            )}
            <Button variant="primary" size="sm">
              Edit Campaign
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <DollarSign className="text-blue-500" size={24} />
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-500">Budget Utilization</div>
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round((selectedCampaign.spent / selectedCampaign.budget) * 100)}%
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <Target className="text-green-500" size={24} />
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-500">Conversions</div>
                <div className="text-2xl font-bold text-gray-900">{selectedCampaign.conversions}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <TrendingUp className="text-purple-500" size={24} />
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-500">ROAS</div>
                <div className="text-2xl font-bold text-gray-900">{selectedCampaign.roas}x</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <Calendar className="text-orange-500" size={24} />
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-500">Days Remaining</div>
                <div className="text-2xl font-bold text-gray-900">
                  {Math.max(0, Math.ceil((new Date(selectedCampaign.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Brief</h3>
            <div className="space-y-3">
              <div>
                <div className="text-sm font-medium text-gray-500">Objective</div>
                <div className="text-gray-900">{selectedCampaign.objective}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Platform</div>
                <div className="text-gray-900">{selectedCampaign.platform}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">Description</div>
                <div className="text-gray-900">{selectedCampaign.brief}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Task Progress</h3>
            <div className="space-y-3">
              {selectedCampaign.tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{task.title}</div>
                    <div className="text-sm text-gray-500">Assigned to {task.assignee}</div>
                  </div>
                  <Badge color={getTaskStatusColor(task.status)} variant="soft" size="sm">
                    {task.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{selectedCampaign.impressions.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{selectedCampaign.clicks.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Clicks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{selectedCampaign.ctr}%</div>
              <div className="text-sm text-gray-500">CTR</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">${selectedCampaign.cpc}</div>
              <div className="text-sm text-gray-500">CPC</div>
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
              <h1 className="text-3xl font-bold text-gray-900">Campaigns</h1>
              <p className="text-gray-600 mt-1">Manage and monitor your advertising campaigns.</p>
            </div>
            <Button
              variant="primary"
              onClick={() => setShowAddCampaign(true)}
            >
              <Plus size={16} />
              Create Campaign
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Campaigns</h3>
              <div className="text-3xl font-bold text-green-600">
                {campaigns.filter(c => c.status === 'Active').length}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Spend</h3>
              <div className="text-3xl font-bold text-blue-600">
                ${campaigns.reduce((acc, c) => acc + c.spent, 0).toLocaleString()}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Conversions</h3>
              <div className="text-3xl font-bold text-purple-600">
                {campaigns.reduce((acc, c) => acc + c.conversions, 0)}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Avg. ROAS</h3>
              <div className="text-3xl font-bold text-orange-600">
                {(campaigns.reduce((acc, c) => acc + c.roas, 0) / campaigns.length).toFixed(1)}x
              </div>
            </div>
          </div>

          {renderCampaignsList()}
        </>
      )}

      {viewMode === 'detail' && renderCampaignDetail()}

      <Modal isOpen={showAddCampaign} onClose={() => setShowAddCampaign(false)} title="Create New Campaign">
        <CampaignForm onSubmit={() => setShowAddCampaign(false)} />
      </Modal>
    </div>
  );
};

export default Campaigns;