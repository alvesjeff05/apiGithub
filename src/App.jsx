import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("")
  
  function handleBuscar()
  {

    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => teste(response))

  }

  function teste(response)
  {
    document.querySelector('.foto');
    document.querySelector('.nome');
    document.querySelector('.login')
  }


  return (
    <>
      <label htmlFor="">Git Search</label>
      <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <button onClick={handleBuscar}>Pesquisar</button>
      <hr />
      <div class="info">
        <p class="foto" id="foto">{}</p>
        <p class="nome" id="nome">{}</p>
        <p class="usuario" id="login">{}</p>
        <hr />
        <p class="rep" id="repositorio">{}</p>
      </div>
    </>
  )
}

export default App
