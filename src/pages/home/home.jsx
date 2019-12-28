import React from 'react'
import Header from '../components/Header/Header.jsx'
import HouseStatistics from '../components/HouseStatistics/HouseStatistics'
import PeopleNumber from '../components/PeopleNumber/PeopleNumber'

import styles from './home.module.scss'

function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <HouseStatistics />
          <PeopleNumber />
        </div>
        <div className={styles.center} />
        <div className={styles.right} />
      </div>
    </>
  )
}

export default Home
