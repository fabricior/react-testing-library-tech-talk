import React from 'react';
import MessageEditor from "./messageEditor/MessageEditor";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Testing Library Hands On
      </header>        
      <section className="App-section, new-message-section">        
        <MessageEditor />
      </section>
    </div>
  );
}

export default App;
