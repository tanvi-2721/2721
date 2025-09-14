import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import TopNav from './components/layout/TopNav';
import Dashboard from './components/modules/Dashboard';
import Clients from './components/modules/Clients';
import Campaigns from './components/modules/Campaigns';
import Reports from './components/modules/Reports';
import Billing from './components/modules/Billing';
import Integrations from './components/modules/Integrations';
import Settings from './components/modules/Settings';
import ClientPortal from './components/modules/ClientPortal';

function App() {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [userRole] = useState('Account Manager'); // Mock user role
  const [isClientPortal] = useState(false); // Toggle for client portal view

  const renderActiveModule = () => {
    if (isClientPortal) {
      return <ClientPortal />;
    }

    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />;
      case 'clients':
        return <Clients />;
      case 'campaigns':
        return <Campaigns />;
      case 'reports':
        return <Reports />;
      case 'billing':
        return <Billing />;
      case 'integrations':
        return <Integrations />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!isClientPortal && (
        <Sidebar
          activeModule={activeModule}
          setActiveModule={setActiveModule}
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />
      )}
      
      <div className={`${!isClientPortal ? (sidebarCollapsed ? 'ml-16' : 'ml-64') : ''} transition-all duration-300`}>
        {!isClientPortal && <TopNav userRole={userRole} />}
        
        <main className="p-6">
          {renderActiveModule()}
        </main>
      </div>
    </div>
  );
}

export default App;