// components/TeamForm.js
import { useState } from 'react';
import styles from '../styles/TeamForm.module.css';

export default function TeamForm({ onSubmit }) {
    const [teamName, setTeamName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (teamName.trim()) {
            onSubmit(teamName);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Nombre del equipo"
                className={styles.input}
                required
            />
            <button type="submit" className={styles.button}>
                Comenzar
            </button>
        </form>
    );
}
