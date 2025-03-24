// components/Question.js
import { useMemo } from 'react';
import styles from '../styles/Question.module.css';

export default function Question({ family, onSelectOption }) {
    // Fisher-Yates shuffle algorithm
    const shuffledOptions = useMemo(() => {
        const optionsCopy = [...family.options];
        for (let i = optionsCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
        }
        return optionsCopy;
    }, [family]);

    return (
        <div className={styles.questionBox}>
            <h3>Familia: {family.name}</h3>
            <div className={styles.options}>
                {shuffledOptions.map((option, idx) => (
                    <button
                        key={idx}
                        className={styles.optionButton}
                        onClick={() => onSelectOption(option.value)}
                    >
                        {option.word}
                    </button>
                ))}
            </div>
        </div>
    );
}
