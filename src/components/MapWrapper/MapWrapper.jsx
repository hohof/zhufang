import React from 'react'
// 使用 react-amap 构建使其支持 mask 参数, 详细使用参考 https://github.com/ElemeFE/react-amap
import { Map } from '../../react-amap/index'

const widthMapStatus = (MapChild, config = {}) => {
  // eslint-disable-next-line react/display-name
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: {
          zoom: 7,
          viewMode: '3D',
          maskName: '福建省',
          amapkey: '5687c526c84a9f28f6956ade01908afa',
          version: '1.4.15',
          mapStyle: 'amap://styles/7e983b1f07713436875fba4c9808f806',
        },
      }
    }

    render() {
      return (
        <Map {...this.state.data} {...config}>
          <MapChild {...this.props} />
        </Map>
      )
    }
  }
}

export default widthMapStatus
