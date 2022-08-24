import { Button } from '@material-ui/core'
import React from 'react'

import './landing.css'

function LandingPage() {
  return (
    <>

        <div className="container">
           
            <h1>TUJIJENGE</h1>
            <p>We help you access building materials with ease</p>
            <Button variant='secondary'>Shop Now</Button>
        </div>
        <div className="details">
            <div>
                <h1>Here are some benefits of shopping with us</h1>
            </div>
            <div className='benefitone'>
                <p>Easy access to materials</p>
            </div>
        </div>
        <Button variant='outlined' >Shop Now</Button>
    </>
  )
}

export default LandingPage