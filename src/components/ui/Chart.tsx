import React from 'react';

interface ChartData {
  month: string;
  spend: number;
  conversions: number;
}

interface ChartProps {
  data: ChartData[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const maxSpend = Math.max(...data.map(d => d.spend));
  const maxConversions = Math.max(...data.map(d => d.conversions));

  return (
    <div className="h-64">
      <div className="flex items-end justify-between h-48 px-2">
        {data.map((item, index) => {
          const spendHeight = (item.spend / maxSpend) * 100;
          const conversionHeight = (item.conversions / maxConversions) * 100;
          
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="flex items-end space-x-1 h-32 mb-2">
                <div
                  className="bg-blue-500 rounded-t w-4 transition-all duration-300 hover:bg-blue-600"
                  style={{ height: `${spendHeight}%` }}
                  title={`Spend: $${item.spend.toLocaleString()}`}
                />
                <div
                  className="bg-green-500 rounded-t w-4 transition-all duration-300 hover:bg-green-600"
                  style={{ height: `${conversionHeight}%` }}
                  title={`Conversions: ${item.conversions}`}
                />
              </div>
              <div className="text-xs text-gray-600 font-medium">{item.month}</div>
            </div>
          );
        })}
      </div>
      
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span className="text-sm text-gray-600">Ad Spend</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span className="text-sm text-gray-600">Conversions</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;