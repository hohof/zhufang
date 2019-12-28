import React from 'react'
import SubHeader from '../SubHeader/SubHeader'
import StatisticCount from '../StatisticCount/StatisticCount'

import styles from './HouseStatistics.module.scss'
import houseTotal from '../../../assets/house/total-count.png'
import personTotalCount from '../../../assets/house/person-total-count.png'
import personReal from '../../../assets/house/person-real.png'

function HouseStatistics() {
  return (
    <div className={styles.wrapper}>
      <SubHeader headerContent="出租房屋统计" />
      <div className={styles.contentWrapper}>
        <StatisticCount
          title="房屋总数"
          count={1111}
          unit="间"
          icon={houseTotal}
          style={{ marginRight: 10 }}
        />
        <StatisticCount
          title="居住人总数"
          count={2222}
          unit="人"
          icon={personTotalCount}
          style={{ marginRight: 10 }}
        />
        <StatisticCount title="陌生人实名化" count={2222} unit="人" icon={personReal} />
      </div>
    </div>
  )
}

export default HouseStatistics
