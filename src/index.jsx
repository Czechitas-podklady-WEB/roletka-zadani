import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Dropdown from './components/Dropdown';

const App = () => {
  const [city, setCity] = useState();

  const handleDropdownChange = (selectedItem) => {
    setCity(selectedItem);
  }

  return (
    <div className="container">
      <h1>Roletka</h1>
      <p>Chci bydlet v: <strong>{city}</strong></p>

      <Dropdown
        placeholder="Vyber město..."
        options={['Praha', 'Brno', 'Ostrava', 'Hradec Králové', 'Olomouc']}
        selected={city}
        onChange={handleDropdownChange}
      />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
