import React, { Component, useEffect, useRef, useState } from 'react'
import colors from '../../../colors'
import AirBadgeTable from '../AirBadgeTable'

const TestingDeployment = () => {
  const [passwordState, setPasswordState] = useState(false)
  const passwordRef = useRef(null)

  useEffect(() => {
    // effect
    // document.getElementById('clientDeployment')?.scrollIntoView()
    if (passwordState) {
      const siteDiv = document.getElementById('mySite')
      siteDiv.style.overflow = 'hidden'
    }
    return () => {
      // cleanup
    }
  }, [passwordState])

  const PasswordPrompt = (
    <div id="passwordPrompt"
      style={{
        whiteSpace: 'normal',
        textAlign: 'center',
        marginTop: '12vmax',
        userSelect: 'none'
      }}
    >
      <div>Please enter the password to view your testing deployment</div>
      <input ref={passwordRef} type="password"
        style={{
          borderRadius: '0.5vmin',
          border: 'none',
          padding: '0.5vmin'
        }}
        onKeyUp={(e => {
          if (e.key === 'Enter') {
            if (passwordRef.current.value === 'airbadgetable' /* || passwordRef.current.value === 'upworksample' */)setPasswordState(true)
          }
        })}/>
      <button type="submit" style={{
        display: 'block',
        margin: 'auto',
        backgroundColor: colors.scBlue,
        border: 'none',
        color: 'white',
        padding: '1vmin',
        borderRadius: '1vmin',
        boxShadow: '0px 0px 14px 0px rgb(255 255 255 / 24%)'
      }} onClick={e => {
        //
        if (passwordRef.current.value === 'airbadgetable')setPasswordState(true)
      }}>Submit</button>
    </div >
  )
  return (
    <div
      id="clientDeployment"
      style={{
        scrollSnapAlign: 'start',
        width: '100vw',
        height: '100vh',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        flexWrap: 'wrap'
      }}
    >
      <div
        style={{
          color: colors.scBlue,
          fontSize: '4vmax',
          flex: 1,
          whiteSpace: 'nowrap',
          textAlign: 'center',
          fontFamily: 'Spartan, sans-serif',
          fontWeight: '300',
          position: 'relative',
          top: '10%%',
          height: '100%',
          width: '100%'
        }}
      >
        {passwordState ? null : <div
          style={{
            color: 'white'/* , background: 'lightgrey' */,
            boxShadow: 'rgb(255 255 255 / 19%) 0px 0px 12 px 0px',
            whiteSpace: 'normal',
            userSelect: 'none',
            marginTop: '10vmin'
          }}
        >Software Testing</div>}
        {/* {PasswordPrompt} */}
        {passwordState ? <AirBadgeTable/> : PasswordPrompt}

      </div>

    </div>
  )
}

export default TestingDeployment
