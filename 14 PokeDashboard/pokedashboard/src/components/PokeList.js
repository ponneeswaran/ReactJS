import React from "react";
import { ListGroup, ListGroupItem, Col } from "react-bootstrap";

const PokeList = (listofPokemon) => {
    let pokemon = typeof(listofPokemon.listofPokemon)!="undefined" ? listofPokemon.listofPokemon.map((creature) => {
        return (
            <Col sm={6} md={3} key={creature.name}>
                <ListGroupItem className="PokeList-item" key={Math.random()}>{creature.name}</ListGroupItem>
            </Col>
        )
    }):null;

    return (
        <div>
            <Col sm={8} md={10} smoffset={2} mdoffset={1} key={Math.random()}>
                <ListGroup key={Math.random()}>
                    {pokemon}
                </ListGroup>
            </Col>
        </div>
    )
}

export default PokeList;