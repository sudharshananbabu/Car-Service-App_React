import React from "react"
import Footer from "../../common/footer/Footer"
import ServiceHome from "../HomeSection/Destina/ServiceHome"
import Download from "../HomeSection/Download/Download"
import Gallery from "../HomeSection/gallery/Gallery"
import Hero from "../HomeSection/Hero"
import HomeAbout from "../HomeSection/HomeAbout"
import MostPopular from "../HomeSection/popular/MostPopular"
import Works from "../HomeSection/work/Works"

const Home = () => {
    return (
        <>
          <Hero />
          <HomeAbout />
          <MostPopular/>
          <ServiceHome />
          <Download />
          <Works />
          <Gallery />
          <Footer />
        </>
    )
}

export default Home