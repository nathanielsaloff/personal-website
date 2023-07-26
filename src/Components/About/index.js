import React, { Component, useEffect, useRef } from "react";
import colors from "../../colors";
// import { TimelineMax/* , DrawSVGPlugin, CustomEase, MotionPathPlugin, MotionPathHelper */ } from 'gsap/all'

// gsap.registerPlugin(TimelineMax)

const About = () => {
  const appStyles = { color: "blue" };
  const pStyles = { margin: "2vmin", fontFamily: "Spartan, sans-serif" };
  useEffect(
    () => {
      return () => {
        // cleanup
      };
    },
    [
      /* run flags */
    ]
  );
  const scrollToContact = (e) => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div
      id="aboutSection"
      style={{
        scrollSnapAlign: "start",
        width: "100%",
        height: "100%",
        padding: "10vh 5vw",
        boxSizing: "border-box",
        // boxShadow: 'rgb(155 155 155 / 56%) 0px 0px 15px 0px inset',
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="sectionTitle"
        style={{
          fontFamily: "Spartan, sans-serif",
          color: colors.aRed,
          fontSize: "30px",
          // color: colors.pop as unknown as string
          margin: "auto",
        }}
      >
        About
      </div>
      <div
        id="aboutContent"
        style={{
          textAlign: "center",
          width: "100%",
          height: "100%",
          whiteSpace: "normal",
          overflowY: "scroll",
          padding: "2vmin",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
          scrollbarColor: "red yellow",
          // color: colors.navajoWhite,
          borderRadius: "10px",
          boxShadow: "inset 0px 0px 5px 0px rgba(255,255,255,0.56)",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <p style={pStyles}>
          🙂 <br />
          My name is Zev
        </p>
        <p style={pStyles}>I'm a React developer</p>
        <p style={pStyles}>My multitool is HTML, CSS, Javascript</p>
        <p style={pStyles}>I'm a coder, a digital artist, and a creator</p>
        <p style={pStyles}>
          I want to build up my programming career
          <br />
          ⬇️
          <br /> Contact me if you want to do that together.
        </p>
        {}
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
  );
};

export default About;
