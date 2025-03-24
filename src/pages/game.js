import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from '../components/Header';
import Question from '../components/Question';
import { families } from '../utils/data';
import styles from '../styles/Game.module.css';

export default function Game() {
    const router = useRouter();
    const { team } = router.query;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleOptionSelect = (value) => {
        const newScore = score + value;
        setScore(newScore);
        if (currentQuestionIndex < families.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            const storedTeams = localStorage.getItem('teams');
            const teams = storedTeams ? JSON.parse(storedTeams) : [];
            teams.push({ teamName: team, score: newScore });
            localStorage.setItem('teams', JSON.stringify(teams));
            setFinished(true);
        }
    };

    if (!team) {
        return <div>Loading...</div>;
    }

    if (finished) {
        return (
            <div className={styles.container}>
                <Header title={`Equipo: ${team}`} />
                <h2>¡Terminaste la ronda!</h2>
                <p className={styles.finalScore}>Tu puntaje final es: {score}</p>
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.button}
                        onClick={() => router.push('/results')}
                    >
                        Ver Resultados
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => router.push('/')}
                    >
                        Jugar de nuevo
                    </button>
                </div>
            </div>
        );
    }

    const currentFamily = families[currentQuestionIndex];

    return (
        <div className={styles.container}>
            <Header title={`Equipo: ${team}`} />
            <h2>
                Pregunta {currentQuestionIndex + 1} de {families.length}
            </h2>
            <Question family={currentFamily} onSelectOption={handleOptionSelect} />
        </div>
    );
}
