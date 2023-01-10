
import React, { Component, useEffect, useRef } from 'react'
import { Navigator } from './Components/Navigator'
import colors from './colors'
import LandingSection from './Components/Landing'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Closer from './Components/Closer'
// import pageScrollerInterpreter, { scroll } from './mainScroller'
import { useActor } from '@xstate/react'
import TestingDeployment from './Components/TestingDeployment'
import AirBadgeTable from './Components/AirBadgeTable'
// import Portfolio from './Components/Portfolio Old'
import ogImage from './media/ogImage.png'
// window.history.scrollRestoration = 'auto'// 'manual, auto'
const App = () => {
  const appStyles = {
    // background: diraColors.diraBlack,
    color: colors.aRed
  }

  // const [state, send] = useActor(pageScrollerInterpreter)
  // const { scrollTop } = document.documentElement

  // useEffect(() => {
  //   // console.log(document.getElementById('landing'))
  //   send({ type: 'SCROLL', section: 'landing' })
  //   return () => {
  //     // cleanup
  //   }
  // }, [/* run flags */])

  // useEffect(() => {
  //   if (state.value === 'idle') {
  //     console.log('idle state')
  //     // eslint-disable-next-line no-unused-expressions
  //     document.body.style.overflow === 'scroll'
  //     // document.addEventListener('scroll', e => {
  //     //   document.body.style.overflow = 'hidden'
  //     //   console.log(e)
  //     //   // must find way to accept scroll input from user to determine scroll direction while also disabling actual scrolling
  //     //   // once you can get the scroll direction, determine the destination section for the scroll and send a scroll event to machine with the appropriate section
  //     //   send({ type: 'SCROLL', scrollTop: document.documentElement.scrollTop, scrollLeft: document.documentElement.scrollLeft })
  //     // }, { once: true })
  //     document.addEventListener('onkeydown', e => {
  //       // if(e.)
  //       // document.body.style.overflow = 'hidden'
  //       console.log(e)
  //       // must find way to accept scroll input from user to determine scroll direction while also disabling actual scrolling
  //       // once you can get the scroll direction, determine the destination section for the scroll and send a scroll event to machine with the appropriate section
  //       send({ type: 'SCROLL', scrollTop: document.documentElement.scrollTop, scrollLeft: document.documentElement.scrollLeft })
  //     }, { once: true })
  //   }
  //   return () => {
  //     // cleanup
  //   }
  // }, [state.value])
  return (
    <div
      id="mySite"
      style={{
        // for scroll snap moving scroll event in
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        overflowY: 'scroll',
        // width: '100vw',
        // height: '100vh',
        background: "white",
        boxSizing: 'border-box',
        scrollSnapType: 'y mandatory'
      }}
      onScroll={e => {
        // console.log('mySite scrolling')
      }}
    >
      <img src={ogImage} style={{ display: 'none' }}/>
      {/* <Navigator /> */}
      {/* <button
        style={{
          color: 'white',
          width: '5vmin',
          height: '5vmin ',
          position: 'fixed',
          top: '10vmin'
        }}
        onClick={scroll}>Scroll test</button> */}
      <LandingSection />
      <About />
      <Portfolio />
      {/* <Blog/> */}
      <Contact />
      {/* <Closer /> */}
      {/* <TestingDeployment /> */}
      {/* <Portfolio/> */}
      {/* <AirBadgeTable/> */}
    </div>
  )
}

export default App
