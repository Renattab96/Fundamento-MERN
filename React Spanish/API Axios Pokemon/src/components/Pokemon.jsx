import React, {useState} from "react";
import axios from 'axios';
import { useEffect } from "react";
import '../styles/Pokemon.css'

const Pokemon=()=>{

    const [render, setRender]=useState(false);
    const [pokemones, setPokemones]=useState([]);
    const [toggle, setToggle]=useState(false)
    
    const handleButton=()=>{
        setToggle(!toggle);

    };

        useEffect(()=>{
            setRender(true);
        },[]);

        useEffect(()=>{
            if(render){
                axios.get('https://pokeapi.co/api/v2/pokemon?limit100000&offset=0')
                .then(response=>{setPokemones(response.data.results)})
            }        
        },[toggle]);
    
    return(
        <div className="pokecss" >
            <button onClick={handleButton}>Fetch Pokemon</button>
                <ol>
                    {
                        pokemones.map((pokemon, i)=>{
                            return(
                                <li key={i} >{pokemon.name} </li>
                            )
                        })
                    }
                </ol>
        </div>
    )
}

export default Pokemon;