import React from 'react';
import Grid from './components/Grid';
import movies from './utils/data_a';
import pokemon from './utils/data_b';
import {AStyles, Wrapper} from "./AppStyles";
import { ReactComponent as YouTube} from "./youtube-brands.svg";


const Trailer = (data) => (
    <a href={data.Trailer.url}
       target="_blank"
       rel="noopener noreferrer">
        <AStyles><YouTube fill="white" stroke="black"/>trailer...</AStyles>
    </a>
);

const PokemonName = (data) => <span style={{textTransform: 'capitalize'}}>{data.url}</span>;

const App = () => {
    const titleMovies = 'Movies';
    const titlePokemon = 'Pokemon';

    const pokemonConfig = React.useMemo(() => [
        {
            title: 'pokedex #',
            field: 'number'
        },
        {
            title: 'name',
            field: 'name',
            component: PokemonName
        }
    ], []);

    const moviesConfig = React.useMemo(() => [
        {
            title: 'id',
            field: 'imdbID'
        },
        {
            title: 'title',
            field: 'Title'
        },
        {
            title: 'rating',
            field: 'imdbRating'
        },
        {
            title: 'trailer',
            field: 'Trailer',
            component: Trailer
        }
    ], []);

    return (<Wrapper>
            <Grid title={titleMovies} config={moviesConfig} data={movies}/>
            <Grid title={titlePokemon} config={pokemonConfig} data={pokemon}/>
        </Wrapper>
    )
};

export default App;
