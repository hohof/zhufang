import React from 'react'
import Header from '../components/Header/Header.jsx'
import HouseStatistics from '../components/HouseStatistics/HouseStatistics'
import PeopleNumber from '../components/PeopleNumber/PeopleNumber'
import PeopleFace from '../components/PeopleFace/PeopleFace.jsx'

import styles from './home.module.scss'

function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <HouseStatistics />
          <PeopleNumber />
          <PeopleFace />
        </div>
        <div className={styles.center} />
        <div className={styles.right} />
      </div>
    </>
  )
}

export default Home
