import React from 'react'
import PropTypes from 'prop-types'
import SubHeader from '../SubHeader/SubHeader'

import styles from './FaceWall.module.scss'

// eslint-disable-next-line react/display-name
const FaceWall = React.forwardRef((props, ref) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <SubHeader headerContent="人脸墙" />
        <div className={styles.headerRight}>
          <div className={styles.unKnow}>
            <span>陌生人</span>
            <span className={styles.headerCount}>10</span>
          </div>
          <div className={styles.warning}>
            <span>预警人员</span>
            <span className={styles.headerCount}>10</span>
          </div>
        </div>
      </div>
      <div className={styles.result}>
        <h1>对比结果</h1>
        <div className={styles.resultPercent}>
          <div className={styles.resultImg}>
            <img ref={ref} src={props.imgUrl} alt="" />
          </div>
          <div className={styles.percent}>
            <div className={styles.percentBg} />
            <div className={styles.percentContent}>
              <span>相似度</span>
              <h1>99.2%</h1>
            </div>
          </div>
          <div className={styles.resultImg} onClick={props.modalVisibleChange}>
            <img src="" alt="" />
          </div>
        </div>
        <div className={styles.resultContent}>
          <ul className={styles.title}>
            <li>出现日期：</li>
            <li>姓名：</li>
            <li>身份证号码：</li>
            <li>户籍地址：</li>
            <li>抓拍设备地址：</li>
            <li>比对来源：</li>
          </ul>
          <ul className={styles.content}>
            <li>2019/12/18 15:00</li>
            <li>张**</li>
            <li>3501**********1231</li>
            <li>漳平水仙</li>
            <li>漳平水仙</li>
            <li>系统比对-居住人库</li>
          </ul>
        </div>
      </div>
      <ul className={styles.historyList}>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
    </div>
  )
})

FaceWall.propTypes = {
  imgUrl: PropTypes.string,
  modalVisibleChange: PropTypes.func,
}

export default FaceWall
