import React from "react";
import SelectItemsPerPageButtons from "./SelectItemsPerPageButtons";
import PaginationContainer from "./PaginationContainer";
import PokeList from "./PokeList";

const PokemonIndexList = ({display, options, selectedValue, allValue, onOptionsSelected, listofPokemon, btnSize, totalPages, activePage, onSelect}) => {
    
    let style = {display:'none'}

    if(display){
        style.display = 'initial'
    } else {
        style.display = 'none'
    }

    return (
        <div style={style}>
            <SelectItemsPerPageButtons 
                options={options}
                selectedValue={selectedValue}
                allValue={allValue}
                onOptionsSelected={onOptionsSelected}
            />

            <PokeList 
                listofPokemon={listofPokemon}
            />

            <PaginationContainer 
                size={btnSize}
                totalPages={totalPages}
                activePage={activePage}
                onSelect={onSelect}
            />
        </div>
    )
}

export default PokemonIndexList;