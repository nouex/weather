import React from 'react';
import PropTypes from "prop-types"

// TODO: set component state so the component acts just like an input text.
//  And when clicked on the state updates the value to "Loading..."
const PageRequest = ({ upPage }) => (
  <div onClick={ upPage }>
    More
  </div>
)

PageRequest.propTypes = {
  upPage: PropTypes.func.isRequired
}


export default PageRequest
