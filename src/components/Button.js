import React from 'react'

export default props => (
  <button
    className={`button button--${props.color} ${
      props.centered ? 'center' : ''
    }`}
  >
    {props.buttonText}
  </button>
)
// ${this.props.showBulkActions ? 'shown' : 'hidden'}
