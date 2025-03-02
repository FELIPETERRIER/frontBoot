import React from 'react';

import { IMaskInput } from "react-imask";


const Login = () => {
  return (
    <div>
      <div className="container">
        <h1>Acesse ao sistema</h1>
        <form>
            <IMaskInput 
                mask="000.000.000-00"
                placeholder="Digite o seu CPF"
            />
            <input type="password" name="password" minLength={6}></input>
        </form>
      </div>
    </div>
  )
}

export default Login
