import Featured from '../../component/Featured/Featured'
import FeaturedProperties from '../../component/FeaturedProperties/FeaturedProperties'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import MailList from '../../component/MailList/MailList'
import Navbar from '../../component/Navbar/Navbar'
import PropertyList from '../../component/PropertyList/PropertyList'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='homeContainer'>
        <Featured/>
        <h1 className='homeTitle'>
        Browse by property type
        </h1>
        <PropertyList/>
        <h1 className='homeTitle'>Homes guests love</h1>
        <FeaturedProperties/> 
      </div>
      <MailList/>
      <Footer/>
    </div>
  )
}

export default Home
