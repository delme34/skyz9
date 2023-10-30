import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/banner3.jpg';
import "../styles/HomeStyles.css";
import Menu from './Menu';
import Payment from './Payment';


const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food`MENU</h1>
          <p>good food, good mood.
          </p>
          <Link to="/menu">
            <button>Menu</button>
          </Link>
        </div>

        <div className="headerContainer">
          <Link to="/payment">
            <button>Payment</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home