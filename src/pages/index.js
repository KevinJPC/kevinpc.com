
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Hero from "@components/hero/hero"
import Layout from "@components/layout"
import Navbar from "@components/navbar"
import About from "@components/about/about"
import Skills from "@components/skills/skills"
import Projects from "@components/projects/projects"
import SectionBar from "@components/sectionbar"
import SocialBar from "@components/socialbar"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import siteData from "@content/sitedata.json"
import Contact from "@components/contact/contact"
import Footer from "@components/footer"
import { device } from "@components/mediaqueries";
import Reveal from "@components/reveal"

const sections = siteData.sections;

const ContainerSection = styled.div`

  /* media queries */
  @media ${device.desktop} {
        width: 60%;
  }

  @media ${device.laptopL} {
        width: 60%;
  }

  @media ${device.laptop} {
        width: 75%;

  }
  @media ${device.tablet}{
        width: 85%;
  }
  @media ${device.mobileL}, ${device.mobileM}, ${device.mobileS} {
        width: 90%;
  }
  margin: ${props => props.stateAnimation === 'idle' ? '4.4em' : '0'} auto;

`

const IndexPage = () => {
  const [stateAnimation, setStateAnimation] = useState('decrypt')
  const [section, setSection] = useState(sections.hero.url);
  const options = { threshold: 0.25 }
  const { ref: heroRef, inView: heroInView } = useInView(options);
  const { ref: aboutRef, inView: aboutInView } = useInView(options);
  const { ref: skillsRef, inView: skillsInView } = useInView(options);
  const { ref: projectsRef, inView: projectsInView } = useInView(options);
  const { ref: contactRef, inView: contactInView } = useInView(options);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  useEffect(() => {
    // const setHeight = () => {
    //   const vh = window.innerHeight * 0.01;
    //   // Fixing 100vh for mobile
    //   console.log(vh * 100)
    //   document.documentElement.style.setProperty(`–-vh`, `${vh}px`);
    // };

    // // define mobile screen size:
    // window.addEventListener("resize", setHeight);


    // define a function that sets min-height of my-element to window.innerHeight:

    const setHeight = () => {
      if(stateAnimation === 'idle'){
        document.getElementById("hero").style.minHeight = (window.innerHeight - 70.4) + 'px'
      }else {
        document.getElementById("hero").style.minHeight = window.innerHeight + 'px'
      }
    };

    // define mobile screen size:

    let deviceWidth = window.matchMedia("(max-width: 1024px)");

    if (deviceWidth.matches) {
      // set an event listener that detects when innerHeight changes:

      window.addEventListener("resize", setHeight);

      // call the function once to set initial height:

      setHeight();
    }



    if (heroInView) setSection(sections.hero.url)
    if (aboutInView) setSection(sections.about.url)
    if (skillsInView) setSection(sections.skills.url)
    if (projectsInView) setSection(sections.projects.url)
    if (contactInView) setSection(sections.contact.url)

  }, [stateAnimation, heroInView, aboutInView, skillsInView, projectsInView, contactInView])

  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        {stateAnimation === 'idle' ? (
          <>
            <Navbar section={section} setSection={setSection} />
            <SocialBar />
            <SectionBar section={section} setSection={setSection} />
          </>
        ) : null}

        <ContainerSection stateAnimation={stateAnimation}>
          <section ref={heroRef}><Hero id="hero" setStateAnimation={setStateAnimation} stateAnimation={stateAnimation} /></section>
          {stateAnimation === 'idle' ? (
            <>
              <motion.section id="about" ref={aboutRef}><Reveal inView={aboutInView}><About /></Reveal></motion.section>
              <motion.section id="skills" ref={skillsRef}><Reveal inView={skillsInView}><Skills /></Reveal></motion.section>
              <motion.section id="projects" ref={projectsRef}><Reveal inView={projectsInView}><Projects /></Reveal></motion.section>
              <motion.section id="contact" ref={contactRef}><Reveal inView={contactInView}><Contact /></Reveal></motion.section>
            </>
          ) : null}
        </ContainerSection>
        {stateAnimation === 'idle' ? (
          <Footer />
        ) : null}
      </motion.div>
    </Layout>
  )
}

export default IndexPage