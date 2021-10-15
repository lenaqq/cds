// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/layout'

// Step 2: Define your component
const ContactPage = () => {
  return (
    <Layout pageTitle='Contact US' pageHeading='Contact'>
        This is the contact page.
    </Layout>
  )
}   

// Step 3: Export your component
export default ContactPage