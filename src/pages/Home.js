import React from 'react'
import Banner from '../assets/banner.jpg'
import {Link} from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className='home' style={{backgroundImage: `url(${Banner})`}}>
                
             <div className='headerContainer'>
                <h1>Food corner</h1>
                <p>INDIAN FOOD AT A CLICK.</p>
                <Link to='/menu'>
                    <button>Order Now</button>
                </Link>
             </div>

        </div>
    )
}

export default Home
