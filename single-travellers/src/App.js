import React from 'react';
import DestinationList from './components/DestinationList';
import Tips from './components/Tips';
import ContactForm from './components/ContactForm';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Single Travellers</h1>
        <p>Your ultimate companion for solo adventures</p>
      </header>
      <main>
        <DestinationList />
        <Tips />
        <ContactForm />
      </main>
      <footer>
        <p>&copy; 2024 Solo Travellers. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
