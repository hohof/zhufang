import React from 'react'
import SubHeader from '../SubHeader/SubHeader'
import ReactEcharts from 'echarts-for-react'
import styles from './AddressTimes.module.scss'

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
    formatter: '{c}0000人',
    position: 'top',
    textStyle: {
      color: '#00fffc',
    },
    backgroundColor: 'rgba(10,125,177, 0.5)',
  },
  legend: {
    orient: 'horizontal',
    data: ['居住人', '陌生人'],
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
      name: '居住人',
      type: 'line',
      symbol: 'circle',
      symbolSize: 10,
      lineStyle: {
        normal: {
          color: '#01a7d6',
        },
      },
      itemStyle: {
        normal: {
          color: '#01a7d6',
        },
      },
      hoverAnimation: false,
      data: [22, 10, 19, 23, 15, 30, 40, 30, 32],
    },
    {
      name: '陌生人',
      type: 'line',
      symbol: 'circle',
      symbolSize: 10,
      lineStyle: {
        normal: {
          color: '#a4db69',
        },
      },
      itemStyle: {
        normal: {
          color: '#a4db69',
        },
      },
      hoverAnimation: false,
      data: [10, 30, 20, 15, 25, 15, 20, 25, 40],
    },
  ],
}

class AddressTimes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: options,
    }
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <SubHeader headerContent="地址出入频数" />
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

export default AddressTimes
