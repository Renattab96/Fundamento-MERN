import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/LukeApi.css'

const LukeApi = (props) => {

    const [categories, setCateories] = useState([]);
    const [category, setCategory] = useState("");
    const [id, setId] = useState(0);
    const [fail, setFail] = useState(false);
    const [character, setCharacter] = useState([]);
    const { id: charid } = useParams();

    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(response => {

                let list = Object.entries(response.data);
                let cat = [];
                list.forEach(element => {
                    cat.push(element[0]);
                });
                setCateories([...cat]);
                setCategory(cat[0]);
            })

        if (charid !== undefined) {
            axios.get("https://swapi.dev/api/people/" + charid)
                .then(response => {
                    console.log(response.data);
                    let list = Object.entries(response.data);
                    list.splice(5);
                    console.log(list);
                    setCharacter(list);
                    setFail(false);
                })
                .catch(() => {
                    console.log("REJECTED");
                    setFail(true);
                })
        }
    }, [])

    const searchAPI = (e) => {
        e.preventDefault();
        let route = "https://swapi.dev/api/";

        if (id !== 0 && id !== undefined && category !== undefined) {

            route += category + "/" + id;
            axios.get(route)
                .then(response => {
                    console.log(response.data);
                    let list = Object.entries(response.data);
                    list.splice(5);
                    console.log(list);
                    setCharacter(list);
                    setFail(false);
                })
                .catch(() => {
                    console.log("REJECTED");
                    setFail(true);
                })
        }
    }
    
    return (
        <div>
            <form onSubmit={(e) => searchAPI(e)}>
                <div>
                    <label>Categoria:</label>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        {
                            categories.map((item, index) => {
                                return (
                                    <option key={index + item} value={item}>{item}</option>
                                );
                            })
                        }
                    </select>
                </div>

                <div >
                    <label>Id</label>
                    <input type="number"  onChange={(e) => setId(e.target.value)} />
                </div>

                <div>
                    <br />
                    <button type="submit">Buscar</button>
                </div>

            </form>

            <div className="apidatacss" >
                {
                    fail ?
                        <div>
                            <img src="https://i.pinimg.com/originals/76/56/2b/76562b42f200b61a0d5d70a999328206.jpg" alt="OBI WAN KENOBI" />
                            <h2>Not se encuentra el droide que busca</h2>
                        </div>
                        :
                        character.map((item, index) => {
                            return (
                                <h2 key={index} >Dato:{item[1]}</h2>

                            );
                        })
                }

            </div>
        </div>
    );

}

export default LukeApi;