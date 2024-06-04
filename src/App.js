import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
