import React from "react"
import Nav from "../component/Nav"
import Intro from "../component/Intro"
import Featured from "../component/Featured"
import Skills from "../component/Skills"
import Projects from "../component/Projects"
import "../styles/global.css"
export default function Home() {
  return (
    <div>
      <Nav />
      <Intro />
      <Featured />
      <Skills />
      <Projects />
    </div>
  )
}
