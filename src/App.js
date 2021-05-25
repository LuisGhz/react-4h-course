import React, { useState } from 'react';
import faker from 'faker';
import { Card } from 'card/index';
import './App.css';

function App() {
  const [name, setName] = useState('Edwin');
  const [showCard, setShowCard] = useState(true);

  const changeNameHandler = () => setName( faker.name.firstName() );

  const changeNameFromInputHandler = event => setName(event.target.value);

  const toggleCard = () => setShowCard(!showCard);

  return (
    <div className="App">
      <button className="button" onClick={ () => toggleCard() } >Show / Hide card</button>
      { showCard && <Card 
        avatar={ 'https://cdn.fakercloud.com/avatars/mwarkentin_128.jpg' }
        name={ name }
        title={ 'Customer Research Developer' }
        onChangeName={ () => changeNameHandler() }
        onChangeNameFromInput={ changeNameFromInputHandler }
      /> }
    </div>
  );
}

export default App;
