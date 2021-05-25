import React, { useState } from 'react';
import faker from 'faker';
import { Card } from 'card/index';
import './App.css';

function App() {
  const [showCard, setShowCard] = useState(true);

  const [cards, setCard] = useState([
    {
      avatar: 'https://cdn.fakercloud.com/avatars/mwarkentin_128.jpg',
      name: 'Edwin',
      title: 'Customer Research Developer'
    },
    {
      avatar: 'https://cdn.fakercloud.com/avatars/mwarkentin_128.jpg',
      name: 'Edwin',
      title: 'Customer Research Developer'
    },
    {
      avatar: 'https://cdn.fakercloud.com/avatars/mwarkentin_128.jpg',
      name: 'Edwin',
      title: 'Customer Research Developer'
    },
  ]);

  const toggleCard = () => setShowCard(!showCard);

  return (
    <div className="App">
      <button className="button" onClick={ () => toggleCard() } style={{ 'margin': '1rem 0' }}>Show / Hide card</button>
      { showCard && (
      cards.map(({ avatar, name, title }, index) => 
        <Card key={ index }
          avatar={ avatar }
          name={ name }
          title={ title }
        />)
      )}
    </div>
  );
}

export default App;
