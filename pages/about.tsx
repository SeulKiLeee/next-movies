import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import Seo from '../components/Seo'
import styles from '../styles/Home.module.css'

const About: NextPage = () => {
  return (
    <div>
      <Seo title="About" />
      <h1>About us</h1>
    </div>
  )
}

export default About
