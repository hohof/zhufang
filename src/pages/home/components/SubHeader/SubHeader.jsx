// 子标题
import React from 'react'
import PropTypes from 'prop-types'

import styles from './SubHeader.module.scss'

const SubHeader = ({ headerContent }) => <div className={styles.header}>{headerContent}</div>

SubHeader.propTypes = {
  headerContent: PropTypes.string.isRequired,
}

export default SubHeader
