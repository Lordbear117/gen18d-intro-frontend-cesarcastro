import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import CreatePage from './pages/CreatePage';
import SearchPage from './pages/SearchPage';


function App() {
  return (
    <React.Fragment>
      <div>
      <span>Componente App</span>
      </div>

      <NavBar></NavBar>

      <SearchPage></SearchPage>
      <CreatePage></CreatePage>
      <AboutPage></AboutPage>

    </React.Fragment>
  );
}

export default App;
