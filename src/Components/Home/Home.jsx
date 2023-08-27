import React from 'react'
import Card from '../Card/Card'
import "./Home.css";

const Home = () => {
  return (
    <div className='home_container'>
      <div className='home'>
        <div className='home1'>
          <p className='p1'>Pricing</p>
          <p className='p2'>Simple, transparent pricing</p>
          <p className='p3'>We believe untitled should be accessible to all companies, no matter the size.</p>
        </div>
        <div className='home2'>
          <Card heading="$10/mth" subheading1="Basic plan" subheading2="billed anuaaly"
            l1="Access to all basic features"
            l2="Basic reporting and analytics"
            l3="up to 10 individual users"
            l4="200GB individual data each user"
            l5="Basic chat and email support"
          />
          <Card heading="$10/mth" subheading1="Basic plan" subheading2="billed anuaaly"
            l1="Access to all basic features"
            l2="Basic reporting and analytics"
            l3="up to 10 individual users"
            l4="200GB individual data each user"
            l5="Basic chat and email support"
          />
          <Card heading="$10/mth" subheading1="Basic plan" subheading2="billed anuaaly"
            l1="Access to all basic features"
            l2="Basic reporting and analytics"
            l3="up to 10 individual users"
            l4="200GB individual data each user"
            l5="Basic chat and email support"
          />
        </div>
      </div>
    </div>
  )
}

export default Home;