import React from 'react';
import PropTypes from "prop-types"

class DataBlockDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.handlechange.bind(this)
    this.state = {
      value: "hourly"
    }
  }

  handlechange(event) {
    this.state.value = event.target.value;
    this.props.setDataBlockName(event.target.value)
  }

  render() {
    return (
      <select value={ this.state.value } onChange={this.onChange}>
        <option value="minutely">Minutely</option>
        <option value="hourly">Hourly</option>
        <option value="daily">Daily</option>
      </select>
    )
  }
}

DataBlockDropdown.propTypes = {
  setDataBlockName: PropTypes.func.isRequired
}

export default DataBlockDropdown
