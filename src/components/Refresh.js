'use strict';

import React from 'react';
import PropTypes from "prop-types"
import {Button} from "react-bootstrap"

class Refresh extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      active: false
    }
    this.onClick = this.handleClick.bind(this)
    this.onMouseDown = this.handleMouseDown.bind(this)
  }

  handleClick() {
    let { loadJsonApi } = this.props
    this.setState({isLoading: true})
    loadJsonApi(null, () => {
      this.setState({isLoading: false})
    })
  }

  handleMouseDown() {
    this.setState({active: true})
    let that = this
    let onMouseUp = () => {
      that.setState({active: false})
      window.document.removeEventListener("mouseup", onMouseUp)
    }
    window.document.addEventListener("mouseup", onMouseUp)
  }

  render() {
    let { isLoading, active } = this.state,
        { onClick, onMouseDown } = this

    return (<Button
              onClick={onClick}
              onMouseDown={onMouseDown}
              disabled={isLoading ? true : false}
              bsStyle="primary"
              active={active}>Refresh</Button>
            )
  }
}

Refresh.propTypes = {
  loadJsonApi: PropTypes.func.isRequired
}


export default Refresh
