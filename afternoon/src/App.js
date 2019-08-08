import React from 'react';
import HomeBar from './components/HomeBar/HomeBar'; 
import DataDisplay from './components/DataDisplay/DataDisplay'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <HomeBar /> 
      <DataDisplay /> 
    </div>
  );
}

export default App;
