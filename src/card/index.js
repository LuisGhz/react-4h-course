import { Component } from 'react';
import './index.css';

export class Card extends Component {

  render() {
    return (
      <div className="card">
        <div className="container">
          <h4><b>{ this.props.name }</b></h4>
          <p>{ this.props.phone }</p>
          <p>
            <input type="text" value={ this.props.name } onChange={ this.props.onNameChanges } />
          </p>
          <p className="center-text">
            <button className="button button-red" onClick={ () => this.props.onDelete() } >Delete</button>
          </p>
          <div>{ this.props.children }</div>
        </div>
      </div>
    );
  }
}