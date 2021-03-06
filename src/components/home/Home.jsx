import { useNavigate } from 'react-router-dom'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import player from '../../assets/img/soccer_player.png'

function Home() {
  const navigate = useNavigate()
  const team2 = localStorage.getItem('Team2')
  console.log(team2)

  return (
    <div className='home-container'>
        <Navbar />
        <div className="main-text mt-5">
          <h1 className='main-title'>¡Bienvenid@s a Dream Match!</h1>
          <div className='mt-5'>
            <h3>La App donde recrear</h3>
            <h3>el partido de tus sueños</h3>
            <h3>¡con tus jugadores favoritos!</h3>
          </div>
        </div>

        <div className='soccer-player mt-5'>
          <img src={player} alt='soccer player'></img>
        </div>
        <button className='btn-success mt-3 mb-5' onClick={() => navigate('/equipo1')}>¡A jugar!</button>

        {/* // * Si no se habilitó la opción de 'Volver a empezar', se puede acceder directamente al último partido */}
        {team2 !== null &&
            <button className='btn-success mt-3 mb-5 last-game' onClick={() => navigate('/dream-match')}>Ver mi último partido</button>
        }

        <Footer />
    </div>
  )
}

export default Home