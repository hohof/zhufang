import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header/Header.jsx'
import HouseStatistics from './components/HouseStatistics/HouseStatistics'
import PeopleNumber from './components/PeopleNumber/PeopleNumber'
import PeopleFace from './components/PeopleFace/PeopleFace'
import AddressTimes from './components/AddressTimes/AddressTimes'
import Household from './components/Household/Household'
import Gender from './components/Gender/Gender'
import Age from './components/Age/Age'
import HomeMap from './components/HomeMap/HomeMap'
import PeopleFaceStatistics from './components/PeopleFaceStatistics/PeopleFaceStatistics'
import FaceWall from './components/FaceWall/FaceWall'
import ResultModal from './components/ResultModal/ResultModal'

import styles from './home.module.scss'

const cameraNumberList = [
  {
    name: '福州',
    number: 111,
  },
  {
    name: '莆田',
    number: 101,
  },
  {
    name: '泉州',
    number: 30,
  },
  {
    name: '厦门',
    number: 80,
  },
  {
    name: '漳州',
    number: 90,
  },
  {
    name: '宁德',
    number: 50,
  },
  {
    name: '南平',
    number: 20,
  },
  {
    name: '三明',
    number: 100,
  },
  {
    name: '龙岩',
    number: 130,
  },
]

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.faceWallImgRef = React.createRef()
    this.state = {
      imgUrl: '',
      modalVisible: false,
    }
  }

  modalVisibleChange = () => {
    this.setState(prevState => ({
      modalVisible: !prevState.modalVisible,
    }))
  }

  imgClick = () => {
    const { left: targetLeft, top: targetTop } = this.faceWallImgRef.current.getBoundingClientRect()
    if (
      targetLeft > document.documentElement.clientWidth ||
      targetTop > document.documentElement.clientHeight ||
      !window.amap
    ) {
      return
    }
    const markers = window.amap.getAllOverlays('marker')
    const marker = markers[Math.floor(Math.random() * markers.length)]
    const maskDom = marker.getContent()
    const { x, y } = window.AMap.DomUtil.getViewportOffset(maskDom)
    if (!x || !y) {
      return
    }
    const { left: curLeft, top: curTop } = maskDom.getBoundingClientRect()
    const div = document.createElement('div')
    const img = document.createElement('img')
    const imgSrc = `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/90/110`
    img.src = imgSrc
    img.onload = () => {
      document.body.append(div)
      img.remove()
      ReactDOM.render(<Img top={curTop} left={curLeft} />, div)
      const toTargetTimeId = setTimeout(() => {
        ReactDOM.render(
          React.cloneElement(React.cloneElement(<Img />, { top: targetTop, left: targetLeft })),
          div,
        )
        clearTimeout(toTargetTimeId)
        const removeImgTimeId = setTimeout(() => {
          clearTimeout(removeImgTimeId)
          this.setState({
            imgUrl: imgSrc,
          })
          ReactDOM.unmountComponentAtNode(div)
          div.remove()
        }, 1000)
      }, 300)
    }
    const Img = ({ top, left }) => (
      <img
        src={imgSrc}
        className={styles.cameraScanImg}
        alt=""
        style={{
          top,
          left,
        }}
      />
    )
  }

  render() {
    return (
      <>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <HouseStatistics />
            <PeopleNumber />
            <PeopleFace />
            <AddressTimes />
            <Household />
          </div>
          <div className={styles.center}>
            <div className={styles.map}>
              <div className={styles.cameraNumberWrapper}>
                <h1>设备分布</h1>
                <ul>
                  {cameraNumberList.map(item => (
                    <li key={item.name}>
                      <span>{item.name}&nbsp;&nbsp;</span>
                      <span>
                        <span className={styles.cameraNumber}>{item.number}</span>
                        <span>台</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.cameraStatistics}>
                <div className={styles.cameraTotalCount}>
                  <div className={styles.icon} />
                  <div>设备总数：72台</div>
                </div>
                <div className={styles.cameraCoverAddress}>
                  <div className={styles.icon} />
                  <div>覆盖地址：1000个</div>
                </div>
              </div>
              <HomeMap />
            </div>
            <div className={styles.centerBottom}>
              <Age />
              <Gender />
            </div>
          </div>
          <div className={styles.right}>
            <PeopleFaceStatistics />
            <FaceWall
              ref={this.faceWallImgRef}
              imgUrl={this.state.imgUrl}
              imgClick={this.imgClick}
              modalVisibleChange={this.modalVisibleChange}
            />
          </div>
        </div>
        <ResultModal
          modalVisible={this.state.modalVisible}
          modalVisibleChange={this.modalVisibleChange}
        />
      </>
    )
  }
}

export default Home
