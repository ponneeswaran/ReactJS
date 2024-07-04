import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import PokeList from './components/PokeList';
import { Col, Pagination, PageItem } from 'react-bootstrap';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      pokemon: [],
      activePage: 1,
      limit: 50,
      offset: 0,
      totalPages: 0,
      count: 0
    };
    this.loadPokemon = this.loadPokemon.bind(this);
    this.handlePaginationSelect = this.handlePaginationSelect.bind(this);
  }

  loadPokemon(url) {
    console.log(url);
    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        console.log("JSON:", json);
        let pages = Math.round(json.count / this.state.limit);
        this.setState({
          pokemon: json.results,
          totalPages: pages,
          count: json.count
        });
        console.log("State:",this.state);
      }).catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.loadPokemon(`${this.props.baseURL}/pokemon/?limit=${this.state.limit}&offset=${this.state.offset}`);
  }

  handlePaginationSelect(event) {
    console.log(event);
    let offset = this.state.limit * (event.target.text - 1);
    this.loadPokemon(`${this.props.baseURL}/pokemon/?limit=${this.state.limit}&offset=${offset}`);
  }

  render() {
    let active = this.state.activePage;
    let items = [];
    for (let number = 1; number <= this.state.totalPages; number++) {
      items.push(
        <PageItem key={number} active={number === active} onClick={(event) => this.handlePaginationSelect(event)}>
          {number}
        </PageItem>,
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Col sm={8} md={12} smoffset={2} mdoffset={1}>
            <PokeList listofPokemon={this.state.pokemon} />
          </Col>
          <br/>
          <Col >
            <Pagination size='sm'>
              {items}
            </Pagination>
          </Col>          
        </header>
      </div>
    );
  }
}