import React from 'react'
import { Map } from 'react-amap'

const widthMapStatus = (MapChild, config = {}) => {
  // eslint-disable-next-line react/display-name
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: {
          zoom: 9,
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
