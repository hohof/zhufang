import React from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import styles from './ResultModal.module.scss'

const dayDataAxis = [
  '2020/1/1 09:10',
  '2020/1/2 09:10',
  '2020/1/3 09:10',
  '2020/1/4 09:10',
  '2020/1/5 09:10',
  '2020/1/6 09:10',
  '2020/1/7 09:10',
  '2020/1/8 09:10',
  '2020/1/9 09:10',
]

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
    bottom: 50,
    left: 50,
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
  constructor(props) {
    super(props)
    this.state = {
      options: options,
      imgUrl: 'https://i.picsum.photos/id/500/304/184.jpg',
    }
  }

  getDetail = () => {
    this.setState(prevState => ({
      options: {
        ...options,
        series: [
          {
            ...prevState.options.series[0],
            data: prevState.options.series[0].data.map(() => Math.floor(20 * Math.random())),
          },
        ],
      },
      imgUrl: `https://i.picsum.photos/id/${Math.floor(1000 * Math.random())}/304/184.jpg`,
    }))
  }

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
                      <ReactEcharts option={this.state.options} notMerge={true} lazyUpdate={true} />
                    </div>
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.photo}>
                    <h1>抓拍背景图</h1>
                    <img src={this.state.imgUrl} alt="" />
                  </div>
                  <div className={styles.history}>
                    <h1>历史记录</h1>
                    <ul className={styles.historyList}>
                      <li onClick={this.getDetail}>
                        <img src="" alt="" />
                      </li>
                      <li onClick={this.getDetail}>
                        <img src="" alt="" />
                      </li>
                      <li onClick={this.getDetail}>
                        <img src="" alt="" />
                      </li>
                      <li onClick={this.getDetail}>
                        <img src="" alt="" />
                      </li>
                      <li onClick={this.getDetail}>
                        <img src="" alt="" />
                      </li>
                      <li onClick={this.getDetail}>
                        <img src="" alt="" />
                      </li>
                      <li onClick={this.getDetail}>
                        <img src="" alt="" />
                      </li>
                      <li onClick={this.getDetail}>
                        <img src="" alt="" />
                      </li>
                      <li onClick={this.getDetail}>
                        <img src="" alt="" />
                      </li>
                      <li onClick={this.getDetail}>
                        <img src="" alt="" />
                      </li>
                      <li onClick={this.getDetail}>
                        <img src="" alt="" />
                      </li>
                      <li onClick={this.getDetail}>
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
