import Nav from '../components/Nav'
import Footer from '../components/Footer'
import TourGrid from '../components/TourComponents/TourGrid'
import TourHero from '../components/TourComponents/TourHero'

const ToursPage = () => {
  return (
    <>
      <Nav />
      <div className="tours-page">
        <TourHero />
        <TourGrid />
      </div>
      <Footer />
    </>
  )
}

export default ToursPage
