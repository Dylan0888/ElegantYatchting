import Nav from '../components/Nav'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our website! We are dedicated to providing the best services and products to our customers. Our team is passionate about delivering high-quality solutions that meet your needs.
        </p>
        <p className="text-lg mb-4">
          Our mission is to create a positive impact in the community and to continuously improve our offerings. We value feedback from our users and strive to exceed expectations.
        </p>
        <p className="text-lg">
          Thank you for visiting our website. We look forward to serving you!
        </p>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
