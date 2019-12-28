import React from 'react'
import SubHeader from '../SubHeader/SubHeader'

import styles from './HouseStatistics.module.scss'

function HouseStatistics() {
  return (
    <div className={styles.wrapper}>
      <SubHeader headerContent="出租房屋统计" />
    </div>
  )
}

export default HouseStatistics
