import React, { Component, useEffect, useRef } from 'react'
import colors from '../../colors'
// import { TimelineMax/* , DrawSVGPlugin, CustomEase, MotionPathPlugin, MotionPathHelper */ } from 'gsap/all'

// gsap.registerPlugin(TimelineMax)

const About = () => {
  const appStyles = { color: 'blue' }
  const pStyles = { margin: '2vmin',fontFamily: 'Spartan, sans-serif' }
  useEffect(() => {
    return () => {
      // cleanup
    }
  }, [/* run flags */])
  const scrollToContact = e => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  return (
    <div
      id="aboutSection"
      style={{
        scrollSnapAlign: 'start',
        width: '100%',
        height: '100%',
        padding: '10vh 5vw',
        boxSizing: 'border-box',
        // boxShadow: 'rgb(155 155 155 / 56%) 0px 0px 15px 0px inset',
        display: 'flex',
        flexDirection: 'column'
      }}
    >

        <div className='sectionTitle'
          style={{
            fontFamily: 'Spartan, sans-serif',
            color:colors.aRed,
            fontSize: '30px',
            // color: colors.pop as unknown as string
            margin: 'auto'
          }}
        >
          About
        </div>
        <div id="aboutContent"
          style={{
            textAlign: 'center',
            width: '100%',
            height: '100%',
            whiteSpace: 'normal',
            overflowY: 'scroll',
            padding: '2vmin',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around',
            scrollbarColor: 'red yellow',
            // color: colors.navajoWhite,
            borderRadius: '10px',
            boxShadow: 'inset 0px 0px 5px 0px rgba(255,255,255,0.56)',
            position: 'relative',
            flexDirection:'column'
          }}
        >


          {/* <div className="swipeIconDown"
            style={{
              width: '10vmin',
              position: 'absolute',
              top: '3vmin',
              right: '3vmin',
              zIndex: 1
            }}
            >
            <svg
              style={{
                fill: colors.aRed,
                animationName: 'scrollX',
                animationDuration: '2s',
                animationIterationCount: 'infinite',
                animationDirection: 'alternate'
              }}

              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100.5 91.76">
              <g id="Layer_1-2"
                data-name="Layer 1">
                <path className="cls-1"
                  d="M6.86,61.32a.76.76,0,0,1-.77-.77V38.75a.77.77,0,0,1,1.54,0v21.8A.77.77,0,0,1,6.86,61.32Z" />
                <path className="cls-1"
                  d="M6.86,61.32a.77.77,0,0,1-.58-.26L.44,54.45a.76.76,0,0,1,.07-1.08.77.77,0,0,1,1.09.07l5.26,6,5.26-6a.77.77,0,1,1,1.15,1L7.43,61.06A.73.73,0,0,1,6.86,61.32Z" />
                <path className="cls-1"
                  d="M6.86,27.2a.76.76,0,0,1-.77-.77V4.63a.77.77,0,1,1,1.54,0v21.8A.77.77,0,0,1,6.86,27.2Z" />
                <path className="cls-1"
                  d="M12.69,12a.73.73,0,0,1-.57-.26L6.86,5.79l-5.26,6a.77.77,0,0,1-1.09.07.76.76,0,0,1-.07-1.08L6.28,4.12a.79.79,0,0,1,1.15,0l5.84,6.61a.76.76,0,0,1-.07,1.08A.75.75,0,0,1,12.69,12Z" />
                <path className="cls-1"
                  d="M55.23,80a.81.81,0,0,1-.31-.06L19.61,64.4A4.63,4.63,0,0,1,17,58.94a7.84,7.84,0,0,1,8.27-5.69l2.12.2a7.52,7.52,0,0,1,.95.15l12,2.63L20.15,11A7.63,7.63,0,0,1,29.84.76a7.52,7.52,0,0,1,4.24,4l7.73,17.3a9,9,0,0,1,.28-.88A7.31,7.31,0,0,1,51.54,17a7.38,7.38,0,0,1,2.91,2A6.79,6.79,0,0,1,67,16.9a6.31,6.31,0,0,1,11.82-.8l7.79,17.44A112.5,112.5,0,0,1,94.14,57l.94,4.64a.76.76,0,0,1-.44.85L55.54,79.92A.81.81,0,0,1,55.23,80ZM24.56,54.76a6.3,6.3,0,0,0-6.06,4.6A3.08,3.08,0,0,0,20.23,63l35,15.38L93.45,61.29l-.82-4a110.14,110.14,0,0,0-7.41-23.08L77.43,16.73a4.77,4.77,0,1,0-8.71,3.89l3,6.69a.77.77,0,1,1-1.41.63l-4.39-9.82a5.25,5.25,0,0,0-9.59,4.28l4,9a.78.78,0,0,1-.39,1,.77.77,0,0,1-1-.39L54.21,21.45a5.79,5.79,0,0,0-7.64-2.92,5.76,5.76,0,0,0-2.92,7.64L48.31,36.6a.77.77,0,1,1-1.41.63L32.68,5.4a6.09,6.09,0,1,0-11.13,5L42.38,57a.77.77,0,0,1-.86,1.07L28,55.1c-.25-.05-.51-.09-.76-.12l-2.12-.19Z" />
                <path className="cls-1"
                  d="M60.38,91.51a.62.62,0,0,1-.27-.05.77.77,0,0,1-.43-.4L54.53,79.53a.77.77,0,1,1,1.4-.63l4.84,10.83L98.46,72.88,93.63,62.06a.77.77,0,1,1,1.4-.63L100.18,73a.75.75,0,0,1-.39,1L60.7,91.45A.87.87,0,0,1,60.38,91.51Z" />
              </g>
            </svg>
          </div> */}

          <p
            style={pStyles}
          >
          🙂  <br/>My name is Zev
          </p>
          <p
            style={pStyles}
          >
            I'm a React developer
          </p>
          <p
            style={pStyles}
          >
            My multitool is HTML, CSS, Javascript
          </p>
          <p
            style={pStyles}
          >
            I'm a coder, a digital artist, and a creator
          </p>
          <p
            style={pStyles}
          >
            I want to build up my programming career<br/>⬇️<br/> Contact me if you want to do that together.
          </p>
          {
            
          }
          {/* <p
            style={pStyles}
          >
          🎵  Since my childhood, I&apos;ve been OBSESSED with music. Ive had headphones on since grade school and cant seem to take them off for long enough to listen to what anyone else is saying.
          </p> */}
          {/* <p
            style={pStyles}
          >
          🎵  Music is one of my passions. I can put on headphones and get lost in music for days, though I wouldnt get much done. I listen to almost everything including EDM, classical, rock, hip-hop, and many many more genres.
          </p>
          <p
            style={pStyles}
          >
          🏋️  I gained a lot of weight as a kid due to stress triggered from my environment, which led me to spend much of my adulthood focused on weight loss, healthy eating, and fitness.
          </p>
          <p
            style={pStyles}
          >
          💻  I got my first computer in my early teens and spend much of my time on them. I&apos;ve always repaired and maintained my own computers to make them last longer. Over the years I&apos;ve developed a proficiency with computers I never expected to have but I&apos;m so glad I do.
          </p> */}
          {/* <p
            style={pStyles}
          >
            🦾  I&apos;ve taken many online courses on programming and computer science topics like Javascript,Python, Algorithms and Data Structures, IOT, Blockchain, Networking, Shell Scripting, Security, and more. I gravitate to responsive UI coding and design with React and CSS, though I do much of my own graphic design and image editing (things I&apos;ve picked up along the way). This website and its contents were coded entirely by me with ReactJS, and CSS.
            <br/>
            <span
              onClick={scrollToContact}
              style={{ color: colors.paleBlue }}
            >I am open to Javascript, ReactJS, CSS, Node programming and UI design opportunities. (Click to contact me)</span>.
          </p> */}
          {/* <p
            style={pStyles}
          >
            ✍️  I have a bachelors in Marketing from FIU and together with my coding and UI experience, I can write copy thats easy to understand and fits the narrative in a clear and concise way.
            <br/>
            <span
              onClick={scrollToContact}
              style={{ color: colors.paleBlue }}
            >For copy related services click to contact me</span>.
          </p> */}

        </div>

    </div>
  )
}

export default About
