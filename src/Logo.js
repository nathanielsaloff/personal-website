
import React, { Component, useEffect, useRef } from 'react'
import colors from './colors'

const Logo = ({ dimensions }) => {
  console.log('nav working')

  const classOne = {
    fill: 'none',
    stroke: colors.aRed,
    strokeMiterlimit: 10
    // fillRule: 'evenodd' typescript error
  }

  console.log(dimensions)
  return (

    <svg xmlns="http://www.w3.org/2000/svg"
      style={{
        ...dimensions,
        margin: '5vmax'
      }}
      viewBox="0 0 101 61">
      <g id="Layer_2"
        data-name="Layer 2">
        <g id="Layer_1-2"
          data-name="Layer 1">
          <polygon
            style={classOne}
            points="60.5 20.5 40.5 20.5 40.5 0.5 0.5 0.5 0.5 20.5 20.5 20.5 20.5 40.5 40.5 40.5 60.5 40.5 60.5 20.5" />
          <polygon
            style={classOne}
            points="60.5 20.5 60.5 40.5 60.5 40.5 40.5 40.5 40.5 60.5 80.5 60.5 80.5 40.5 100.5 40.5 100.5 20.5 60.5 20.5" />
        </g>
      </g>
    </svg>
  )
}

export default Logo
