
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
import { Helmet } from "react-helmet"


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
    // define a function that sets min-height of my-element to window.innerHeight:

    const setHeight = () => {
      if (stateAnimation === 'idle') {
        document.getElementById("hero").style.minHeight = (window.innerHeight - 70.4) + 'px';
        document.getElementById("about").style.minHeight = (window.innerHeight - 70.4) + 'px';
        document.getElementById("skills").style.minHeight = (window.innerHeight - 70.4) + 'px';
        document.getElementById("projects").style.minHeight = (window.innerHeight - 70.4) + 'px';
      } else {
        document.getElementById("hero").style.minHeight = window.innerHeight + 'px';
      }
    };

    // define mobile screen size:
    setHeight();
  }, [stateAnimation])

  useEffect(() => {
    if (heroInView) setSection(sections.hero.url)
    if (aboutInView) setSection(sections.about.url)
    if (skillsInView) setSection(sections.skills.url)
    if (projectsInView) setSection(sections.projects.url)
    if (contactInView) setSection(sections.contact.url)

  }, [heroInView, aboutInView, skillsInView, projectsInView, contactInView])

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Kevin es un un desarrollador web enfocado en trabajar principalmente en el frontend pero también el backend de aplicaciones web. Amante de la tecnología." />
        <meta name="keywords" content="Web, Desarrollador, Frontend, Backend" />
        <meta name="author" content="Kevin Pitti Castro" />
        <title>Kevin Pitti Castro | Desarrollador web</title>
        <link rel="canonical" href="https://kevinpc.com" />
      </Helmet>
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
              <motion.section ref={aboutRef}><Reveal inView={aboutInView}><About id="about" /></Reveal></motion.section>
              <motion.section ref={skillsRef}><Reveal inView={skillsInView}><Skills id="skills" /></Reveal></motion.section>
              <motion.section ref={projectsRef}><Reveal inView={projectsInView}><Projects id="projects" /></Reveal></motion.section>
              <motion.section ref={contactRef}><Reveal inView={contactInView}><Contact id="contact" /></Reveal></motion.section>
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