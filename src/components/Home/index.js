import React from 'react'
import './styles.css'
import Product from '../Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3740_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123312121"
            title='Fujifilm Instax Mini 9 Instant Camera, Flamingo Pink'
            price={59.99}
            image='https://m.media-amazon.com/images/I/71n0IwzJu-L._AC_UY436_FMwebp_QL65_.jpg'
            rating={5}
          />
          <Product
            id="48812121"
            title='Amazon Basics Kids Jumping Dolphins Patterned Throw Blanket with Stuffed Animal Dolphin'
            price={23.56}
            image='https://m.media-amazon.com/images/I/810bPfyI30L._AC_UL640_FMwebp_QL65_.jpg'
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="88812121"
            title='Listerine Total Care Anticavity Fluoride Mouthwash, 6 Benefit Oral Rinse Helps Kill 99% of Bad Breath Germs, Prevents Cavities'
            price={29.99}
            image='https://m.media-amazon.com/images/I/81vNiROdiIL._AC_UL640_QL65_.jpg'
            rating={5}
          />
          <Product
            id="28812198"
            title='SteelSeries Apex 3 RGB Gaming Keyboard – 10-Zone RGB Illumination – IP32 Water Resistant – Premium Magnetic Wrist Rest (Whisper Quiet Gaming Switch)'
            price={47.41}
            image='https://m.media-amazon.com/images/I/81L8fk7SGQL._AC_UY436_FMwebp_QL65_.jpg'
            rating={2}
          />
          <Product
            id="39852121"
            title='Beautify Beauties Hair Spray Bottle – Ultra Fine Continuous Water Mister for Hairstyling, Cleaning, Plants, Misting n Skin Care'
            price={12.99}
            image='https://m.media-amazon.com/images/I/61Fo3PZuwbL._AC_UL640_FMwebp_QL65_.jpg'
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="50802321"
            title='Tree Hut Shea Sugar Scrub Tropical Mango, 18oz, Ultra Hydrating and Exfoliating Scrub for Nourishing Essential Body Care'
            price={7.99}
            image='https://m.media-amazon.com/images/I/51zLgWgsx6L._AC_UL640_QL65_.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home