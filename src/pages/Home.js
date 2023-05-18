import React from 'react'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import Hero from '../components/Hero'
import Brand from '../components/Brand'
import LatestGame from '../components/LatestGame'
import LiveMatch from '../components/LiveMatch'
import FeaturedGame from '../components/FeaturedGame'
import Shop from '../components/Shop'

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBox />
      <main>
        <article>
          <Hero />
          <Brand/>
          <div className="section-wrapper">
            <LatestGame />
            <LiveMatch/>
          </div>
          <FeaturedGame/>
          <Shop/>
        </article>
      </main>
    </div>
  )
}

export default Home