import React from 'react'
import './Home.css'
import Product from './Product.js'
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
    <div className="home">
        <div className="home_container">
            <img className="home_containerBg" src="/img/bg.jpg"/>
        
            <div className="home_row">
                <Product key={0} id="123231" title="Drixoral No Drip Extra Moisture Spray, Soothes and Moisturizes Dry and Irritated Nasal Passages, 15ml" 
                price={7.99} image="/img/product1.jpg" rating={4}/>
                <Product key={1} id="231123" title="Star Projector, 3 in 1 Galaxy Projector Night Light Projector/LED Starlight Light/ Sky Light with Bluetooth Music Speaker" 
                price={37.99} image="/img/product2.jpg" rating={2}/>
            </div>

            <div className="home_row">
            <Product key={2} id="235523" title="Blink Mini – Compact indoor plug-in smart security camera, 1080 HD video, night vision, motion detection, two-way audio, Works with Alexa – 1 camera" 
                price={44.99} image="/img/product3.jpg" rating={5}/>
            <Product key={3} id="268123" title="Schmidt's Natural Deodorant, With No Aluminum Salts, for Women and Men, Hemp Seed Oil & Sage"
                price={6.99} image="/img/product4.jpg" rating={3}/>
            <Product key={4} id="237863" title="12 Rules for Life: An Antidote to Chaos
                by Jordan B. Peterson" 
                price={21.08} image="/img/product5.jpg" rating={4}/>
            </div>

            <div className="home_row">
            <Product key={5} id="233123" title="SEDIBUS Razor Bumps Solution 100g, Repair Serum for Ingrowns and Burns, Roll-on UNISEX" 
                price={19.99} image="/img/product6.jpg" rating={3}/>
            </div>
        </div>
    </div>
  )
}

export default Home