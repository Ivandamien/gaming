import React from 'react'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import Hero from '../components/Hero'
import Brand from '../components/Brand'
import LatestGame from '../components/LatestGame'

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
            <LatestGame/>
          </div>
        </article>
      </main>
    </div>
  )
}

export default Home