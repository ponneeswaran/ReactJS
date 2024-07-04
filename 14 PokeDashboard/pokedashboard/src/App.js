import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import PokeList from './components/PokeList';
import { Col } from 'react-bootstrap';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { pokemon: [] };
    this.loadPokemon = this.loadPokemon.bind(this);
  }

  loadPokemon(url) {
    console.log(url+"?limit=151");
    fetch(url+"?limit=151")
      .then(response => {
        return response.json();
      }).then(json => {
        console.log(json);
        this.setState({
          pokemon: json.results
        });
      }).catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    console.log('baseURL:',this.props.baseURL);
    this.loadPokemon(`${this.props.baseURL}/pokemon/`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Col sm={8} md={10} smoffset={2} mdoffset={1}>
            <PokeList listofPokemon={this.state.pokemon} />
          </Col>
        </header>
      </div>
    );
  }
}
