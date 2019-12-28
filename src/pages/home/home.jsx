import React from 'react'
import Header from '../components/Header/Header.jsx'
import HouseStatistics from '../components/HouseStatistics/HouseStatistics'
import PeopleNumber from '../components/PeopleNumber/PeopleNumber'
import PeopleFace from '../components/PeopleFace/PeopleFace'
import AddressTimes from '../components/AddressTimes/AddressTimes'
import Household from '../components/Household/Household'
import Gender from '../components/Gender/Gender'

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
          <AddressTimes />
          <Household />
        </div>
        <div className={styles.center}>
          <div className={styles.map} />
          <div className={styles.centerBottom}>
            <Gender />
          </div>
        </div>
        <div className={styles.right} />
      </div>
    </>
  )
}

export default Home
