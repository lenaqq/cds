// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle='About Me' pageHeading='About'>
        This is the about me  page.
    </Layout>
  )
}   

// Step 3: Export your component
export default AboutPage