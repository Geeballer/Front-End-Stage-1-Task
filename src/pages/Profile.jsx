import Footer from "../components/Footer"
import LinkSection from "../components/LinkSection"
import User from "../components/User"
import Option from '../components/Option'
import Social from '../components/Social'

const profile = () => {
  return (
    <div className="profile">
        <User />
        <Option />
        <LinkSection />
        <Social />
        <Footer />
    </div>
  )
}

export default profile