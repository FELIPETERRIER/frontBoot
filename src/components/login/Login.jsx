import React from 'react';
import './Login.css'
import { FaUser, FaLock, FaIdBadge } from 'react-icons/fa';
import { useState,useEffect } from 'react';
import { IMaskInput } from "react-imask";
import Api from '../../Services/ApiService'; 

const Login = () => {
  const[id,setId] = useState("");  
  const[user,setUser] = useState("");
  const[password,setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 
   
    alert('enviando os dados' + id + " - " + user + " - "  + password)

    console.log('envio')

  }
  useEffect(()=>{
    loadUsers()
  },[])
  async function loadUsers(){
    const response = await Api.get("/Login")
    console.log(response)
  }
 



  return (
    <div>
      <div className="container">
        <h1>Acesse ao sistema</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="number" name="id" placeholder='Digite seu id ' minLength={1}
            onChange={(e) =>{setId(e.target.value)}} />
            <FaIdBadge />
          </div>
          <div>
            <IMaskInput className='user' 
              mask="000.000.000-00"              
              placeholder="Digite o seu CPF"
              onChange={(e) => setUser(e.target.value)}
            />
            <FaUser />
          </div>
          <div>
            <input type="password" name="password" placeholder='Digite sua senha ' minLength={6} 
            onChange={(e) =>setPassword(e.target.value) } />
            <FaLock />
          </div>
          <button onClick={useEffect()}>Enter</button>
          <div className='recall-forget'>
            <label>
              <input type="checkbox" />
              Lembre de mim!
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <div className='singup-link'>
            <p>
              Não tem conta?<a href="#">
                Criar nova conta.
              </a>
            </p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
