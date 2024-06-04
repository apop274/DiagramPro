import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>DiagramPro</h2>
      </div>
      <div className="sidebar-content">
        <ul>
          <li>Home</li>
          <li>Diagrams</li>
          <li>DALL-E</li>
          <li>Explore GPTs</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
