import React, {useState} from "react";
import loginFields from "../utils/loginFields";

export default function Login() {

    const [fieldEmail, setEmail] = useState('');
    const [fieldPassword, setPassword] = useState('');
    const [fieldMessage, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    {/* Função para validar o login */}
    const validarLogin = (event) => {
        event.preventDefault();

        if (fieldEmail != 'lucas@email.com' || fieldPassword != "123456") {
            setMessage("E-mail ou senha incorretos");
            setMessageType("erro");
        } else {
            setMessage("Login bem sucedido!");
            setMessageType("sucesso");
        }

    }

    return (
        <div className="login">

            <h2>Login</h2>

            <form onSubmit={validarLogin}>

                {/* Percorrendo o array loginFields e criando os campos de login (email e senha) */}
                {loginFields.map((field) => (
                    
                    <div key={field.id}>

                        <input type={field.type} placeholder={field.placeholder} onChange={(event) => {
                            if (field.id === 'email') {
                                setEmail(event.target.value);
                            }

                            if (field.id === 'password') {
                                setPassword(event.target.value);
                            }
                        }} />
                    </div>

                ))}

                <button type="submit">Entrar</button>


                {fieldMessage && <p className={messageType}>
                    {fieldMessage}
                </p>}

            </form>
        </div>
    );
}