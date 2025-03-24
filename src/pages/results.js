import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import ScoreBoard from '../components/ScoreBoard';
import styles from '../styles/Results.module.css';

export default function Results() {
    const [teams, setTeams] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const storedTeams = localStorage.getItem('teams');
        if (storedTeams) {
            const teamsArray = JSON.parse(storedTeams);
            teamsArray.sort((a, b) => b.score - a.score);
            setTeams(teamsArray);
        }
    }, []);

    return (
        <div className={styles.container}>
            <Header title="Resultados del Juego" />
            {teams.length === 0 ? (
                <p>No hay resultados disponibles.</p>
            ) : (
                <ScoreBoard teams={teams} />
            )}
            <button className={styles.button} onClick={() => router.push('/')}>
                Volver a Inicio
            </button>
        </div>
    );
}
