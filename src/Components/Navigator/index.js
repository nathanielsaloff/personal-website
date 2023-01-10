
import React, { Component, useEffect, useRef } from 'react'
import colors from '../../colors'
import Logo from '../../Logo'

export const Navigator = () => {
  const appStyles = { color: 'blue' }
  console.log('working')

  return (
    <div
      id="navigator"
      style={{
        width: '100vw',
        height: '10vmax',
        // background: colors.semiBase as unknown as string,
        position: 'fixed',
        top: 0,
        boxShadow: 'rgb(255 255 255 / 56%) 0px 1px 9px -4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}
    >
      <Logo
        dimensions={{ width: '30%', height: '70%', margin: '2vmin', opacity: 2 }}
      />

    </div>
  )
}

