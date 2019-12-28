import React from 'react'
import Header from '../components/Header/Header.jsx'
import HouseStatistics from '../components/HouseStatistics/HouseStatistics.jsx'

import styles from './home.module.scss'

function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <HouseStatistics />
        </div>
        <div className={styles.center} />
        <div className={styles.right} />
      </div>
    </>
  )
}

export default Home
