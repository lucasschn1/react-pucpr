import { useState } from "react";
import { auth , db } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';


function Formulario() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    function cadastrar(event) {
        // evitar recarregar a página
        event.preventDefault();

        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // se o usuário for criado com sucesso
            console.log("Usuário criado: ", userCredential.user.uid);

            const uidUsuario = userCredential.user.uid;
            const docRef = doc(db, "usuarios", uidUsuario);

            // salva o objeto no banco de dados
            setDoc(docRef, {
                uidUsuario: uidUsuario,
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                dataNascimento: dataNascimento
            });
        })

        .catch((error) => {
            //  se der erro (ex: e-mail já existe)
            console.log("Erro: ", error);
        });
    }

    return (
        <div className="cadastro">

            <h1>Cadastre-se</h1>

            <form onSubmit={cadastrar}>
            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <input
                type="text"
                placeholder="Sobrenome"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />

            <input
                type="Date"
                placeholder="Data de nascimento"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
            />

            <button type="submit">Salvar</button>
            
            </form>

        </div>
    );
}

export default Formulario;