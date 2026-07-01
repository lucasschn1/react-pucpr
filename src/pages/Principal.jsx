import React, { useState, useEffect } from 'react';
import { auth, db } from '../services/firebaseConnection';
import { doc, getDoc } from 'firebase/firestore';
import { use } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

export default function MostrarUsuario() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    // converte a data para o formato brasileiro
    function formatarData(dataBruta) {
        if (!dataBruta) {
            return "";
        }
        return new Date(dataBruta + 'T00:00:00').toLocaleDateString('pt-BR');
    }

    useEffect(() => {
        
        const buscarDadosDoFirebase = async () => {
            try {
                const uidUsuario = auth.currentUser.uid;
                const docRef = doc(db, "usuarios", uidUsuario);

                const usuario = await getDoc(docRef);

                if (usuario.exists()) {
                    const dadosDoBanco = usuario.data();

                    // preenchendo os estados
                    setNome(dadosDoBanco.nome);
                    setSobrenome(dadosDoBanco.sobrenome);
                    setEmail(dadosDoBanco.email);
                    setDataNascimento(dadosDoBanco.dataNascimento);

                } else {
                    console.log("Documento não encontrado");
                }
            } catch (error) {
                console.log("Errod ao buscar dados: ", error);
            }
        };

        buscarDadosDoFirebase();

    }, []);

    return (
    <div className="usuario">
        <h2>Dados do Usuário</h2>

        <p>
            <strong>Nome:</strong> {nome}
        </p>

        <p>
            <strong>Sobrenome:</strong> {sobrenome}
        </p>

        <p>
            <strong>E-mail:</strong> {email}
        </p>

        <p>
            <strong>Data de nascimento:</strong> {formatarData(dataNascimento)}
        </p>
    </div>
    );
}