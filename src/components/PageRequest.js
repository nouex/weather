import React from 'react';
import PropTypes from "prop-types"
import BottomScrollListener from "react-bottom-scroll-listener"

// TODO: set component state so the component acts just like an input text.
//  And when clicked on the state updates the value to "Loading..."
const PageRequest = ({ upPage }) => (
  <BottomScrollListener onBottom={upPage} offset={90}>
    <div className="text-center sticky-top text-center bg-light align-middle p-3">
      Loading...
    </div>
  </BottomScrollListener>
)

PageRequest.propTypes = {
  upPage: PropTypes.func.isRequired
}


export default PageRequest
