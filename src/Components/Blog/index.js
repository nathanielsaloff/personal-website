import React, { Component, useEffect, useRef } from 'react'
import colors from '../../colors'


const AboutMe = () => {
  const appStyles = { color: 'blue' }
  const pStyles = { margin: '2vmin' }

  return (
    <div
      id="blog"
      style={{
        scrollSnapAlign: 'start',
        width: '100vw',
        height: '100vh',
        background: colors.aRed,
        padding: '5vmin',
        boxSizing: 'border-box'
        // margin: 0,
        // display: 'flex',
        // justifyContent: 'space-evenly',
        // alignItems: 'center',
        // flexWrap: 'wrap'

      }}
    >
      <div
        style={{
          color: colors.white,
          fontFamily: 'Spartan, sans-serif',
          fontWeight: '300',
          fontSize: '16px',
          whiteSpace: 'nowrap',
          background: colors.black,
          padding: '2vmin',
          borderRadius: '10px',
          boxShadow: 'rgb(255 255 255 / 56%) 0px 0px 15px 0px',
          flex: 1,
          textAlign: 'center',
          width: '100%',
          height: '90%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            fontSize: '20px',
            margin: 'auto'
            // color: colors.pop as unknown as string
          }}
        >
          Blog
        </div>
        <div
          style={{
            textAlign: 'center',
            width: '100%',
            height: '90%',
            whiteSpace: 'normal',
            overflowY: 'scroll',
            // border: '3px solid white',
            padding: '2vmin',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around',
            scrollbarColor: 'red yellow',
            color: colors.navajoWhite,
            // border: 'inset',
            boxShadow: 'inset 0px 0px 5px 0px rgba(255,255,255,0.56)',

            position: 'relative'
          }}
        >

        </div>
      </div>
    </div>
  )
}

export default AboutMe
