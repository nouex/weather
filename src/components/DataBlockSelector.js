import React from 'react';
import PropTypes from "prop-types"

class DataBlockSelector extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.handlechange.bind(this)
    this.state = {
      value: "hourly"
    }
  }

  handlechange(event) {
    this.setState({value: event.target.value})
    this.props.setDataBlockName(event.target.value)
  }

  render() {
    return (
      // TODO: p-3 on this one and p-3 on <DataBlock />??? How about wrap them
      //  all in a wrapper tha has p-3
      <select value={ this.state.value } onChange={this.onChange}
              className="mb-5">
        <option value="minutely">Minutely</option>
        <option value="hourly">Hourly</option>
        <option value="daily">Daily</option>
      </select>
    )
  }
}

DataBlockSelector.propTypes = {
  setDataBlockName: PropTypes.func.isRequired
}

export default DataBlockSelector
