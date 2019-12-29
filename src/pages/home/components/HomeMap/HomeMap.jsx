import React, { Component } from 'react'
// import { connect } from 'dva';
import PropTypes from 'prop-types'
import { Marker, Polyline } from 'react-amap'
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
  viewMode: '3D',
  pitch: 0,
  maxPitch: 0,
  zoom: 7,
  showIndoorMap: false,
  events: {
    created: mapInstance => {
      console.log(window.AMap)
      window.AMap.plugin(['AMap.DistrictSearch'], () => {
        const opts = {
          subdistrict: 1,
          extensions: 'all',
          level: 'city',
        }
        //利用行政区查询获取边界构建mask路径
        //也可以直接通过经纬度构建mask路径
        const district = new window.AMap.DistrictSearch(opts)
        district.search('福建省', function(status, result) {
          console.log(result)
          const center = result.districtList[0].center
          const bounds = result.districtList[0].boundaries
          const mask = []
          for (let i = 0; i < bounds.length; i += 1) {
            mask.push([bounds[i]])
          }
          // mapInstance.mask = mask
          mapInstance.setCenter(center)
          // const object3Dlayer = new window.AMap.Object3DLayer({ zIndex: 1 })
          // mapInstance.add(object3Dlayer)
          // 添加描边
          for (let i = 0; i < bounds.length; i += 1) {
            new window.AMap.Polyline({
              path: bounds[i],
              strokeColor: '#009cff',
              strokeWeight: 4,
              map: mapInstance,
            })
          }
        })
      })
      window.amap = mapInstance
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
          <Marker key={item} __map__={__map__} position={item}>
            <img src={cameraMap} alt="" />
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
