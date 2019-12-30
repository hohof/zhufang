import React, { Component } from 'react'
// import { connect } from 'dva';
import PropTypes from 'prop-types'
import { Marker, Polyline } from '../../../../react-amap/index'
import widthMapStatus from '../../../../components/MapWrapper/MapWrapper'

import styles from './HomeMap.module.scss'
import cameraMap from '../../../../assets/home/camera-map.png'

const cameraPositionList = [
  [116.860446, 25.429133],
  [118.068942, 26.888512],
  [116.860446, 26.613819],
  [118.530368, 26.712],
  [117.761325, 27.221171],
  [118.486423, 25.686827],
  [116.882419, 25.051512],
  [118.310641, 24.832355],
  [119.497165, 26.55487],
  [118.684177, 26.712],
  [117.431735, 26.535214],
  [117.651462, 25.785792],
  [119.189548, 25.963721],
]

const config = {
  events: {
    created: mapInstance => {
      console.log(window.AMap)
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
        console.log(disProvince)
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
  },
}

class AMap extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    console.log('map update')
  }

  render() {
    const { __map__ } = this.props
    return (
      <>
        {cameraPositionList.map(item => (
          <Marker key={item} __map__={__map__} position={item} anchor="center" offset={[0, 5]}>
            <img src={cameraMap} alt="" style={{ display: 'block' }} />
          </Marker>
        ))}
      </>
    )
  }
}

AMap.propTypes = {
  __map__: PropTypes.any,
}

export default widthMapStatus(AMap, config)
