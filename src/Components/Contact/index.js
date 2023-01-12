import React, { Component, useEffect, useRef } from 'react'
import colors from '../../colors'

const Contact = () => {
  const appStyles = { color: 'blue' }
  useEffect(() => {
  // effect
    // document.getElementById('contact')?.scrollIntoView()

    return () => {
      // cleanup
    }
  }, [/* run flags */])
  return (
    <div
      id="contact"
      style={{
        scrollSnapAlign: 'start',
        width: '100%',
        height: '100%',
        padding: '5vmin',
        boxSizing: 'border-box',
        margin: 0,
        fontFamily: 'Spartan, sans-serif',
        fontWeight: '300',
        margin: '3vmax 0',
        fontSize: '20px',
        flex: 1,
        whiteSpace: 'nowrap',
        textAlign: 'center',
        padding: '10vh 5vw',
        borderRadius: '10px',
        // boxShadow: 'rgb(255 255 255 / 56%) 0px 0px 15px 0px',
        width: '100%',
        height: '100%',
        // why flex here?
        display: 'flex',
        flexDirection: 'column'
      }}
    >
        <div
          style={{ 
            color:colors.aRed,
            fontSize: '30px',
            margin: 'auto',
            fontFamily: 'Spartan, sans-serif',
          }}
        >Contact</div>

        <div
          style={{
            // color: colors.white.alpha(0.8),
            fontFamily: 'Montserrat',
            // width: '50%',
            fontSize: '16px',
            whiteSpace: 'nowrap',
            // background: colors.scBlue as unknown as string,
            padding: '2vmin',
            borderRadius: '10px',
            boxShadow: 'inset 0px 0px 5px 0px rgba(255,255,255,0.56)',
            flex: 1,
            textAlign: 'center',
            width: '100%',
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'

          }}
        >
              <div
                style={{
                  fontFamily: 'sans-serif',

                }}
              >Email: <a
                style={{
                  textDecoration: 'none',
                  fontFamily: 'Spartan',
                  color: colors.scBlue
                }}
                href="mailto:zsloaf@gmail.com">zsloaf@gmail.com</a>
                </div>
        </div>



      {/* <div id="privacyPolicy"
        style={{ textAlign: 'center' }}
      >
        <a
          style={{
            fontFamily: 'Spartan',
            textDecoration: 'none',
            fontWeight: 400,
            color: colors.scBlue

          }}
          href="https://www.termsfeed.com/live/bdc67485-8179-4075-bab9-17acb6531394">Privacy Policy</a>
      </div> */}
    </div>
  )
}

export default Contact
