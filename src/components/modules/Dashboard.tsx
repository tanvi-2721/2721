import React from 'react';
import { TrendingUp, Users, Megaphone, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import StatsCard from '../ui/StatsCard';
import Chart from '../ui/Chart';

const Dashboard: React.FC = () => {
  const statsData = [
    {
      title: 'Total Clients',
      value: '24',
      change: '+12%',
      trend: 'up' as const,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Campaigns',
      value: '42',
      change: '+8%',
      trend: 'up' as const,
      icon: Megaphone,
      color: 'green'
    },
    {
      title: 'Monthly Spend',
      value: '$89,247',
      change: '+23%',
      trend: 'up' as const,
      icon: DollarSign,
      color: 'purple'
    },
    {
      title: 'Avg. ROI',
      value: '4.2x',
      change: '-2%',
      trend: 'down' as const,
      icon: TrendingUp,
      color: 'orange'
    },
  ];

  const chartData = [
    { month: 'Jan', spend: 45000, conversions: 320 },
    { month: 'Feb', spend: 52000, conversions: 380 },
    { month: 'Mar', spend: 48000, conversions: 350 },
    { month: 'Apr', spend: 61000, conversions: 420 },
    { month: 'May', spend: 67000, conversions: 480 },
    { month: 'Jun', spend: 89247, conversions: 620 },
  ];

  const recentActivities = [
    { id: 1, type: 'approval', message: 'TechCorp campaign needs approval', time: '5 minutes ago', urgent: true },
    { id: 2, type: 'sync', message: 'Google Ads data sync completed', time: '1 hour ago', urgent: false },
    { id: 3, type: 'report', message: 'Monthly report ready for HealthPlus', time: '2 hours ago', urgent: false },
    { id: 4, type: 'invoice', message: 'Invoice #1234 payment overdue', time: '3 hours ago', urgent: true },
    { id: 5, type: 'campaign', message: 'New campaign launched for RetailMax', time: '5 hours ago', urgent: false },
  ];

  const topClients = [
    { name: 'TechCorp Inc', spend: '$24,500', roi: '5.2x', change: '+18%' },
    { name: 'HealthPlus', spend: '$18,200', roi: '4.8x', change: '+12%' },
    { name: 'RetailMax', spend: '$15,800', roi: '3.9x', change: '+6%' },
    { name: 'EcoGreen', spend: '$12,300', roi: '4.1x', change: '+15%' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your agency.</p>
        </div>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h3>
          <Chart data={chartData} />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Clients</h3>
          <div className="space-y-4">
            {topClients.map((client, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div>
                  <div className="font-medium text-gray-900">{client.name}</div>
                  <div className="text-sm text-gray-500">Monthly Spend: {client.spend}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">{client.roi}</div>
                  <div className={`text-sm flex items-center ${
                    client.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {client.change.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {client.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className={`w-2 h-2 rounded-full mt-2 ${
                activity.urgent ? 'bg-red-500' : 'bg-blue-500'
              }`}></div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{activity.message}</div>
                <div className="text-sm text-gray-500">{activity.time}</div>
              </div>
              {activity.urgent && (
                <span className="px-2 py-1 text-xs font-medium text-red-600 bg-red-50 rounded-full">
                  Urgent
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;