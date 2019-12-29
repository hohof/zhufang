import React from 'react'
import Header from './components/Header/Header.jsx'
import HouseStatistics from './components/HouseStatistics/HouseStatistics'
import PeopleNumber from './components/PeopleNumber/PeopleNumber'
import PeopleFace from './components/PeopleFace/PeopleFace'
import AddressTimes from './components/AddressTimes/AddressTimes'
import Household from './components/Household/Household'
import Gender from './components/Gender/Gender'
import Age from './components/Age/Age'
import HomeMap from './components/HomeMap/HomeMap'

import styles from './home.module.scss'

const cameraNumberList = [
  {
    name: '福州',
    number: 111,
  },
  {
    name: '莆田',
    number: 101,
  },
  {
    name: '泉州',
    number: 30,
  },
  {
    name: '厦门',
    number: 80,
  },
  {
    name: '漳州',
    number: 90,
  },
  {
    name: '宁德',
    number: 50,
  },
  {
    name: '南平',
    number: 20,
  },
  {
    name: '三明',
    number: 100,
  },
  {
    name: '龙岩',
    number: 130,
  },
]

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
          <div className={styles.map}>
            <div className={styles.cameraNumberWrapper}>
              <h1>设备分布</h1>
              <ul>
                {cameraNumberList.map(item => (
                  <li key={item.name}>
                    <span>{item.name}&nbsp;&nbsp;</span>
                    <span>
                      <span className={styles.cameraNumber}>{item.number}</span>
                      <span>台</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.cameraStatistics}>
              <div className={styles.cameraTotalCount}>
                <div className={styles.icon} />
                <div>设备总数：72台</div>
              </div>
              <div className={styles.cameraCoverAddress}>
                <div className={styles.icon} />
                <div>覆盖地址：1000个</div>
              </div>
            </div>
            <HomeMap />
          </div>
          <div className={styles.centerBottom}>
            <Age />
            <Gender />
          </div>
        </div>
        <div className={styles.right} />
      </div>
    </>
  )
}

export default Home
