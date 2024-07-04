import React from "react";
import { ListGroup, ListGroupItem, Col } from "react-bootstrap";

const PokeList = (listofPokemon) => {
    let pokemon = listofPokemon.listofPokemon.map((creature) => {
        return (
            <Col sm={6} md={3} key={creature.name}>
                <ListGroupItem className="PokeList-item">{creature.name}</ListGroupItem>
            </Col>
        )
    });

    return (
        <ListGroup>
            {pokemon}
        </ListGroup>
    )
}

export default PokeList;