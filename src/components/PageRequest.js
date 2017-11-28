import React from 'react';
import PropTypes from "prop-types"
import {Button} from "react-bootstrap"

// TODO: set component state so the component acts just like an input text.
//  And when clicked on the state updates the value to "Loading..."
const PageRequest = ({ upPage }) => (
  <div className="text-center sticky-top text-center bg-light align-middle p-3">
    <Button block bsStyle="primary" onClick={ upPage } >More</Button>
  </div>
)

PageRequest.propTypes = {
  upPage: PropTypes.func.isRequired
}


export default PageRequest
