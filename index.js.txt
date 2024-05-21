import React, { useEffect, useState } from 'react';
import Fighter from '../components/Fighter';
import styles from './index.module.css';

const INITIAL_HEALTH = 100;
const DAMAGE = 10;

export default function Home() {
  const [fighter1, setFighter1] = useState({ name: 'Razor Ray', isAttacking: false, health: INITIAL_HEALTH });
  const [fighter2, setFighter2] = useState({ name: 'Samurai Li', isAttacking: false, health: INITIAL_HEALTH });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'a') {
        attackFighter1();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const cpuAttack = setInterval(() => {
      attackFighter2();
    }, 2000);

    return () => clearInterval(cpuAttack);
  }, []);

  const attackFighter1 = () => {
    setFighter1((prev) => ({ ...prev, isAttacking: true }));
    setTimeout(() => {
      setFighter1((prev) => ({ ...prev, isAttacking: false }));
      setFighter2((prev) => ({ ...prev, health: prev.health - DAMAGE }));
    }, 100);
  };

  const attackFighter2 = () => {
    setFighter2((prev) => ({ ...prev, isAttacking: true }));
    setTimeout(() => {
      setFighter2((prev) => ({ ...prev, isAttacking: false }));
      setFighter1((prev) => ({ ...prev, health: prev.health - DAMAGE }));
    }, 100);
  };

  return (
    <div className={styles.container}>
      <Fighter name={fighter1.name} position="left" isAttacking={fighter1.isAttacking} health={fighter1.health} />
      <Fighter name={fighter2.name} position="right" isAttacking={fighter2.isAttacking} health={fighter2.health} />
    </div>
  );
}
