// components/ScoreBoard.js
import styles from '../styles/ScoreBoard.module.css';

export default function ScoreBoard({ teams }) {
    return (
        <div className={styles.scoreBoard}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Posición</th>
                        <th>Equipo</th>
                        <th>Puntaje</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{team.teamName}</td>
                            <td>{team.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
