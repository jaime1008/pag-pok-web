import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PokemonDetalle(){
    const {nombre} = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(()=>{
        const obtenerPokemon = async()=>{
            try {
                const res = await
                fetch(https://pokeapi.co/api/v2/pokemon/${nombre});
                    const data = await res.json();
                    setPokemon(data);
            } 
            catch(error) {
                console.error("Error al obtener el Pokémon:", error)
            }
        };
        
        obtenerPokemon();        
    }, [nombre]);

    if (!pokemon) return <p className="p-4">Cargando Pokémon...</p>;

    return (
        <div className="p-6 text-center">
            <h2 className="text-3xl font-bold capitalize">{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className=" mx-auto my-4 w-32 h-32" />
            <p><strong>Altura:</strong>{pokemon.height}</p>
            <p><strong>Peso:</strong>{pokemon.width}</p>
            <p><strong>Habilidades:</strong></p>
            <ul>{pokemon.abilities.map((hab, index)=> (
                <li key={index}>{hab.ability.name}</li>
            ))}
            </ul>
        </div>
    );
}