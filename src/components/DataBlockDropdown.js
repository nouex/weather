import React from 'react';

class DataBlockDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.handlechange.bind(this)
    this.state = {
      value: "hourly"
    }
  }

  handlechange(event) {

    // this.props.actionThatUpdatesDataBlock(event.target.value)
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

export default DataBlockDropdown
