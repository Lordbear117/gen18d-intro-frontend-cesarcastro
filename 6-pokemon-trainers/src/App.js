import React from 'react';
import './App.css';
import Dashboards from './components/Dashboard';
import NavBar from './components/NavBar';
import SearchFilters from './components/SearchFilters';

function App() {
  return (
    <React.Fragment>
      <div>
      <span>App</span>
      </div>

      <NavBar></NavBar>
      <SearchFilters></SearchFilters>
      <Dashboards></Dashboards>
    </React.Fragment>
  );
}

export default App;
