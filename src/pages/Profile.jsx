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
    </div>
  )
}

export default profile