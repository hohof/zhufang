import React from 'react'
import SubHeader from '../SubHeader/SubHeader'
import ReactEcharts from 'echarts-for-react'
import styles from './Age.module.scss'

const options = {
  grid: {
    top: 40,
    right: 30,
    bottom: 30,
    left: 35,
  },
  legend: {
    bottom: 0,
    left: 'center',
    textStyle: {
      color: '#fff',
    },
    selectedMode: false,
  },
  color: ['#ffb900', '#98ff03', '#29cc65', '#0f2ef8'],
  series: [
    {
      type: 'pie',
      radius: '55%',
      startAngle: 180,
      center: ['40%', '50%'],
      data: [
        { name: '18岁以下', value: 11 },
        { name: '18-35岁', value: 2 },
        { name: '35-55岁', value: 4 },
        { name: '55岁', value: 6 },
      ],
      label: {
        formatter: '{c}人\n{d}%',
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}

class Age extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: options,
    }
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <SubHeader headerContent="年龄分布" />
        <div style={{ height: 180 }}>
          <ReactEcharts
            option={this.state.options}
            notMerge={true}
            lazyUpdate={true}
            style={{
              width: 380,
              height: 180,
            }}
          />
        </div>
      </div>
    )
  }
}

export default Age
