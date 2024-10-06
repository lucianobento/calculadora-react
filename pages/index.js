// pages/index.js

// Importando o hook useState do React para gerenciar o estado do componente
import { useState } from 'react';
// Importando os estilos CSS do módulo Home.module.css
import styles from '../styles/Home.module.css'; // Importando o CSS

// Componente principal da aplicação
export default function Home() {
    // Declarando estados para armazenar os números e a soma
    const [num1, setNum1] = useState(''); // Estado para o primeiro número
    const [num2, setNum2] = useState(''); // Estado para o segundo número
    const [sum, setSum] = useState(null); // Estado para armazenar a soma

    // Função chamada ao submeter o formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)
        
        // Convertendo os valores dos inputs para números de ponto flutuante
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        
        // Verificando se os valores convertidos são números válidos
        if (!isNaN(number1) && !isNaN(number2)) {
            // Se ambos os valores são válidos, calcula a soma e atualiza o estado
            setSum(number1 + number2);
        } else {
            // Se algum valor não é válido, reseta a soma e exibe um alerta
            setSum(null);
            alert('Por favor, insira números válidos.');
        }
    };

    // Renderizando o componente
    return (
        <div className={styles.main}> {/* Container principal com estilo */}
            <div className={styles.container}> {/* Container para centralizar o conteúdo */}
                <h1 className="h1">Calculadora de Soma</h1> {/* Título da aplicação */}
                <form className={styles.form} onSubmit={handleSubmit}> {/* Formulário */}
                    <input
                        className={styles.input} // Estilos para o input
                        type="number" // Tipo do input como número
                        value={num1} // Valor controlado pelo estado num1
                        onChange={(e) => setNum1(e.target.value)} // Atualiza num1 quando o valor muda
                        placeholder="Digite o primeiro número" // Placeholder do input
                        required // Torna o campo obrigatório
                    />
                    <input
                        className={styles.input} // Estilos para o segundo input
                        type="number" // Tipo do input como número
                        value={num2} // Valor controlado pelo estado num2
                        onChange={(e) => setNum2(e.target.value)} // Atualiza num2 quando o valor muda
                        placeholder="Digite o segundo número" // Placeholder do input
                        required // Torna o campo obrigatório
                    />
                    <button className={styles.button} type="submit">Calcular Soma</button> {/* Botão para submeter o formulário */}
                </form>
                {sum !== null && <h2 className="h2">Resultado: {sum}</h2>} {/* Exibe o resultado se a soma não for nula */}
            </div>
        </div>
    );
}
