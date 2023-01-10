import React, { Component, useEffect, useRef } from 'react'
import colors from '../../colors'
import webImage from '../../assets/web.svg'
import hdIcon from '../../assets/HD.svg'
import tableImage from '../../assets/table.svg'
import rightImage from '../../assets/right.svg'
import leftImage from '../../assets/left.svg'


// PREVIOUSLY SOCIALS!!!!!


// import { TimelineMax/* , DrawSVGPlugin, CustomEase, MotionPathPlugin, MotionPathHelper */ } from 'gsap/all'
// gsap.registerPlugin(MotionPathPlugin, MotionPathHelper, CustomEase, DrawSVGPlugin, MotionPathPlugin)
// import { TikTok } from 'react-tiktok'

const Portfolio = () => {
  const appStyles = { color: 'blue' }
  const pStyles = { margin: '2vmin',fontFamily: 'Spartan, sans-serif' }
  const portfolioItemStyles = {
    width: '100%',
    maxWidth: '100%',
    display: 'inline-block',
    verticalAlign: 'top',
    textAlign: 'center',
    scrollSnapAlign: 'start',
    padding: '2vmin',
    height: '99%',
    maxHeight: '99%',
    overflowY: 'scroll',
    position:'relative'
  }
  return (
    <div
      id="portfolioSection"
      style={{
        scrollSnapAlign: 'start',
        width: '100%',
        height: '100%',
        padding: '5vmin',
        boxSizing: 'border-box',
        boxShadow: 'rgb(155 155 155 / 56%) 0px 0px 15px 0px inset',
        display: 'flex',
        flexDirection:'column'
      }}
    >    
     <div className='sectionTitle'
          style={{
            color:colors.aRed,
            fontSize: '30px',
            margin: 'auto',
            fontFamily: 'Spartan, sans-serif',
          }}
        >
          Work
        </div>   
        <div id="portfolioContainer"
        // scrollable sideways
          style={{
            textAlign: 'center',
            width: '100%',
            height: '100%',
            whiteSpace: 'nowrap',
            overflowX: 'scroll',
            overflowY: 'hidden',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            scrollbarColor: 'red yellow',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'auto',
            borderRadius: '10px',
            boxShadow: 'inset 0px 0px 5px 0px rgba(255,255,255,0.56)',
            position:'relative'
          }}
        >
          <div className="swipeIcon"
            style={{
              width: '15vmin',
              height:'15vmin',
              position: 'absolute',
              bottom: '3vmin',
              right: '3vmin',
              zIndex: 1,
              animationName: 'scrollY',
              animationDuration: '2s',
              animationIterationCount: 'infinite',
              animationDirection: 'alternate'

            }}
          >
             <img
              src={rightImage}
              style={{
                height: '100%',
                width:"100%",
                position: 'absolute',
                zIndex: 0,
                left:0,
                bottom:0,
                opacity: 0.2
              }}
            />
            
          </div>
          <div id="thisSite"
            style={{
              ...portfolioItemStyles,
            }}
          >
            <img
              src={webImage}
              style={{
                height: '100%',
                width:"100%",
                position: 'absolute',
                zIndex: 0,
                left:0,
                bottom:0,
                opacity: 0.2
              }}
            />
            <div>This Site</div>
            <div className='itemDescription'
                style={{

                }}
            >
              This site is a React app. 
              I coded it with responsive design, screen-by-screen navigation, parallax scrolling, javascript animations, digital art and media, state management with react hooks and state machines
            </div>
          
          </div>
          <div id="halfDouble"
            style={portfolioItemStyles}
          >
             <img
              src={hdIcon}
              style={{
                height: '100%',
                width:"100%",
                position: 'absolute',
                zIndex: 0,
                left:0,
                bottom:0,
                opacity: 0.2
              }}
            />
            <div>Half Double</div>
            <div className='itemDescription'
                style={{

                }}
            >
              Half double is a game I coded where the user is assigned a random "target number" that is a multiple of 2. the user must go up or down step by step which either doubles or halves their "current number" until it matches the target number. The user trie,s to get as many matches as possible before the minute is up.
              I coded it with React using responsive design, state management using state machines, browser storage, custom fonts
              <br/> <br/>
              <a
                style={{
                  textDecoration: 'none',
                  fontFamily: 'Spartan',
                  color: colors.scBlue,
                  position:'relative',
                  border: '2px solid black',
                  padding:'3vmin'
                }}
                href="https://zevsaloff.github.io/half-double/">Check it out!</a>
              
            </div>
          
          </div>  
          <div id="dataTable"
            style={portfolioItemStyles}
          >
            <div className="swipeIcon"
              style={{
                width: '15vmin',
                height:'15vmin',
                position: 'absolute',
                bottom: '3vmin',
                left: '3vmin',
                zIndex: 1,
                animationName: 'scrollYLeft',
                animationDuration: '2s',
                animationIterationCount: 'infinite',
                animationDirection: 'alternate'
              }}
      >
          <img
          src={leftImage}
          style={{
            height: '100%',
            width:"100%",
            position: 'absolute',
            zIndex: 0,
            left:0,
            bottom:0,
            opacity: 0.2
          }}
        />
        
            </div>
            <img className='backgroundImage'
              src={tableImage}
              style={{
                height: '100%',
                width:"100%",
                position: 'absolute',
                zIndex: 0,
                left:0,
                bottom:0,
                opacity: 0.2
              }}
            />
            <div id="itemTitle">Data Table</div>
            <div className='itemDescription'
                style={{
                }}
            >
              This is a data table I coded which can recieve data from a database and display it to the user in a clear format with data flitering by search and option selection. Its also highly editable allowing the user to select which columns to display and displays different columns depending on if the user is on mobile or desktop.
              I coded this table with React using responsive design, hover modals, state management with state machines, data sorting functions
              <br/><br/>
              <div
                style={{
                  textDecoration: 'none',
                  fontFamily: 'Spartan',
                  color: colors.scBlue,
                  position:'relative',
                  border: '2px solid black',
                  padding:'2vmin',
                  width:'max-content',
                  margin:'auto'
                }}
              >
                Show Table
              </div>          
            </div>
          </div>
        </div>

    </div>
  )
}

export default Portfolio
