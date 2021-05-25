import React, { useState } from 'react';
import faker from 'faker';
import { Card } from 'card/index';
import './App.css';

function App() {
  const [showCard, setShowCard] = useState(true);

  const [cards, setCards] = useState([
    {
      avatar: 'https://cdn.fakercloud.com/avatars/mwarkentin_128.jpg',
      name: 'Edwin 1',
      title: 'Customer Research Developer'
    },
    {
      avatar: 'https://cdn.fakercloud.com/avatars/mwarkentin_128.jpg',
      name: 'Edwin 2',
      title: 'Customer Research Developer'
    },
    {
      avatar: 'https://cdn.fakercloud.com/avatars/mwarkentin_128.jpg',
      name: 'Edwin 3',
      title: 'Customer Research Developer'
    },
  ]);

  const toggleCard = () => setShowCard(!showCard);

  const deleteCardHandler = (index)  => {
    const cards_copy = [...cards];
    cards_copy.splice(index, 1);
    setCards(cards_copy)
  }

  const changeNameHandler = (event, index) => {
    const cards_copy = [...cards];
    cards_copy[index].name = event.target.value;
    setCards(cards_copy);
  }

  return (
    <div className="App">
      <button className="button" onClick={ () => toggleCard() } style={{ 'margin': '1rem 0' }}>Show / Hide card</button>
      { showCard && (
      cards.map(({ avatar, name, title }, index) => 
        <Card key={ index }
          avatar={ avatar }
          name={ name }
          title={ title }
          onDelete={ () => deleteCardHandler(index) }
          onNameChanges={ event =>  changeNameHandler(event, index)}
        />)
      )}
    </div>
  );
}

export default App;
