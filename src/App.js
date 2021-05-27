import React, { useState } from 'react';
import faker from 'faker';
import styled, { ThemeProvider, css } from 'styled-components';
import { Card } from 'card/index';
import './App.css';

const Button = styled.button`
  ${ props =>
  props.color && css `
    background-color: ${ props => props.length > 2 ? props.theme[ props.color ] : props.length < 2 ? 'red' : 'pink' };
    `
  }
  border: 0;
  color: white;
  padding: .5rem 1rem;
`;

const theme = {
  primary: 'green',
  mango: 'yellow'
}

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

  const buttonClasses = ['button']

  if (cards.length < 3) buttonClasses.push('pink-button');
  if (cards.length < 2) buttonClasses.push('red-button');

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
    <ThemeProvider theme={ theme }>
      <div className="App">
        <Button color="primary" length={ cards.length } >Show Hide</Button>
        <button className={ buttonClasses.join(' ') } onClick={ () => toggleCard() } style={{ 'margin': '1rem 0' } }>Show / Hide card</button>
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
    </ThemeProvider>
  );
}

export default App;
