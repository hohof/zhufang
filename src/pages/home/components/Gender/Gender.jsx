import React from 'react'
import SubHeader from '../SubHeader/SubHeader'
import ReactEcharts from 'echarts-for-react'
import styles from './Gender.module.scss'

const dayDataAxis = ['福州', '泉州', '漳州', '莆田', '厦门', '三明', '南平', '宁德', '龙岩']

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
    data: dayDataAxis,
    axisLabel: {
      textStyle: {
        color: '#fff',
      },
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
  legend: {
    orient: 'horizontal',
    data: ['男', '女'],
    selectedMode: false,
    formatter: '{name}',
    icon: 'circle',
    right: 30,
    textStyle: {
      color: '#f5f3f0',
      fontSize: 12,
    },
  },
  series: [
    {
      name: '男',
      type: 'line',
      symbol: 'circle',
      symbolSize: 10,
      lineStyle: {
        normal: {
          color: '#fffc00',
        },
      },
      itemStyle: {
        normal: {
          color: '#fffc00',
        },
      },
      hoverAnimation: false,
      data: [22, 10, 19, 23, 15, 30, 40, 30, 32],
    },
    {
      name: '女',
      type: 'line',
      symbol: 'circle',
      symbolSize: 10,
      lineStyle: {
        normal: {
          color: '#6dc938',
        },
      },
      itemStyle: {
        normal: {
          color: '#6dc938',
        },
      },
      hoverAnimation: false,
      data: [10, 30, 20, 15, 25, 15, 20, 25, 40],
    },
  ],
}

class Gender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: options,
    }
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <SubHeader headerContent="性别分布" />
        <div style={{ height: 180 }}>
          <ReactEcharts
            option={this.state.options}
            notMerge={true}
            lazyUpdate={true}
            style={{
              height: 180,
            }}
          />
        </div>
      </div>
    )
  }
}

export default Gender
