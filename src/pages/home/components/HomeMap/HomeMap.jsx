import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Marker } from '../../../../react-amap/index'
import widthMapStatus from '../../../../components/MapWrapper/MapWrapper'

import styles from './HomeMap.module.scss'
import cameraMap from '../../../../assets/home/camera-map.png'

const createId = () => Math.floor(Math.random() * 1000000000000)

const cameraPositionList = [
  { id: createId(), position: [116.860446, 25.429133] },
  { id: createId(), position: [116.860446, 26.613819] },
  { id: createId(), position: [118.530368, 26.712] },
  { id: createId(), position: [117.761325, 27.221171] },
  { id: createId(), position: [118.486423, 25.686827] },
  { id: createId(), position: [116.882419, 25.051512] },
  { id: createId(), position: [118.310641, 24.832355] },
  { id: createId(), position: [119.497165, 26.55487] },
  { id: createId(), position: [118.684177, 26.712] },
  { id: createId(), position: [117.431735, 26.535214] },
  { id: createId(), position: [117.651462, 25.785792] },
  { id: createId(), position: [119.189548, 25.963721] },
]

const config = {
  events: {
    created: mapInstance => {
      window.AMap.plugin(['AMap.DistrictSearch', 'AMap.DistrictLayer'], () => {
        const disProvince = new window.AMap.DistrictLayer.Province({
          zIndex: 12,
          adcode: ['350000'],
          depth: 1,
          styles: {
            fill: () => '',
            'city-stroke': '#008db5', //中国地级市边界
            'county-stroke': '', //中国区县边界
          },
        })
        disProvince.setMap(mapInstance)

        const opts = {
          subdistrict: 0,
          extensions: 'all',
          level: 'province',
        }
        //利用行政区查询获取边界构建mask路径
        //也可以直接通过经纬度构建mask路径
        const district = new window.AMap.DistrictSearch(opts)
        district.search('福建省', function(status, result) {
          const bounds = result.districtList[0].boundaries
          for (let i = 0; i < bounds.length; i += 1) {
            new window.AMap.Polyline({
              path: bounds[i],
              strokeColor: '#008ce7',
              strokeWeight: 4,
              map: mapInstance,
            })
          }
        })
      })
      window.amap = mapInstance
      const timeId = setTimeout(() => {
        mapInstance.setFitView()
        mapInstance.setZoom(7.5)
        clearTimeout(timeId)
      }, 500)
    },
    click: () => {
      if (window.infoWindowInstance) {
        window.infoWindowInstance.hide()
      }
    },
  },
}

class AMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: null,
      infoWindowVisible: false,
    }
  }

  markerEvent = {
    click: e => {
      if (window.infoWindowInstance) {
        window.infoWindowInstance.show()
      }
      this.setState({
        infoWindowVisible: true,
        position: e.target.getPosition(),
      })
    },
  }

  // componentDidUpdate() {
  //   console.log('map update')
  // }

  render() {
    const { __map__ } = this.props
    return (
      <>
        {cameraPositionList.map(item => (
          <Marker
            key={item.id}
            __map__={__map__}
            position={item.position}
            anchor="center"
            offset={[0, 5]}
            events={this.markerEvent}
          >
            <img src={cameraMap} alt="" style={{ display: 'block' }} />
          </Marker>
        ))}
        {this.state.position ? (
          <Marker
            __map__={__map__}
            offset={[0, 5]}
            anchor="bottom-center"
            position={this.state.position}
            visible={this.state.infoWindowVisible}
            events={{
              created: instance => {
                window.infoWindowInstance = instance
              },
            }}
          >
            <div className={styles.infoWindowWrapper} style={{ color: '#fff' }}>
              <p className={styles.cameraAddress}>福建省福州市闽侯县软件园F区6号楼</p>
              <p className={styles.coverAddress}>覆盖地址：1029个</p>
            </div>
          </Marker>
        ) : null}
      </>
    )
  }
}

AMap.propTypes = {
  __map__: PropTypes.any,
}

export default widthMapStatus(AMap, config)
