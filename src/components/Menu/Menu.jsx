import React from 'react';

import styles from './Menu.module.css';

class Menu extends React.Component {

  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>Условные знаки для топографических карт и планов</h1>
      </header>
    )
  }
}

export default Menu;
