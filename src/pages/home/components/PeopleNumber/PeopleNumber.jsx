import React from 'react'
import SubHeader from '../SubHeader/SubHeader'
import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts'
import styles from './PeopleNumber.module.scss'

const dataAxis = ['福州', '泉州', '漳州', '莆田', '厦门', '三明', '南平', '宁德', '龙岩']
const data = [22, 18, 19, 23, 20, 30, 10, 12, 42]
const options = {
  title: {
    text: '单位：万人',
    textStyle: {
      color: '#fff',
      fontSize: 13,
      fontFamily: 'Microsoft YaHei',
    },
    padding: [10, 10],
  },
  xAxis: {
    data: dataAxis,
    axisLabel: {
      textStyle: {
        color: '#fff',
      },
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    z: 10,
  },
  yAxis: {
    axisLine: {
      show: false,
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
        color: '#b0cfff',
        type: 'dashed',
      },
    },
  },
  grid: {
    top: 40,
    right: 30,
    bottom: 30,
    left: 35,
  },
  tooltip: {
    formatter: params => `${params.value * 10000}人`,
    position: 'top',
    textStyle: {
      color: '#00fffc',
    },
    backgroundColor: 'rgba(10,125,177, 0.5)',
  },
  series: [
    {
      type: 'bar',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#00d1fe' },
            { offset: 1, color: '#007bba' },
          ]),
        },
      },
      barWidth: 10,
      data,
    },
  ],
}

const PeopleNumber = () => (
  <div className={styles.wrapper}>
    <SubHeader headerContent="人数分布" />
    <div style={{ height: 180 }}>
      <ReactEcharts
        option={options}
        notMerge={true}
        lazyUpdate={true}
        theme={'theme_name'}
        style={{
          height: 180,
        }}
      />
    </div>
  </div>
)

export default PeopleNumber
