// 统计数量
import React from 'react'
import PropTypes from 'prop-types'

import styles from './StatisticCount.module.scss'
const StatisticCount = ({ title, count, unit, icon, ...rest }) => (
  <div className={styles.wrapper} {...rest}>
    <div className={styles.icon} style={{ backgroundImage: `url(${icon})` }} />
    <div className={styles.content}>
      <div className={styles.contentTitle}>{title}</div>
      <div className={styles.contentCount}>
        <span>{count}</span>
        <span style={{ fontSize: '12px' }}>&nbsp;{unit}</span>
      </div>
    </div>
  </div>
)

StatisticCount.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default StatisticCount
