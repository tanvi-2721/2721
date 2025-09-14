import React, { useState } from 'react';
import { Plus, Check, AlertCircle, RefreshCw, ExternalLink, Settings } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const Integrations: React.FC = () => {
  const [integrations, setIntegrations] = useState([
    {
      id: 'google-ads',
      name: 'Google Ads',
      description: 'Sync campaign performance data from Google Ads',
      logo: '🎯',
      connected: true,
      lastSync: '2024-06-16T10:30:00Z',
      status: 'Active',
      accounts: ['TechCorp Account', 'HealthPlus Medical', 'RetailMax'],
      metrics: ['Impressions', 'Clicks', 'Cost', 'Conversions']
    },
    {
      id: 'meta-ads',
      name: 'Meta Ads (Facebook/Instagram)',
      description: 'Import Facebook and Instagram advertising data',
      logo: '📱',
      connected: true,
      lastSync: '2024-06-16T09:45:00Z',
      status: 'Active',
      accounts: ['TechCorp FB', 'HealthPlus Social'],
      metrics: ['Reach', 'Impressions', 'Clicks', 'Leads']
    },
    {
      id: 'google-analytics',
      name: 'Google Analytics 4',
      description: 'Track website performance and user behavior',
      logo: '📊',
      connected: true,
      lastSync: '2024-06-16T11:15:00Z',
      status: 'Active',
      accounts: ['TechCorp.com', 'HealthPlus.com', 'RetailMax.com'],
      metrics: ['Sessions', 'Users', 'Conversions', 'Revenue']
    },
    {
      id: 'linkedin-ads',
      name: 'LinkedIn Ads',
      description: 'Professional advertising and lead generation data',
      logo: '💼',
      connected: false,
      lastSync: null,
      status: 'Not Connected',
      accounts: [],
      metrics: ['Impressions', 'Clicks', 'Leads', 'Cost per Lead']
    },
    {
      id: 'twitter-ads',
      name: 'Twitter Ads (X)',
      description: 'Social media advertising performance tracking',
      logo: '🐦',
      connected: false,
      lastSync: null,
      status: 'Not Connected',
      accounts: [],
      metrics: ['Impressions', 'Engagements', 'Clicks', 'Conversions']
    },
    {
      id: 'tiktok-ads',
      name: 'TikTok Ads',
      description: 'Short-form video advertising analytics',
      logo: '🎵',
      connected: false,
      lastSync: null,
      status: 'Not Connected',
      accounts: [],
      metrics: ['Views', 'Clicks', 'Conversions', 'Cost per Action']
    }
  ]);

  const handleConnect = (integrationId: string) => {
    setIntegrations(prev => prev.map(integration => 
      integration.id === integrationId 
        ? { ...integration, connected: true, status: 'Active', lastSync: new Date().toISOString() }
        : integration
    ));
  };

  const handleDisconnect = (integrationId: string) => {
    setIntegrations(prev => prev.map(integration => 
      integration.id === integrationId 
        ? { ...integration, connected: false, status: 'Not Connected', lastSync: null, accounts: [] }
        : integration
    ));
  };

  const handleSync = (integrationId: string) => {
    setIntegrations(prev => prev.map(integration => 
      integration.id === integrationId 
        ? { ...integration, lastSync: new Date().toISOString() }
        : integration
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'green';
      case 'syncing': return 'blue';
      case 'error': return 'red';
      case 'not connected': return 'gray';
      default: return 'gray';
    }
  };

  const connectedIntegrations = integrations.filter(i => i.connected);
  const availableIntegrations = integrations.filter(i => !i.connected);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Integrations</h1>
          <p className="text-gray-600 mt-1">Connect your advertising platforms and data sources.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <RefreshCw size={16} />
            Sync All
          </Button>
          <Button variant="primary">
            <ExternalLink size={16} />
            Browse Integrations
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Connected Platforms</h3>
          <div className="text-3xl font-bold text-green-600">{connectedIntegrations.length}</div>
          <div className="text-sm text-gray-500 mt-1">Active integrations</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Sources</h3>
          <div className="text-3xl font-bold text-blue-600">
            {connectedIntegrations.reduce((acc, integration) => acc + integration.accounts.length, 0)}
          </div>
          <div className="text-sm text-gray-500 mt-1">Connected accounts</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Last Sync</h3>
          <div className="text-3xl font-bold text-purple-600">2m ago</div>
          <div className="text-sm text-gray-500 mt-1">All platforms synced</div>
        </div>
      </div>

      {connectedIntegrations.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Connected Integrations</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {connectedIntegrations.map((integration) => (
              <div key={integration.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{integration.logo}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h4 className="text-lg font-medium text-gray-900">{integration.name}</h4>
                        <Badge color={getStatusColor(integration.status)} variant="soft">
                          <Check size={12} />
                          {integration.status}
                        </Badge>
                      </div>
                      <p className="text-gray-500 mt-1">{integration.description}</p>
                      
                      {integration.accounts.length > 0 && (
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-700 mb-2">Connected Accounts:</div>
                          <div className="flex flex-wrap gap-2">
                            {integration.accounts.map((account, index) => (
                              <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                                {account}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-3">
                        <div className="text-sm font-medium text-gray-700 mb-2">Available Metrics:</div>
                        <div className="flex flex-wrap gap-2">
                          {integration.metrics.map((metric, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded">
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>

                      {integration.lastSync && (
                        <div className="mt-3 text-sm text-gray-500">
                          Last synced: {new Date(integration.lastSync).toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSync(integration.id)}
                    >
                      <RefreshCw size={14} />
                      Sync Now
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                    >
                      <Settings size={14} />
                      Configure
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDisconnect(integration.id)}
                      className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300"
                    >
                      Disconnect
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {availableIntegrations.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Available Integrations</h3>
            <p className="text-sm text-gray-500 mt-1">Connect these platforms to sync your advertising data automatically.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {availableIntegrations.map((integration) => (
              <div key={integration.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{integration.logo}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{integration.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{integration.description}</p>
                    
                    <div className="mt-3">
                      <div className="text-xs font-medium text-gray-700 mb-2">Metrics Available:</div>
                      <div className="flex flex-wrap gap-1">
                        {integration.metrics.slice(0, 3).map((metric, index) => (
                          <span key={index} className="px-1.5 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                            {metric}
                          </span>
                        ))}
                        {integration.metrics.length > 3 && (
                          <span className="px-1.5 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                            +{integration.metrics.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full mt-4"
                      onClick={() => handleConnect(integration.id)}
                    >
                      <Plus size={14} />
                      Connect
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <AlertCircle className="text-blue-500 mt-0.5" size={20} />
          <div>
            <h3 className="font-medium text-blue-900">Integration Tips</h3>
            <div className="text-sm text-blue-700 mt-1 space-y-1">
              <p>• Data syncs automatically every hour during business hours</p>
              <p>• Historical data is imported for the last 90 days when connecting a new integration</p>
              <p>• You can manually trigger syncs anytime using the "Sync Now" button</p>
              <p>• All data is encrypted and stored securely according to platform requirements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;