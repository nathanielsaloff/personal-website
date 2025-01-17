import React, { Component, useEffect, useRef } from 'react'
import colors from '../../../colors'
import backgroundImage from '../../assets/flyingCar.svg'

// import Logo from '../../Logo'

const LandingSection = () => {
  const appStyles = { color: 'blue' }
  const carRef = useRef(null)
  useEffect(() => {
  // effect
    // cant paralax scroll here because scroll is effected by all the scrolling form top of the page
    // const scrollContainer = document.getElementById('mySite')
    // scrollContainer.addEventListener('scroll', e => {
    //   const offset = scrollContainer?.scrollTop
    //   const paralaxOffset = offset * 0.7
    //   carRef.current.style.top = `${-paralaxOffset}px`
    //   carRef.current.style.transform = `translate(0, ${-paralaxOffset}px)`
    // })
    return () => {
      // cleanup
    }
  }, [/* run flags */])
  return (
    <div
      id="closing"
      style={{
        scrollSnapAlign: 'start',
        width: '100vw',
        height: '100vh',
        // background: colors.aRed as unknown as string,
        padding: '50px',
        boxSizing: 'border-box',
        margin: 0,
        // display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        // background: `url(${backgroundImage})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        // backgroundSize: 'contain',
        position: 'relative'

      }}
    >
      <svg id="flyingCar" viewBox="0 0 64 64" x="0px" y="0px"
        style={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          zIndex: 0,
          bottom: 0,
          right: 0,
          opacity: 0.3
        }}
      >
        <g data-name="11-flying car">
          <path id="car"
            ref={carRef}
            style={{ fill: colors.lightGrey }}
            d="M7.052,6.316A1,1,0,0,0,8.2,6.98l9.7-1.938L24,7.659V11H21a1,1,0,0,0-.759.349l-12,14a1,1,0,0,0-.157.253c-.006.015-.007.032-.013.047a.972.972,0,0,0-.061.3c0,.018-.01.032-.01.05v5a1,1,0,0,0,1,1h.1A4.988,4.988,0,0,0,11,34.974V39a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V36H43v3a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V34.974A4.988,4.988,0,0,0,54.9,32H55a1,1,0,0,0,1-1V26c0-.018-.009-.032-.01-.05a.978.978,0,0,0-.061-.3c-.005-.015-.007-.032-.013-.047a1,1,0,0,0-.157-.253l-12-14A1,1,0,0,0,43,11H40V7.659l6.108-2.617L55.8,6.98a1,1,0,0,0,1.144-.664l1-3a1,1,0,0,0-.769-1.3l-11-2a1.011,1.011,0,0,0-.55.055l-10,4A1,1,0,0,0,35,5v6H29V5a1,1,0,0,0-.629-.929l-10-4a.993.993,0,0,0-.55-.055l-11,2a1,1,0,0,0-.769,1.3ZM14.6,21h13.01L26.28,25H11.174Zm21.009,4H28.388l1.333-4h4.558ZM44,27v3H43V27Zm10,0v3H53V27Zm-3,3H46V27h5ZM41,30H39V27h2Zm-4,0H27V27H37ZM20,30V27h1v3ZM10,30V27h1v3Zm3-3h5v3H13Zm10,0h2v3H23ZM19,38H13V35.9a5,5,0,0,0,1,.1h5Zm32,0H45V36h5a5,5,0,0,0,1-.1Zm-1-4H14a3.006,3.006,0,0,1-2.829-2H52.829A3.006,3.006,0,0,1,50,34Zm2-9H37.72l-1.333-4H49.4l3.429,4Zm-4.317-6H16.317l5.143-6H42.54ZM37,5.677l9.1-3.642,9.583,1.743L55.33,4.846,46.2,3.02a.986.986,0,0,0-.59.061l-7,3A1,1,0,0,0,38,7v4H37ZM17.9,2.035,27,5.677V11H26V7a1,1,0,0,0-.606-.919l-7-3a.986.986,0,0,0-.59-.061L8.67,4.846,8.313,3.778Z">
          </path>
          <path id="carClouds"
            style={{ fill: colors.white }}
            d="M61.154,40.051A7.009,7.009,0,0,0,55,47a7.045,7.045,0,0,0-6.511,4.434,10.491,10.491,0,0,0-13.373,8.58A5.434,5.434,0,0,0,32,61.278a5.434,5.434,0,0,0-3.116-1.264,10.491,10.491,0,0,0-13.373-8.58A7.045,7.045,0,0,0,9,47a7.009,7.009,0,0,0-6.154-6.949A3.005,3.005,0,0,0,0,38v2a1,1,0,0,1,1,1,1,1,0,0,0,1,1,5.006,5.006,0,0,1,5,5,4.938,4.938,0,0,1-.089.921,1,1,0,0,0,1.165,1.168A5.1,5.1,0,0,1,9,49a5.024,5.024,0,0,1,4.884,3.937,1,1,0,0,0,1.361.712A8.488,8.488,0,0,1,26.979,61.1a.994.994,0,0,0,.352.715,1.008,1.008,0,0,0,.764.231l.157-.021A1.844,1.844,0,0,1,28.5,62a3.475,3.475,0,0,1,2.719,1.328,1,1,0,0,0,1.562,0A3.475,3.475,0,0,1,35.5,62a1.844,1.844,0,0,1,.248.025l.157.021a1,1,0,0,0,1.116-.946,8.488,8.488,0,0,1,11.734-7.451,1.007,1.007,0,0,0,.848-.038,1,1,0,0,0,.513-.674A5.024,5.024,0,0,1,55,49a5.1,5.1,0,0,1,.924.089,1,1,0,0,0,1.165-1.168A4.938,4.938,0,0,1,57,47a5.006,5.006,0,0,1,5-5,1,1,0,0,0,1-1,1,1,0,0,1,1-1V38A3.005,3.005,0,0,0,61.154,40.051Z">
          </path>
          <path className="carThrusters"
            style={{ fill: colors.sOrange }}
            d="M14,41H12a10.591,10.591,0,0,0,3.122,7.537l.172.171a1,1,0,0,0,1.412,0l.173-.172A10.59,10.59,0,0,0,20,41H18a8.594,8.594,0,0,1-2,5.536A8.594,8.594,0,0,1,14,41Z">
          </path>
          <path className="carThrusters"
            style={{ fill: colors.sOrange }}
            d="M46,41H44a10.591,10.591,0,0,0,3.122,7.537l.172.171a1,1,0,0,0,1.412,0l.173-.172A10.59,10.59,0,0,0,52,41H50a8.594,8.594,0,0,1-2,5.536A8.594,8.594,0,0,1,46,41Z">
          </path>
        </g>
      </svg>

      <div
        style={{
          color: colors.sOrange,
          // fontFamily: 'Ubuntu',
          // fontWeight: 'bold',
          margin: '3vmax 0',
          fontSize: '4vmax',
          fontWeight: '500',
          // padding: '5vmin',
          flex: 1,
          whiteSpace: 'nowrap',
          textAlign: 'center',
          fontFamily: 'Spartan, sans-serif',
          marginBottom: '10vmin',
          position: 'relative',
          top: '10%%'

        }}
      >
        {/* <Logo dimensions={{ width: '100px', height: '100px' } }/> */}
        Version 1.1.0
        <br />
        <div
          style={{ fontSize: '5vmin' }}
        >
          🚧 Site Under Construction 🚧
        </div>
      </div>

    </div>
  )
}

export default LandingSection
