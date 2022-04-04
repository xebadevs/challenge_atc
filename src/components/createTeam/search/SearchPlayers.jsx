import { useState, useEffect } from 'react';
import axios from 'axios';
import noPhoto from '../../../assets/img/nn_photo.png'
import ShowPlayers from '../../../handlers/showPlayers/ShowPlayers';


function SearchPlayers ( {player} ) {
    const API_KEY = '4fe77203ed7cebd9465165f180509282ca89a77f9b7d96c4b7b4abf878791181'
    const [info, setInfo] = useState([])
    const [renderInfo, setRenderInfo] = useState(false)
    const [query, setQuery] = useState(false)
    // const [player, setPlayer] = useState('haland')
    const [inputValue, setInputValue] = useState([])
    let closting = 'haland'

    const getInfo = (param) => {
        let options = {
            method: 'GET',
            url: 'https://apiv3.apifootball.com/?action=get_players&player_name=' + param + '&APIkey=' + API_KEY
        }
        axios
            .get(options.url, options)
            .then(res => {
                setInfo(res.data)
                console.log(res.data)
                // setRenderInfo(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    // useEffect(() => {
    //     getInfo()
    // }, [])

    // console.log('Player: ' + player)
    console.log('InputValue: ' + inputValue)

    return (
        <>
            <div>
                <input className="form-control" type="search" placeholder="Buscar jugador..." aria-label="Search" onChange={e => setInputValue(e.target.value)} />
                <button className="btn btn-warning" onClick={() => getInfo(inputValue)}>Pelota</button>
            </div>

            {inputValue != [] &&
                <div>
                    {info.map((e) => (
                        <div key={e.player_id}>
                            <img src={e.player_image? e.player_image : noPhoto}></img>
                            <p>{e.player_name.toUpperCase()}</p>
                            <p>{e.team_name}</p>
                            <p hidden>{e.player_type}</p>
                            <button>Seleccionar</button>
                            <hr />
                        </div>
                    ))}
                </div>
            }
        </>
  )
}

export default SearchPlayers