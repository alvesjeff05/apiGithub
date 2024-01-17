import { FaGithub } from "react-icons/fa";
import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("")
  
function handleBuscar()
{
  axios.get(`https://api.github.com/users/${usuario}`).then(response => console.log(response.data))
  axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  buscarDados(usuario);
}

async function buscarDados(usuario){
  var dados = await fetch(`https://api.github.com/users/${usuario}`).then(Response => Response.json());
  dadosTela(dados);
}

let nome
let login
let rep 
let seguindo
let seguidores
let local

function dadosTela(dados){

  document.getElementById("foto").src = dados.avatar_url
  document.getElementById("nome").innerHTML = dados.name
  document.getElementById("login").innerHTML = dados.login
  document.getElementById("repositorio").innerHTML = dados.repos_url
  document.getElementById("seguindo").innerHTML = dados.following_url
  document.getElementById("seguidores").innerHTML = dados.followers_url
  document.getElementById("local").innerHTML = dados.location
}


  return (
    <>
    <div class="box">
      <label htmlFor="">Git Search</label>
      <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <button class="btn" onClick={handleBuscar}>Pesquisar</button>
    </div>
      <hr />
      <div class="info">
        <div class="inicio">
        <img src="" alt="" id="foto"/>
        <p class="nome" id="nome" placeholder="Nome">{nome}</p>
        </div>
        <div class="caixa-media">
        <hr />
        <p class="usuario" id="login">{login}</p>
        <p class="rep" id="repositorio">{rep}</p>
        <p class="seguindo" id="seguindo">{seguindo}</p>
        <p class="seguidores" id="seguidores">{seguidores}</p>
        <p class="local" id="local">{local}</p>
        </div>
      </div>
    </>
  )
}

export default App
