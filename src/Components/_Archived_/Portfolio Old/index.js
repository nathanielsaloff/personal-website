import React, { Component, useEffect, useRef, useState } from 'react'
import colors from '../../../colors'
import AirBadgeTable from '../AirBadgeTable'
import { socketSampleInterpreter } from './socketFetchMachine'
import { useActor } from '@xstate/react'
import './custom.scss'

const Portfolio = () => {
  const [socketState, socketStateSend] = useActor(socketSampleInterpreter)
  const inputRef = useRef(null)
  const sideScrollStyles = {
    width: '100%',
    maxWidth: '100%',
    // display: 'inline-block',
    // verticalAlign: 'top',
    // textAlign: 'center',
    scrollSnapAlign: 'start',
    // padding: '2vmin',
    height: '99%',
    maxHeight: '99%',
    overflowY: 'scroll'
  }

  const messageDisplay = (
    <div
      style={{ }}
    >
      <div className="rainbowAnimated"
      >
        {socketState.context.message}
      </div>
      <div style={{ margin: '1.5vmin' }}>
        {`Your name took a swift ${socketState.context.socketTime} milliseconds to get from your screen to the server and back!`}
      </div>
      <div>Thats
        <span className="rainbowAnimated"
          style={{}}>
          FAST!
        </span>

      </div>
      <div style={{ marginTop: '1.5vmin' }}>Your app needs web sockets to stay up to speed!</div>
    </div>
  )

  useEffect(() => {
  // effect
    document.getElementById('portfolio')?.scrollIntoView()

    return () => {
      // cleanup
    }
  }, [/* run flags */])
  return (
    <div
      id="portfolio"
      style={{
        scrollSnapAlign: 'start',
        width: '100vw',
        height: '100vh',
        padding: '5vmin',
        boxSizing: 'border-box',
        margin: 0
      }}
    >
      <div
        style={{
          margin: 'auto',
          color: 'white',
          fontFamily: 'Spartan, sans-serif',
          fontWeight: '300',
          fontSize: '22px',
          textAlign: 'center'
        }}
      >Portfolio</div>
      <div
        style={{
          color: colors.white,
          background: colors.black,
          fontFamily: 'Spartan, sans-serif',
          fontWeight: '300',
          margin: '1vmax 0',
          fontSize: '20px',
          flex: 1,
          whiteSpace: 'nowrap',
          textAlign: 'center',
          padding: '1vmin',
          borderRadius: '10px',
          boxShadow: 'rgb(255 255 255 / 56%) 0px 0px 15px 0px',
          width: '100%',
          height: '90%',
          display: 'flex',
          flexDirection: 'column',
          // scroll snap
          overflowX: 'scroll',
          overflowY: 'hidden',
          // flexDirection: 'row',
          // alignItems: 'center',
          // justifyContent: 'space-around',
          scrollbarColor: 'red yellow',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'auto',
          position: 'relative'

        }}
      >
        <div
          style={{
            margin: 'auto',
            color: 'white',
            fontFamily: 'Spartan, sans-serif',
            fontWeight: '300',
            fontSize: '18px',
            textAlign: 'center'
          }}
        >Web Sockets</div>
        <div
          style={{
            color: colors.white.alpha(0.8),
            fontFamily: 'Montserrat',
            fontSize: '16px',
            whiteSpace: 'nowrap',
            padding: '2vmin',
            borderRadius: '10px',
            boxShadow: 'inset 0px 0px 5px 0px rgba(255,255,255,0.56)',
            flex: 1,
            textAlign: 'center',
            // display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            ...sideScrollStyles
          }}
        >
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              height: '100%',
              padding: '1.5vmin'
            }}
          >

            <div
              id="webSocketCta"
              style={{}}
            >Type your name in the box below and press enter</div>
            <div
              id="webSocketMessageDisplay"
              style={{ }}
            >
              {(socketState.value === 'idle' && socketState.context.message) ? messageDisplay : null}
            </div>
            <input id="webSocketMessageInput"
              ref={inputRef}
              style={{ width: '150px' }}
              type="text"
              onKeyUp={(e => {
                if (e.key === 'Enter') {
                  socketStateSend({ type: 'SEND_NAME', name: inputRef.current.value.charAt(0).toUpperCase() + inputRef.current.value.slice(1) })
                  inputRef.current.value = ''
                  inputRef.current.blur()
                }
              })}
            />

            <div
              id="webSocketExplanation"
              style={{ }}
            >Websockets are much quicker than HTTP and other industry standard connections. They're used by messaging apps and are being adopted for more and more applications for their speed!</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio
