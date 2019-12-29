import React from 'react'
import SubHeader from '../SubHeader/SubHeader'
import StatisticCount from '../StatisticCount/StatisticCount'

import styles from './PeopleFaceStatistics.module.scss'
import statistics from '../../../../assets/PeopleFaceStatistics/statistics.png'
import peopleCount from '../../../../assets/PeopleFaceStatistics/people-count.png'
import unKnow from '../../../../assets/PeopleFaceStatistics/unknow.png'
import warning from '../../../../assets/PeopleFaceStatistics/warning.png'

function HouseStatistics() {
  return (
    <div className={styles.wrapper}>
      <SubHeader headerContent="抓拍人脸统计" />
      <div className={styles.contentWrapper}>
        <StatisticCount
          title="抓拍人脸统计"
          count={1111111}
          unit="次"
          icon={statistics}
          style={{ width: 240, marginRight: 10, marginBottom: 20 }}
        />
        <StatisticCount
          title="居住人数"
          count={2222}
          unit="人"
          icon={peopleCount}
          style={{ width: 240, marginRight: 10, marginBottom: 20 }}
        />
        <StatisticCount
          title="陌生人数"
          count={2222}
          unit="人"
          icon={unKnow}
          style={{ width: 240, marginRight: 10, marginBottom: 20 }}
        />
        <StatisticCount
          title="重点预警人数"
          count={22}
          unit="人"
          icon={warning}
          style={{ width: 240, marginRight: 10, marginBottom: 20 }}
        />
      </div>
    </div>
  )
}

export default HouseStatistics
