import React, { useState } from 'react';
import '../Sidebar.css';

const Sidebar = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operador, setOperador] = useState('+');
    const [respostaUsuario, setRespostaUsuario] = useState('');
    const [respostaCorreta, setRespostaCorreta] = useState(null);
    const [pontos, setPontos] = useState(0);

    function sortearDesafio() {
        const operadores = ['+', '-', '*'];
        const n1 = Math.floor(Math.random() * 10);
        const n2 = Math.floor(Math.random() * 10);
        const op = operadores[Math.floor(Math.random() * operadores.length)];

        setNum1(n1);
        setNum2(n2);
        setOperador(op);

        let resultado;
        if (op === '+') resultado = n1 + n2;
        else if (op === '-') resultado = n1 - n2;
        else if (op === '*') resultado = n1 * n2;

        setRespostaCorreta(resultado);
        setRespostaUsuario('');
    }

    function validarResposta() {
        if (parseInt(respostaUsuario) === respostaCorreta) {
            setPontos(pontos + 1);
            alert("Acertou! 🎉");
        } else {
            alert(`Errou! 😢 A resposta correta era ${respostaCorreta}`);
        }
    }

    return (
        <aside className="sidebar">
            <p className="pontos">Você tem {pontos} pontos</p>
            <button className="sortear-btn" onClick={sortearDesafio}>Sortear Desafio</button>

            <div className="desafio">
                <p>Quanto é:</p>
                <h2>{num1} {operador} {num2}</h2>

                <p>Sua Resposta:</p>
                <input
                    type="number"
                    value={respostaUsuario}
                    onChange={(e) => setRespostaUsuario(e.target.value)}
                />

                <button className="validar" onClick={validarResposta}>Validar</button>
                <button className="novo-jogo" onClick={sortearDesafio}>Novo Jogo</button>
            </div>
        </aside>
    );
};

export default Sidebar;
