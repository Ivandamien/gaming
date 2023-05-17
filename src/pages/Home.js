import React from 'react'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBox />
      <main>

      <Hero/>
      </main>
    </div>
  )
}

export default Home