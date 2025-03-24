// pages/index.js
import { useRouter } from 'next/router';
import Header from '../components/Header';
import TeamForm from '../components/TeamForm';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const handleTeamSubmit = (teamName) => {
    router.push({
      pathname: '/game',
      query: { team: teamName },
    });
  };

  return (
    <div className={styles.container}>
      <Header title="Bienvenido al Juego de Palabras" />
      <p>Ingresa el nombre de tu equipo para comenzar:</p>
      <TeamForm onSubmit={handleTeamSubmit} />
    </div>
  );
}
