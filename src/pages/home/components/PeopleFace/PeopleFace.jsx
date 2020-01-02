import React from 'react'
import SubHeader from '../SubHeader/SubHeader'
import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts'
import styles from './PeopleFace.module.scss'

const dayDataAxis = [
  '2020/1/2',
  '2020/1/3',
  '2020/1/4',
  '2020/1/6',
  '2020/1/7',
  '2020/1/8',
  '2020/1/9',
]
const weekDataAxis = ['第一周', '第二周', '第三周', '第四周']
const monthDataAxis = [
  '第一月',
  '第二月',
  '第三月',
  '第四月',
  '第五月',
  '第六月',
  '第七月',
  '第八月',
  '第九月',
  '第十月',
  '第十一月',
  '第十二月',
]

const seriesOptions = {
  type: 'line',
  symbol: 'circle',
  symbolSize: 10,
  lineStyle: {
    normal: {
      color: '#ffb900',
    },
  },
  itemStyle: {
    normal: {
      color: '#ffb900',
    },
  },
  hoverAnimation: false,
  data: [],
}
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
    formatter: params => `${params.name}： <br/>${params.value * 10000}人`,
    position: 'top',
    textStyle: {
      color: '#00fffc',
    },
    backgroundColor: 'rgba(10,125,177, 0.5)',
  },
  legend: {
    orient: 'horizontal',
    data: ['日', '周', '月'],
    selectedMode: 'single',
    formatter: '{div|{name}}',
    selected: {
      日: true,
      周: false,
      月: false,
    },
    icon: 'none',
    right: 30,
    itemWidth: 1,
    itemGap: 10,
    textStyle: {
      color: '#fefefe',
      fontSize: 12,
      lineHeight: 20,
      borderRadius: 5,
      backgroundColor: '#1a445a',
      rich: {
        div: {
          width: 30,
          align: 'center',
        },
      },
    },
  },
  series: [
    {
      name: '日',
      ...seriesOptions,
      data: [22, 10, 19, 23, 15, 30, 40],
    },
    {
      name: '周',
      ...seriesOptions,
    },
    {
      name: '月',
      ...seriesOptions,
    },
  ],
}

const xMap = {
  日: dayDataAxis,
  周: weekDataAxis,
  月: monthDataAxis,
}

class PeopleFace extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: options,
    }
  }
  test = e => {
    const { name, selected } = e
    const series = options.series.map(item => {
      if (item.name === name) {
        return {
          ...item,
          data: xMap[name].map(() => Math.floor(20 * Math.random())),
        }
      }
      return item
    })
    this.setState({
      options: {
        ...options,
        xAxis: { ...options.xAxis, data: xMap[name] },
        series,
        legend: { ...options.legend, selected },
      },
    })
  }
  render() {
    const events = {
      legendselectchanged: this.test,
    }
    return (
      <div className={styles.wrapper}>
        <SubHeader headerContent="抓拍人脸情况" />
        <div style={{ height: 180 }}>
          <ReactEcharts
            option={this.state.options}
            notMerge={true}
            lazyUpdate={true}
            style={{
              height: 180,
            }}
            onEvents={events}
          />
        </div>
      </div>
    )
  }
}

export default PeopleFace
