import React from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
import PropTypes from 'prop-types'
import { CSSTransition, Transition } from 'react-transition-group'

import styles from './ResultModal.module.scss'

const dayDataAxis = ['福州', '泉州', '漳州', '莆田', '厦门', '三明', '南平', '宁德', '龙岩']

const options = {
  title: {
    text: '单位：次',
    textStyle: {
      color: '#fff',
      fontSize: 13,
      fontFamily: 'Microsoft YaHei',
    },
    padding: [10, 10],
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: dayDataAxis,
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: '#3698b4',
      },
    },
    z: 10,
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: '#3698b4',
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: '#fff',
      },
    },
    splitLine: {
      lineStyle: {
        color: '#05273a',
      },
    },
  },
  grid: {
    top: 40,
    right: 30,
    bottom: 30,
    left: 35,
  },

  series: [
    {
      type: 'line',
      symbol: 'none',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      itemStyle: {
        color: '#6dc938',
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#fdff6c',
          },
          {
            offset: 1,
            color: '#53c019',
          },
        ]),
      },
      hoverAnimation: false,
      data: [10, 30, 20, 15, 25, 15, 20, 25, 30],
    },
  ],
}

class ResultModal extends React.Component {
  render() {
    const { modalVisible } = this.props
    return (
      <>
        <CSSTransition
          in={modalVisible}
          unmountOnExit
          timeout={200}
          classNames={{
            enter: styles.animateEnter,
            enterActive: styles.animateEnterActive,
            enterDone: styles.animateEnterDone,
            exit: styles.animateExit,
            exitActive: styles.animateExitActive,
            exitDone: styles.animateExitDone,
          }}
        >
          <div className={styles.modal} />
        </CSSTransition>
        <CSSTransition
          in={modalVisible}
          unmountOnExit
          timeout={200}
          classNames={{
            enter: styles.animateEnter,
            enterActive: styles.animateEnterActive,
            enterDone: styles.animateEnterDone,
            exit: styles.animateExit,
            exitActive: styles.animateExitActive,
            exitDone: styles.animateExitDone,
          }}
        >
          <div className={styles.modalWrapper}>
            <div className={styles.wrapper}>
              <div className={styles.contentWrapper}>
                <div className={styles.left}>
                  <div className={styles.result}>
                    <h1>对比结果</h1>
                    <div className={styles.resultPercent}>
                      <div className={styles.resultImg}>
                        <img src="" alt="" />
                      </div>
                      <div className={styles.percent}>
                        <div className={styles.percentBg} />
                        <div className={styles.percentContent}>
                          <span>相似度</span>
                          <h1>99.2%</h1>
                        </div>
                      </div>
                      <div className={styles.resultImg}>
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
                  <div className={styles.times}>
                    <h1>个人出入频数</h1>
                    <div className={styles.line}>
                      <ReactEcharts option={options} notMerge={true} lazyUpdate={true} />
                    </div>
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.photo}>
                    <h1>抓拍背景图</h1>
                    <img src="https://i.picsum.photos/id/500/304/184.jpg" alt="" />
                  </div>
                  <div className={styles.history}>
                    <h1>历史记录</h1>
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
                </div>
              </div>
              <div className={styles.closeIcon} onClick={this.props.modalVisibleChange} />
            </div>
          </div>
        </CSSTransition>
      </>
    )
  }
}

ResultModal.propTypes = {
  modalVisible: PropTypes.bool,
  modalVisibleChange: PropTypes.func,
}

export default ResultModal
