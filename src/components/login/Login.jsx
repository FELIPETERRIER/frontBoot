import React from 'react';
import { IMaskInput } from "react-imask";


const Login = () => {
  return (
    <div>
      <div className="container">
        <h1>Acesse ao sistema</h1>
        <form>
            <div>
                <IMaskInput 
                mask="000.000.000-00"
                placeholder="Digite o seu CPF"
                />
            </div>
            <div>
                <input type="password" name="password" placeholder='Digite sua senha ' minLength={6}/>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
