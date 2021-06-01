import React, { Component } from 'react';
import faker from 'faker';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { Card } from 'card/index';
import './App.css';
import Button from 'elements/button/Button';

const theme = {
  primary: 'green',
  mango: 'yellow'
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      showCard: true
    };
  }

  
  toggleCard() { this.setState({ showCard: !this.showCard }) } 
  
  deleteCardHandler(index) {
    const cards_copy = [...this.state.cards];
    cards_copy.splice(index, 1);
    this.setState({ cards: cards_copy })
  }
  
  changeNameHandler(event, index) {
    const cards_copy = [...this.state.cards];
    cards_copy[index].name = event.target.value;
    this.setState({cards: cards_copy});
  }
  
  render() {
    const buttonClasses = ['button']
  
    if (this.state.cards.length < 3) buttonClasses.push('pink-button');
    if (this.state.cards.length < 2) buttonClasses.push('red-button');

    return (
      <ThemeProvider theme={ theme }>
        <div className="App">
          <Button color="primary" length={ this.state.cards.length } onClick={ () => this.toggleCard() } >Show Hide</Button>
          <button className={ buttonClasses.join(' ') } onClick={ () => this.toggleCard() } style={{ 'margin': '1rem 0' } }>Show / Hide card</button>
          { this.state.showCard && (
          this.state.cards.map(({ name, phone }, index) => 
            <Card key={ index }
              name={ name }
              phone={ phone }
              onDelete={ () => this.deleteCardHandler(index) }
              onNameChanges={ event =>  this.changeNameHandler(event, index)}
            />)
          )}
        </div>
      </ThemeProvider>
    );
  }

}

export default App;
