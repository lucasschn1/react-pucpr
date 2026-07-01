import React, {useState} from "react";
import loginFields from "../utils/loginFields";
import { auth } from '../services/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const [fieldEmail, setEmail] = useState('');
    const [fieldPassword, setPassword] = useState('');
    const [fieldMessage, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const validarLogin = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth , fieldEmail, fieldPassword)
        .then((userCredential) => {
            // usuário logado
            console.log("Usuário logado: ", userCredential.user.uid);
            // redireciona pra página principal
            navigate('/principal'); 

        })
        . catch((error) => {
            // Erro (ex: senha errada ou usuário nãp existe)
            console.log("Erro: ", error);
            setMessage("E-mail ou senha incorretos");
            setMessageType("error");
        });
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

                <Link to="/cadastro" className="botao-cadastro">
                    Não tem uma conta? Cadastre-se
                </Link>

                {fieldMessage && <p className={messageType}>
                    {fieldMessage}
                </p>}

            </form>
        </div>
    );
}