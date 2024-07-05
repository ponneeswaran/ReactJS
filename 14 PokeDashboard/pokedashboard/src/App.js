import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import PokemonIndexList from './components/PokemonIndexList';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      pokemon: [{}],
      activePage: 1,
      limit: 50,
      offset: 0,
      totalPages: 0,
      count: 0,
      loaded: false
    };
    this.loadPokemon = this.loadPokemon.bind(this);
    this.handlePaginationSelect = this.handlePaginationSelect.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
  }

  loadPokemon(url) {
    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        let pages = Math.round(json.count / this.state.limit);
        this.setState({
          pokemon: json.results,
          totalPages: pages,
          count: json.count,
          loaded: true
        });
      }).catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.loadPokemon(`${this.props.baseURL}/pokemon/?limit=${this.state.limit}&offset=${this.state.offset}`);
  }

  handlePaginationSelect(event) {
    let offset = this.state.limit * (event.target.text - 1);
    this.loadPokemon(`${this.props.baseURL}/pokemon/?limit=${this.state.limit}&offset=${offset}`);
    this.setState({
      activePage: + event.target.innerHTML
    })
  }

  handleLimitChange(event) {
    this.setState({
      limit: + event.target.innerHTML || this.state.count, 
      activePage: 1
    }, ()=> {
      this.loadPokemon(`${this.props.baseURL}/pokemon/?limit=${this.state.limit}&offset=0`);
    })
  }

  render() {
    // let active = this.state.activePage;
    // let items = [];
    // for (let number = 1; number <= this.state.totalPages; number++) {
    //   items.push(
    //     <PageItem key={number} active={number === active} onClick={(event) => this.handlePaginationSelect(event)}>
    //       {number}
    //     </PageItem>,
    //   );
    // }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <SelectItemsPerPageButtons options={[10,50,100,200]} selectedValue={this.state.limit} allValue={this.state.count} onOptionsSelected={this.handleLimitChange}/>

          <Col sm={8} md={12} smoffset={2} mdoffset={1}>
            <PokeList listofPokemon={this.state.pokemon} />
          </Col>
          <br/>
          <Col >
            <Pagination size='sm'>
              {items}
            </Pagination>
          </Col>           */}
        </header>

        <PokemonIndexList 
          display={this.state.loaded}
          options={[10,50,100,200]}
          selectedValue={this.state.limit}
          allValue={this.state.count}
          onOptionsSelected={this.handleLimitChange}
          listofPokemon={this.state.pokemon}
          btnSize={'sm'}
          totalPages={this.state.totalPages}
          activePage={this.state.activePage}
          onSelect={this.handlePaginationSelect}
        />
      </div>
    );
  }
}