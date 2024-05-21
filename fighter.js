import React from 'react';
import styles from './Fighter.module.css';

const Fighter = ({ name, position, isAttacking, health }) => {
return (
<div className={`${styles.fighter} ${styles[position]} ${isAttacking ? styles.attack : ''}`}>
<div className={styles.name}>{name}</div>
<div className={styles.character}></div>
<div className={styles.health}>Health: {health}</div>
</div>
);
};

export default Fighter;
