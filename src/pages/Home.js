import React from 'react'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import Hero from '../components/Hero'
import Brand from '../components/Brand'
import LatestGame from '../components/LatestGame'
import LiveMatch from '../components/LiveMatch'
import FeaturedGame from '../components/FeaturedGame'
import Shop from '../components/Shop'
import Blog from '../components/Blog'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import Top from '../components/Top'

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
          {/* <Shop /> */}
          {/* <Blog /> */}
          <NewsLetter />
          
        </article>
      </main>
      <Footer />
      <Top/>
    </div>
  )
}

export default Home